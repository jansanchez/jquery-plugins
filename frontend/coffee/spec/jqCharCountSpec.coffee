describe "charCount", () ->
	$form = null
	$txaMessage = null
	beforeEach () ->
		loadFixtures('jqCharCountContent.html')
		$form = $('#frmStep2')
		$txaMessage = $('#txaMessage')
		return
	it "debe existir el textArea", () ->
		expect($txaMessage).toExist()
		return
	it "debe estar habilitado el textArea", () ->
		expect($txaMessage).not.toBeDisabled()
		return
	it "debe tener el texto abc dentro", () ->
		expect($txaMessage).toHaveValue('abc')
		return
	return