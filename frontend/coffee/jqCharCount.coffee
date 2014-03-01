###*
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
###

(($) ->
    charCount = (options) ->
        console.log options
        return
    withElement::rand = (p1) ->
        console.log p1
        return
    $.fn.withElement = (params) ->
        if (typeof params is "undefined" or params.constructor is Object)
            new withElement(params)
        else
            $.error "El parámetro proporcionado " + params + " esta mal declarado o no es un objeto"
        return
    return
) jQuery

# como idea seria genial crear un plugin para los textarea que contabilizan caracteres y palabras.

