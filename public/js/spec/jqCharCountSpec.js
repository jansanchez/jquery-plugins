describe("charCount", function() {
  var $charsCounter, $txaMessage, charsCounter, maxchars;
  maxchars = 100;
  charsCounter = '#charCount';
  $txaMessage = null;
  $charsCounter = null;
  beforeEach(function() {
    loadFixtures('jqCharCountContent.html');
    $txaMessage = $('#txaMessage');
    $charsCounter = $(charsCounter);
    $txaMessage.charCount({
      maxchars: maxchars,
      charsCounter: charsCounter
    });
  });
  it("debe existir el textArea en el DOM", function() {
    expect($txaMessage).toExist();
  });
  it("debe estar habilitado el textArea para editar", function() {
    expect($txaMessage).not.toBeDisabled();
  });
  it("debe tener definido un numero maximo de caracteres", function() {
    expect($txaMessage).toHaveAttr('data-maxchars', maxchars.toString());
  });
  it("debe tener definido un elemento DOM para contar los caracteres", function() {
    expect($charsCounter).toExist();
  });
});
