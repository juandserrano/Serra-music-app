import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  currentSong,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  libraryOpen,
}) {
  return (
    <div className={`library ${libraryOpen ? "open-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
