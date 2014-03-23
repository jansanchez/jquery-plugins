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
    this.dom = {};
    this.chars = 0;
    this.words = 0;
    this.currentValue = '';
    this.setDom();
    this.setMaxChars();
    this.subscribeEvents();
    this.getCharsCounter();
    _this = this;
  };
  charCount.prototype.setDom = function() {
    this.dom.el = this.options.el;
    this.dom.charsCounter = $(this.options.charsCounter);
  };
  charCount.prototype.setMaxChars = function() {
    this.chars = this.dom.el.val().length;
    this.dom.el.attr('data-maxchars', this.options.maxchars);
  };
  charCount.prototype.getCharsCounter = function() {
    this.chars = this.dom.el.val().length;
    if (this.chars >= this.options.maxchars) {
      this.dom.el.val(this.dom.el.val().substring(0, this.options.maxchars));
    }
    this.countAndShowCharsCounter();
  };
  charCount.prototype.countAndShowCharsCounter = function() {
    this.currentValue = this.dom.el.val();
    this.chars = this.currentValue.length;
    this.dom.charsCounter.html('Estas usando ' + this.chars + ' caracteres de ' + this.options.maxchars + '.');
  };
  charCount.prototype.subscribeEvents = function() {
    this.dom.el.on('keyup', this.events.keyUp);
  };
  charCount.prototype.events = {
    keyUp: function(e) {
      _this.getCharsCounter();
    }
  };
  $.fn.charCount = function(params) {
    var self;
    if (typeof params === "undefined" || params.constructor === Object) {
      self = this;
      return self.each(function() {
        var everyElement, instance, settings;
        everyElement = $(this);
        settings = $.extend({
          el: everyElement
        }, defaultSettings, params || {});
        instance = new charCount(settings);
        settings.el.data('instance', instance);
        return instance;
      });
    } else {
      $.error("El parámetro proporcionado " + params + " esta mal declarado o no es un objeto");
    }
  };
})(jQuery);
