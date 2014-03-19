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
  it("debe bloquear el ingreso de caracteres cuando se encuentre en el límite máximo de caracteres", function() {
    expect(true).toBe(false);
  });
  it("Debería registrar el número de caracteres actualmente usados y el número de caracteres disponibles", function() {
    expect(true).toBe(false);
  });
  it("Debería poder usar múltiples instancias del plugin", function() {
    expect(true).toBe(false);
  });
});
