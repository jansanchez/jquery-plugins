$(document).on('ready', () ->

    instance = $('#txaMessage').charCount({
        maxchars: 50,
        charsCounter: '#charCount'
    })

    window.plugin = instance.data('instance')

    #$('#txaMessage2').charCount({
        #maxchars: 200,
        #charsCounter: '#charCount2'
    #})
    #console.log('dom cargado!')
    return
)

# como idea seria genial crear un plugin para los textarea que contabilizan caracteres y palabras.
#http://www.websanova.com/blog/jquery/10-coding-tips-to-write-superior-jquery-plugins#.Uw0c53WSzOg
