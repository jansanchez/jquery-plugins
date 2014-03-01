/**
withElement v0.1.0 - jQuery plugin withElement
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  var withElement;
  withElement = function(options) {
    console.log(options);
  };
  withElement.prototype.rand = function(p1) {
    console.log(p1);
  };
  $.fn.withElement = function(params) {
    if (typeof params === "undefined" || params.constructor === Object) {
      new withElement(params);
    } else {
      $.error("El parámetro proporcionado " + params + " esta mal declarado o no es un objeto");
    }
  };
})(jQuery);
