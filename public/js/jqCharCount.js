/**
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  var charCount;
  charCount = function(options) {
    console.log(options);
  };
  charCount.prototype.rand = function(p1) {
    console.log(p1);
  };
  $.fn.charCount = function(params) {
    if (typeof params === "undefined" || params.constructor === Object) {
      new charCount(params);
    } else {
      $.error("El parámetro proporcionado " + params + " esta mal declarado o no es un objeto");
    }
  };
})(jQuery);
