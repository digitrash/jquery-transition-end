/**
 * jQuery.fn.onTransitionEnd / jQuery.fn.onAnimationEnd
 * @author Michael Evans (http://github.com/digitrash)
 * @version 0.01
 * super-basic jQuery plugin to trigger callbacks after CSS transitions and animations.
 * Licensed under the MIT license
 */

(function($){

    $.fn.onTransitionEnd = function( callback ) {
        this.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", $.proxy(function(event){
            if (event.target === event.currentTarget) {
                this.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                if (typeof callback === 'function') {
                    callback.call(event.target);
                }
            }
        }, this));
        return this;
    };

    $.fn.onAnimationEnd = function( callback ) {
        this.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", $.proxy(function(event){
            if (event.target === event.currentTarget) {
                this.off("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
                if (typeof callback === 'function') {
                    callback.call(event.target);
                }
            }
        }, this));
        return this;
    };

})(jQuery);
