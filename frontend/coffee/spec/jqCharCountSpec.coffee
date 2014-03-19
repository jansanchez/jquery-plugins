describe "charCount", () ->
    maxchars = 100
    charsCounter = '#charCount'
    $txaMessage = null
    $charsCounter = null

    beforeEach () ->
        loadFixtures('jqCharCountContent.html')
        $txaMessage = $('#txaMessage')
        $charsCounter = $(charsCounter)
        $txaMessage.charCount({
            maxchars: maxchars,
            charsCounter: charsCounter
        })

        return
    it "debe existir el textArea en el DOM", () ->
        expect($txaMessage).toExist()
        return
    it "debe estar habilitado el textArea para editar", () ->
        expect($txaMessage).not.toBeDisabled()
        return
    it "debe tener definido un numero maximo de caracteres", () ->
        expect($txaMessage).toHaveAttr('data-maxchars', maxchars.toString())
        return
    it "debe tener definido un elemento DOM para contar los caracteres", () ->
        expect($charsCounter).toExist()
        return
    it "debe bloquear el ingreso de caracteres cuando se encuentre en el límite máximo de caracteres", () ->
        expect(true).toBe(false)
        return
    it "Debería registrar el número de caracteres actualmente usados y el número de caracteres disponibles", () ->
        expect(true).toBe(false)
        return
    it "Debería poder usar múltiples instancias del plugin", () ->
        expect(true).toBe(false)
        return
    return
