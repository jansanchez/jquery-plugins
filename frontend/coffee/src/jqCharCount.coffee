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
        @$el = options.$el
        @chars = 0
        @words = 0
        _this = @
        @setMaxChars()
        @setElementForCharCount()
        @subscribeEvents()
        @counterChar()
        return
    charCount::setMaxChars = () ->
        @$el.attr('data-maxchars', @options.maxchars)
        return
    charCount::setElementForCharCount = () ->
        @options.$charsCounter = $(@options.charsCounter)
        return
    charCount::counterChar = (e) ->
        console.log e
        if e
            console.log e.keyCode
        _this.current_value = $.trim(_this.$el.val())
        _this.words = _this.current_value.replace(/\s+/gi, ' ').split(' ').length
        _this.chars = _this.current_value.length
        if !_this.chars
            _this.chars = 0
            _this.words = 0
        if (_this.chars >= _this.options.maxchars)
            _this.$el.val(_this.$el.val().substring(0, _this.options.maxchars))
        _this.setCharsCounter()
        return
    charCount::setCharsCounter = () ->
        @options.$charsCounter.html('Estas usando ' + @chars + ' caracteres de ' + @options.maxchars + '.') 
        return
    charCount::subscribeEvents = () ->
        @$el.on('keyup', @counterChar)
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

