describe "charCount", () ->
    maxchars      = 28
    charsCounter  = '#charCount'
    $txaMessage   = null
    $charsCounter = null
    message       = 'mensaje con muchos caracteres'
    pluginSpy     = null
    beforeEach () ->
        loadFixtures('jqCharCountContent.html')
        $txaMessage = $('#txaMessage')
        $charsCounter = $(charsCounter)
        pluginSpy = spyOn($.fn, "charCount")
        $txaMessage.charCount({
            maxchars: maxchars,
            charsCounter: charsCounter
        })
        return

    it "debe llamar correctamente una instancia del plugin", () ->
        expect(pluginSpy).toHaveBeenCalled()
        return
    it "debe existir el textArea en el DOM", () ->
        expect($txaMessage).toExist()
        return
    it "debe estar habilitado el textArea para editar", () ->
        expect($txaMessage).not.toBeDisabled()
        return
    it "debe tener definido un elemento DOM para contar los caracteres", () ->
        expect($charsCounter).toExist()
        return
    it "debe tener definido un numero maximo de caracteres", () ->
        #console.log $txaMessage.attr('data-maxchars')
        expect($txaMessage).toHaveAttr('data-maxchars', maxchars.toString())
        return
    it "debe quitar los caracteres que excedan el numero maximo de caracteres", () ->
        $txaMessage.val(message)
        expect($txaMessage.val().length).not.toBeGreaterThan(maxchars)
        return
    it "Debería registrar el número de caracteres actualmente usados y el número de caracteres disponibles", () ->
        expect(true).toBe(false)
        pending()
        return
    it "Debería poder usar múltiples instancias del plugin", () ->
        expect(true).toBe(false)
        pending()
        return
    return


