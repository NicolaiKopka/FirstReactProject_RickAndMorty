import GalleryItem from "./GalleryItem";
import {useEffect, useState} from "react";
import {AllCharacters, Character, Info} from "../model";
import "./Gallery.css";


export default function Gallery() {

    const [name, setName] = useState("");
    const [searchState, setSearchState] = useState("");
    const [allCharacters, setFetch] = useState<Array<Character>>([])
    const [info, setInfo] = useState<Info>()

    useEffect(() => requestCharacters("https://rickandmortyapi.com/api/character"), []);

    function requestCharacters(url: string) {
        fetch(url)
            .then(response => response.json())
            .then((characters: AllCharacters) => {
                setFetch(characters.results);
                setInfo(characters.info);
            })
    }

    const nextPage = () => {
        requestCharacters(info!.next);
    }

    const prevPage = () => {
        requestCharacters(info!.prev);
    }


    const characters = allCharacters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()) && (c.status.toLowerCase().includes(searchState.toLowerCase())))
        .map(c => <GalleryItem character={{name: c.name, image: c.image, species: c.species, status: c.status}}/>);

    return (
        <div className="gallery-wrapper">
            <div className={"search"}>
                <div className={"search-items"}>
                    <label className={"label"} htmlFor={"search-bar"}>Search for Character: </label>
                    <input className={"action-field"} name={"search-bar"} type={"text"} value={name} onChange={ev => setName(ev.target.value)}></input>
                </div>
                <div className={"search-items"}>
                    <label className={"label"} htmlFor={"status"}>Status:</label>
                    <select className={"action-field"} name={"status"} value={searchState} onChange={ev => setSearchState(ev.target.value)}>
                        <option selected value={""}>All</option>
                        <option value={"Alive"}>Alive</option>
                        <option value={"Dead"}>Dead</option>
                        <option value={"Unknown"}>Unknown</option>
                    </select>
                </div>

            </div>

            <div className={"gallery"}>
                {characters}
            </div>
            {info?.prev && <button onClick={prevPage}>Prev</button>}
            {info?.next && <button onClick={nextPage}>Next</button>}
        </div>
    )
}

