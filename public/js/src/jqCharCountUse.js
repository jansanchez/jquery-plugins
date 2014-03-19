$(document).on('ready', function() {
  $('#txaMessage').charCount({
    maxchars: 50,
    charsCounter: '#charCount'
  });
  console.log('dom cargado!');
});
