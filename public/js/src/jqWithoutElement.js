/**
withoutElement v0.1.0 - jQuery plugin withoutElement
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  var withoutElement;
  withoutElement = function(options) {
    console.log(options);
  };
  withoutElement.prototype.rand = function(p1) {
    console.log(p1);
  };
  $.fn.withoutElement = function(params) {
    if (typeof params === "undefined" || params.constructor === Object) {
      new withoutElement(params);
    } else {
      $.error("El parámetro proporcionado " + params + " esta mal declarado o no es un objeto");
    }
  };
})(jQuery);
