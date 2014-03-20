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
    this.chars = 0;
    this.words = 0;
    this.dom = {};
    _this = this;
    this.setDom();
    this.setMaxChars();
    this.subscribeEvents();
    this.counterChar();
  };
  charCount.prototype.setDom = function() {
    this.dom.charsCounter = $(this.options.charsCounter);
  };
  charCount.prototype.setMaxChars = function() {
    this.currentValue = this.$el.val();
    this.chars = this.currentValue.length;
    this.$el.attr('data-maxchars', this.options.maxchars);
  };
  charCount.prototype.counterChar = function(e) {
    if (_this.chars >= _this.options.maxchars) {
      _this.$el.val(_this.$el.val().substring(0, _this.options.maxchars));
    }
    _this.setCharsCounter();
  };
  charCount.prototype.setCharsCounter = function() {
    this.currentValue = this.$el.val();
    this.chars = this.currentValue.length;
    this.dom.charsCounter.html('Estas usando ' + this.chars + ' caracteres de ' + this.options.maxchars + '.');
  };
  charCount.prototype.subscribeEvents = function() {
    this.$el.on('keyup', this.counterChar);
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
