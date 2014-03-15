
beforeEach () ->
	jasmine.addMatchers toBePlaying: () ->
		compare: (actual, expected) ->
			player = actual
			pass : player.currentlyPlayingSong is expected and player.isPlaying
	return
