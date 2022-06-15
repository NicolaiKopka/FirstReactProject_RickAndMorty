import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryItem from "./Gallery/GalleryItem";
import Gallery from "./Gallery/Gallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";

function App() {

    return (
        <div className="App">
            <h1>The Rick and Morty API</h1>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Gallery/>} />
                    <Route path={"character/:id"} element={<CharacterDetailPage/>} />
                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;
