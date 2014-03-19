$(document).on('ready', function() {
  $('#txaMessage').charCount({
    maxchars: 104,
    charsCounter: '#charCount'
  });
  $('#txaMessage2').charCount({
    maxchars: 236,
    charsCounter: '#charCount2'
  });
  console.log('dom cargado!');
});
