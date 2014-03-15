describe("charCount", function() {
  var $form, $txaMessage;
  $form = null;
  $txaMessage = null;
  beforeEach(function() {
    loadFixtures('jqCharCountContent.html');
    $form = $('#frmStep2');
    $txaMessage = $('#txaMessage');
  });
  it("debe estar habilitado el textArea", function() {
    expect($txaMessage).not.toBeDisabled();
  });
});
