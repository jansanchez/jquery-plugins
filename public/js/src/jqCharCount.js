/**
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
ie9+
License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  var charCount, defaultSettings, _this;
  defaultSettings = {
    maxchars: 150,
    charsCounter: '#charCount'
  };
  _this = null;
  charCount = function(options) {
    this.options = options;
    this.$el = options.$el;
    _this = this;
    this.setMaxChars();
    this.setElementForCharCount();
    this.subscribeEvents();
    this.counterChar();
  };
  charCount.prototype.setMaxChars = function() {
    this.$el.attr('data-maxchars', this.options.maxchars);
  };
  charCount.prototype.setElementForCharCount = function() {
    this.options.$charsCounter = $(this.options.charsCounter);
  };
  charCount.prototype.counterChar = function() {
    _this.current_value = $.trim(_this.$el.val());
    _this.words = _this.current_value.replace(/\s+/gi, ' ').split(' ').length;
    _this.chars = _this.current_value.length;
    if (!_this.chars) {
      _this.chars = 0;
      _this.words = 0;
    }
    _this.setCharsCounter();
  };
  charCount.prototype.setCharsCounter = function() {
    this.options.$charsCounter.html('Estas usando ' + this.chars + ' caracteres de ' + this.options.maxchars + '.');
  };
  charCount.prototype.subscribeEvents = function() {
    this.$el.on('input', this.counterChar);
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
