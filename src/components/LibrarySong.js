import React from "react";

function LibrarySong({
  song,
  song: { name, artist, cover, id },
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  currentSong,
}) {
  const songSelectHandler = async (e) => {
    await setCurrentSong(song);
    playSongHandler();
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={currentSong !== song ? "library-song" : "library-song-active"}
    >
      <img alt={name} src={cover} />
      <div
        className={
          currentSong !== song ? "song-description" : "song-description-active"
        }
      >
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
