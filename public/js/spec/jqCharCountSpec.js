describe("charCount", function() {
  var $form, $txaMessage;
  $form = null;
  $txaMessage = null;
  beforeEach(function() {
    loadFixtures('jqCharCountContent.html');
    $form = $('#frmStep2');
    $txaMessage = $('#txaMessage');
  });
  it("debe existir el textArea", function() {
    expect($txaMessage).toExist();
  });
  it("debe estar habilitado el textArea", function() {
    expect($txaMessage).not.toBeDisabled();
  });
  it("debe tener el texto abc dentro", function() {
    expect($txaMessage).toHaveValue('abc');
  });
});
