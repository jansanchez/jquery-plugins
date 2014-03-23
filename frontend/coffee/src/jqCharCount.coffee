###*
charCount v0.1.0 - jQuery plugin charCount
(c) 2014 - @jansanchez
ie9+
License: http://www.opensource.org/licenses/mit-license.php
###

(($) ->
    defaultSettings = {
        maxchars: 150,
        charsCounter: '#charCount'
    }
    _this = null
    charCount = (options) ->
        #console.log options
        @options = options
        @dom = {}
        @chars = 0
        @words = 0
        @currentValue = ''
        @setDom()
        @setMaxChars()
        @subscribeEvents()
        @getCharsCounter()
        _this = @
        return
    charCount::setDom = () ->
        @dom.el = @options.el
        @dom.charsCounter = $(@options.charsCounter)
        return
    charCount::setMaxChars = () ->
        @chars = @dom.el.val().length
        @dom.el.attr('data-maxchars', @options.maxchars)
        #console.log(@dom.el.attr('data-maxchars'))
        return
    charCount::getCharsCounter = () ->
        if (@chars >= @options.maxchars)
            @dom.el.val(@dom.el.val().substring(0, @options.maxchars))
        @countAndShowCharsCounter()
        return
    charCount::countAndShowCharsCounter = () ->
        @currentValue = @dom.el.val()
        @chars = @currentValue.length
        @dom.charsCounter.html('Estas usando ' + @chars + ' caracteres de ' + @options.maxchars + '.')
        return
    charCount::subscribeEvents = () ->
        @dom.el.on('keyup', @events.keyUp)
        return
    charCount::events = {
        keyUp : (e) ->
            #@words = @currentValue.replace(/\s+/gi, ' ').split(' ').length
            _this.getCharsCounter()
            return
    }

    $.fn.charCount = (params) ->
        if (typeof params is "undefined" or params.constructor is Object)
            self = this
            return self.each( ()->
                everyElement = $(this)
                #console.log(everyElement)
                settings = $.extend({el: everyElement}, defaultSettings, params || {})
                instance = new charCount(settings)
                settings.el.data('instance', instance)
                return instance
            )
        else
            $.error "El parámetro proporcionado " + params + " esta mal declarado o no es un objeto"
        return
    return
) jQuery

# como idea seria genial crear un plugin para los textarea que contabilizan caracteres y palabras.
#http://www.websanova.com/blog/jquery/10-coding-tips-to-write-superior-jquery-plugins#.Uw0c53WSzOg

