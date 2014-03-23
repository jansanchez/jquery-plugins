describe("charCount", function() {
  var $charsCounter, $txaMessage, charsCounter, maxchars, message, plugin, pluginSpy;
  maxchars = 28;
  charsCounter = '#charCount';
  $txaMessage = null;
  $charsCounter = null;
  message = 'mensaje con muchos caracteres';
  pluginSpy = null;
  plugin = null;
  beforeEach(function() {
    var instance;
    loadFixtures('jqCharCountContent.html');
    $txaMessage = $('#txaMessage');
    $charsCounter = $(charsCounter);
    instance = $txaMessage.charCount({
      maxchars: maxchars,
      charsCounter: charsCounter
    });
    plugin = instance.data('instance');
  });
  it("debe existir el textArea en el DOM", function() {
    expect(plugin.dom.el).toExist();
  });
  it("debe estar habilitado el textArea para editar", function() {
    expect(plugin.dom.el).not.toBeDisabled();
  });
  it("debe tener definido un elemento DOM para contar los caracteres", function() {
    expect($charsCounter).toExist();
  });
  it("debe tener definido un numero maximo de caracteres", function() {
    expect(plugin.dom.el).toHaveAttr('data-maxchars', maxchars.toString());
  });
  it("debe quitar los caracteres que excedan el numero maximo de caracteres", function() {
    plugin.dom.el.val(message);
    plugin.getCharsCounter();
    expect(plugin.dom.el.val().length).not.toBeGreaterThan(maxchars);
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
