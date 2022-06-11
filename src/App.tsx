import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryItem from "./Gallery/GalleryItem";
import Gallery from "./Gallery/Gallery";

function App() {

  return (
    <div className="App">
      <h1>The Rick and Morty API</h1>
      {Gallery()}
    </div>

  );
}

export default App;
