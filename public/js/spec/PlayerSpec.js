describe("Player", function() {
  var player, song;
  player = void 0;
  song = void 0;
  beforeEach(function() {
    player = new Player();
    song = new Song();
  });
  it("should be able to play a Song(debe ser capaz de reproducir una canción)", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
    expect(player).toBePlaying(song);
  });
  describe("when song has been paused(cuando la canción está en pausa)", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });
    it("should indicate that the song is currently paused(debe indicar que la canción está en pausa)", function() {
      expect(player.isPlaying).toBeFalsy();
      expect(player).not.toBePlaying(song);
    });
    it("should be possible to resume(debería ser posible reanudar)", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, "persistFavoriteStatus");
    player.play(song);
    player.makeFavorite();
    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);
      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  describe("when song has been stopped", function() {
    it("don't should be currently playing", function() {
      player.stop(song);
      return expect(player.isPlaying).toBeFalsy();
    });
    it("currently playing song should be null", function() {
      player.stop(song);
      return expect(player.currentlyPlayingSong).toBeNull();
    });
    return it("the previous song should be equal to song", function() {
      player.stop(song);
      return expect(player.previousSong).toEqual(song);
    });
  });
});
