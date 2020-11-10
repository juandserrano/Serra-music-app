import React from "react";

function Song({ currentSong: { cover, name, artist }, isPlaying }) {
  return (
    <div className={`song-container ${isPlaying ? "img-spin" : ""}`}>
      <img alt={name} src={cover} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
}

export default Song;
