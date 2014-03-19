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
    return
