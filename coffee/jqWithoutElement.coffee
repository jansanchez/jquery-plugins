###*
withoutElement v0.1.0 - jQuery plugin withoutElement
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
###

(($) ->
    withoutElement = (options) ->
        console.log options
        return

    withoutElement::rand = (p1) ->
        console.log p1
        return

    $.fn.withoutElement = (params) ->
        if (typeof params is "undefined" or params.constructor is Object)
            new withoutElement(params)
        else
            $.error "El parámetro proporcionado " + params + " esta mal declarado o no es un objeto"
        return
    return
) jQuery

#http://www.websanova.com/blog/jquery/10-coding-tips-to-write-superior-jquery-plugins#.Uw0c53WSzOg
