describe "charCount", () ->
    maxchars      = 28
    charsCounter  = '#charCount'
    $txaMessage   = null
    $charsCounter = null
    message       = 'mensaje con muchos caracteres'
    pluginSpy     = null
    plugin        = null
    beforeEach () ->
        loadFixtures('jqCharCountContent.html')
        $txaMessage = $('#txaMessage')
        $charsCounter = $(charsCounter)
        instance = $txaMessage.charCount({
            maxchars: maxchars,
            charsCounter: charsCounter
        })
        plugin = instance.data('instance')
        return

    it "debe llamar correctamente una instancia del plugin", () ->
        pluginSpy = spyOn($.fn, "charCount")
        $txaMessage.charCount()
        expect(pluginSpy).toHaveBeenCalled()
        return
    it "debe existir el textArea en el DOM", () ->
        expect(plugin.dom.el).toExist()
        return
    it "debe estar habilitado el textArea para editar", () ->
        expect(plugin.dom.el).not.toBeDisabled()
        return
    it "debe tener definido un elemento DOM para contar los caracteres", () ->
        expect($charsCounter).toExist()
        return
    it "debe tener definido un numero maximo de caracteres", () ->
        #console.log plugin.dom.el.attr('data-maxchars')
        expect(plugin.dom.el).toHaveAttr('data-maxchars', maxchars.toString())
        return
    it "Debería poder usar múltiples instancias del plugin", () ->
        expect(true).toBe(false)
        pending()
        return
    describe "al ingresar un texto mayor al limite fijado", () ->
        beforeEach () ->
            # inserto un texto mas grande que lo solicitado
            plugin.dom.el.val(message)
            return
        it "debe quitar los caracteres que excedan el numero maximo de caracteres", () ->
            # ejecuto la funcion que corta la cadena si esta excede el limite fijado
            plugin.getCharsCounter()
            expect(plugin.dom.el.val().length).not.toBeGreaterThan(maxchars)
            return
        it "Debería registrar el número de caracteres actualmente usados y el número de caracteres disponibles", () ->
            # ejecuto la funcion que corta la cadena si esta excede el limite fijado
            plugin.getCharsCounter()
            expect(plugin.dom.el.val().length).not.toBeGreaterThan(maxchars)
            expect(plugin.dom.charsCounter).toContainText(plugin.dom.el.val().length)
            expect(plugin.dom.charsCounter).toContainText(maxchars)
            return
        return
    return


