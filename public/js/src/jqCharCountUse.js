$(document).on('ready', function() {
  var instance, instance2;
  instance = $('#txaMessage').charCount({
    maxchars: 50,
    charsCounter: '#charCount'
  });
  window.plugin = instance.data('instance');
  instance2 = $('#txaMessage2').charCount({
    maxchars: 40,
    charsCounter: '#charCount2'
  });
  window.plugin2 = instance2.data('instance');
});
