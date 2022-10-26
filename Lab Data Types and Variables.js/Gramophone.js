function gramophone(band, album, song) {
  let nameOfBand = band;
  let nameOfAlbum = album;
  let nameOfSong = song;
  let songDurationInsek =
    (nameOfAlbum.length * nameOfBand.length * nameOfSong.length) / 2;
  console.log(
    `The plate was rotated ${Math.ceil(songDurationInsek / 2.5)} times.`
  );
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
