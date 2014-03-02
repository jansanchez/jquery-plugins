###*
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
License: http://www.opensource.org/licenses/mit-license.php
###

(($) ->
    defaultSettings = {
    }
    charCount = (options) ->
        console.log options
        this.options = options
        @rand()
        return
    charCount::rand = () ->
        console.log 'ejecutando random: ' + @options.$el.val()
        return
    $.fn.charCount = (params) ->
        if (typeof params is "undefined" or params.constructor is Object)
            self = this
            return self.each( ()->
                everyElement = $(this)
                #console.log(everyElement)
                settings = $.extend({$el: everyElement}, defaultSettings, params || {})
                return new charCount(settings)
            )
        else
            $.error "El parámetro proporcionado " + params + " esta mal declarado o no es un objeto"
        return
    return
) jQuery

# como idea seria genial crear un plugin para los textarea que contabilizan caracteres y palabras.
#http://www.websanova.com/blog/jquery/10-coding-tips-to-write-superior-jquery-plugins#.Uw0c53WSzOg

