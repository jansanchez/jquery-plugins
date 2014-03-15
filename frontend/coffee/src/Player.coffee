
Player = () ->

Player::play = (song) ->
	@currentlyPlayingSong = song
	@isPlaying = true
	return

Player::pause = () ->
	@isPlaying = false
	return

Player::resume = () ->
	throw new Error("song is already playing")  if @isPlaying
	@isPlaying = true
	return

Player::makeFavorite = () ->
	@currentlyPlayingSong.persistFavoriteStatus true
	return

Player::stop = (song) ->
	@isPlaying = false
	@previousSong = song
	@currentlyPlayingSong = null
	return