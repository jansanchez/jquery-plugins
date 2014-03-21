describe("charCount", function() {
  var $charsCounter, $txaMessage, charsCounter, maxchars, message, pluginSpy;
  maxchars = 28;
  charsCounter = '#charCount';
  $txaMessage = null;
  $charsCounter = null;
  message = 'mensaje con muchos caracteres';
  pluginSpy = null;
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
  it("debe tener definido un elemento DOM para contar los caracteres", function() {
    expect($charsCounter).toExist();
  });
  it("debe tener definido un numero maximo de caracteres", function() {
    expect($txaMessage).toHaveAttr('data-maxchars', maxchars.toString());
  });
  it("debe quitar los caracteres que excedan el numero maximo de caracteres", function() {
    $txaMessage.val(message);
    expect($txaMessage.val().length).not.toBeGreaterThan(maxchars);
  });
  it("Debería registrar el número de caracteres actualmente usados y el número de caracteres disponibles", function() {
    expect(true).toBe(false);
    pending();
  });
  it("Debería poder usar múltiples instancias del plugin", function() {
    expect(true).toBe(false);
    pending();
  });
});
