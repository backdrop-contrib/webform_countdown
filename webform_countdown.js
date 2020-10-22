/**
 * @file
 * Webform countdown JS module.
 */


/**
 *  Perform countdown function on appropriate text fields.
 */
(function ($) {
  Backdrop.behaviors.webformCountdown = {
    attach: function (context, settings) {
      $.each(Backdrop.settings.webformCountdown, function() {
        $('textarea[name$="[' + this.key + ']"]').once(this.key).counter({
          type: this.type,
          goal: this.max,
          msg: this.message,
          append: false
        });
      });
    }
  };
})(jQuery);
