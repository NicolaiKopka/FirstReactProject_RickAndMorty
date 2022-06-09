import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryItem from "./Gallery/GalleryItem";
import Gallery from "./Gallery/Gallery";

function App() {

  return (
    <div className="App">
      {Gallery()}
    </div>

  );
}

export default App;
