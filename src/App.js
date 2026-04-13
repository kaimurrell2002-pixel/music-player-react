import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>My Music</h1>
      <Link to="/player" className="play-btn">Open Player</Link>
    </div>
  );
}

function Player() {
  const songs = Array.from({ length: 30 }, (_, i) => ({
    title: `Song ${i + 1}`,
    artist: "Unknown Artist",
    cover: `/covers/cover${(i) + 1}.jpg`,
    file: `/songs/song${(i) + 1}.mp3`
  }));

  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="player-container">
      
     
      <div className="sidebar">
        <h2>Playlist</h2>
        {songs.map((song, index) => (
          <div 
            key={index} 
            className="song-item"
            onClick={() => setCurrentSong(song)}
          >
            <img src={song.cover} alt="cover" />
            <div>
              <p>{song.title}</p>
              <span>{song.artist}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Player to play stuff of course */}
      <div className="main-player">
        <h2>Now Playing</h2>
        <img className="cover-large" src={currentSong.cover} alt="cover" />
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>

        <audio controls src={currentSong.file}></audio>

        <Link to="/" className="back-btn">⬅ Back</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  );
}