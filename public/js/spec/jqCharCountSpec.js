describe("charCount", function() {
  var $form, $txaMessage;
  $form = null;
  $txaMessage = null;
  beforeEach(function() {
    loadFixtures('jqCharCountContent.html');
    $form = $('#frmStep2');
    $txaMessage = $('#txaMessage');
    $txaMessage.charCount();
  });
  it("debe existir el textArea en el DOM", function() {
    expect($txaMessage).toExist();
  });
  it("debe estar habilitado el textArea para editar", function() {
    expect($txaMessage).not.toBeDisabled();
  });
  it("debe tener el texto abc dentro", function() {
    expect($txaMessage).toHaveValue('abc');
  });
});
