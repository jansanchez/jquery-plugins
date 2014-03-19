/**
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
ie9+
License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  var charCount, defaultSettings;
  defaultSettings = {
    maxchars: 150,
    charsCounter: '#charCount'
  };
  charCount = function(options) {
    console.log(options);
    this.options = options;
    this.setMaxChars();
    this.setCharsCounter();
  };
  charCount.prototype.rand = function() {
    console.log('ejecutando random: ' + this.options.$el.val());
  };
  charCount.prototype.setMaxChars = function() {
    this.options.$el.attr('data-maxchars', this.options.maxchars);
  };
  charCount.prototype.setCharsCounter = function() {
    this.options.$charsCounter = $(this.options.charsCounter);
  };
  $.fn.charCount = function(params) {
    var self;
    if (typeof params === "undefined" || params.constructor === Object) {
      self = this;
      return self.each(function() {
        var everyElement, settings;
        everyElement = $(this);
        settings = $.extend({
          $el: everyElement
        }, defaultSettings, params || {});
        return new charCount(settings);
      });
    } else {
      $.error("El parámetro proporcionado " + params + " esta mal declarado o no es un objeto");
    }
  };
})(jQuery);
