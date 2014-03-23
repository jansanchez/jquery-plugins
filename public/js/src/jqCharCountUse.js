$(document).on('ready', function() {
  var instance;
  instance = $('#txaMessage').charCount({
    maxchars: 50,
    charsCounter: '#charCount'
  });
  window.plugin = instance.data('instance');
});
