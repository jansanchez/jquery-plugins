$(document).on('ready', function() {
  $('#txaMessage').charCount({
    maxchars: 100,
    charsCounter: '#charCount'
  });
  $('#txaMessage2').charCount({
    maxchars: 200,
    charsCounter: '#charCount2'
  });
  console.log('dom cargado!');
});
