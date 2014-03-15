
describe "Player", () ->
	player = undefined
	song = undefined

	beforeEach () ->
		player = new Player()
		song = new Song()
		return

	it "should be able to play a Song(debe ser capaz de reproducir una canción)", () ->
		player.play song
		expect(player.currentlyPlayingSong).toEqual song
		
		#demonstrates use of custom matcher
		expect(player).toBePlaying song
		return

	describe "when song has been paused(cuando la canción está en pausa)", () ->
		beforeEach () ->
			player.play song
			player.pause()
			return

		it "should indicate that the song is currently paused(debe indicar que la canción está en pausa)", () ->
			expect(player.isPlaying).toBeFalsy()
			
			# demonstrates use of 'not' with a custom matcher
			expect(player).not.toBePlaying song
			return

		it "should be possible to resume(debería ser posible reanudar)", () ->
			player.resume()

			expect(player.isPlaying).toBeTruthy()
			expect(player.currentlyPlayingSong).toEqual song
			return

		return


	# demonstrates use of spies to intercept and test method calls
	it "tells the current song if the user has made it a favorite", () ->
		spyOn song, "persistFavoriteStatus"
		player.play song
		player.makeFavorite()
		expect(song.persistFavoriteStatus).toHaveBeenCalledWith true
		return


	#demonstrates use of expected exceptions
	describe "#resume", () ->
		it "should throw an exception if song is already playing", () ->
			player.play song
			expect( () ->
				player.resume()
				return
			).toThrowError "song is already playing"
			return

		return


	describe "when song has been stopped", () ->
		it "don't should be currently playing", () ->
			player.stop song

			expect(player.isPlaying).toBeFalsy()

		it "currently playing song should be null", () ->
			player.stop song

			expect(player.currentlyPlayingSong).toBeNull()

		it "the previous song should be equal to song", () ->
			player.stop song

			expect(player.previousSong).toEqual song

	return
