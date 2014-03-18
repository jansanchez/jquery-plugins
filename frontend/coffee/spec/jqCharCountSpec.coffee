describe "charCount", () ->
    $form = null
    $txaMessage = null
    beforeEach () ->
        loadFixtures('jqCharCountContent.html')
        $form = $('#frmStep2')
        $txaMessage = $('#txaMessage')
        $txaMessage.charCount()
        return
    it "debe existir el textArea en el DOM", () ->
        expect($txaMessage).toExist()
        return
    it "debe estar habilitado el textArea para editar", () ->
        expect($txaMessage).not.toBeDisabled()
        return
    it "debe tener el texto abc dentro", () ->
        expect($txaMessage).toHaveValue('abc')
        return
    return
