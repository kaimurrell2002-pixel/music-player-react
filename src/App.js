import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>🎵 Music Player</h1>
      <Link to="/player" className="btn">Open Player</Link>
    </div>
  );
}

function Player() {
  const [song, setSong] = useState(localStorage.getItem("song") || "No song selected");

  useEffect(() => {
    localStorage.setItem("song", song);
  }, [song]);

  return (
    <div className="container">
      <h2>Now Playing</h2>
      <p className="song">{song}</p>

      <div className="buttons">
        <button onClick={() => setSong("Song 1")}>Song 1</button>
        <button onClick={() => setSong("Song 2")}>Song 2</button>
        <button onClick={() => setSong("Song 3")}>Song 3</button>
      </div>

      <Link to="/" className="btn back">⬅ Back</Link>
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