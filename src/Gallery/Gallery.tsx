import GalleryItem from "./GalleryItem";
import {useEffect, useState} from "react";
import {AllCharacters, Character, Info} from "../model";
import "./Gallery.css";
import axios from "axios";


export default function Gallery() {

    const [name, setName] = useState(localStorage.getItem("search") ?? "");
    const [searchState, setSearchState] = useState("");
    const [allCharacters, setFetch] = useState<Array<Character>>([])
    const [info, setInfo] = useState<Info>()
    const [error, setError] = useState("");
    const [page, setPage] = useState(localStorage.getItem("page") ?? "1")

    useEffect(() => {
        localStorage.setItem("page", page)
    }, [page])

    useEffect(() => requestCharacters(), []);

    useEffect(() => {
        setTimeout(() => setError(""), 3000)
    }, [error])

    // function requestCharacters(url: string) {
    //     fetch(url)
    //         .then(response => {
    //             if(response.status === 200) {
    //                 return response.json();
    //             }
    //             throw new Error();
    //         })
    //         .then((characters: AllCharacters) => {
    //             setFetch(characters.results);
    //             setInfo(characters.info);
    //         })
    //         .catch(e => setError("Ahhhh, nix gut"))
    // }

    function requestCharacters(url: string = `https://rickandmortyapi.com/api/character/?page=${page}`) {
        axios.get(url)
            .then(response => {
                if(response.status === 200) {
                    return response.data
                }
                throw new Error("doof")
            })
            .then((characters: AllCharacters) => {
                setFetch(characters.results);
                setInfo(characters.info);
            })
            .catch(e => setError("Ahhhh, nix gut"))
    }

    const nextPage = () => {
        setPage(oldPage => `${parseInt(oldPage) + 1}`)
        requestCharacters(info!.next);
    }

    const prevPage = () => {
        setPage(oldPage => `${parseInt(oldPage) - 1}`)
        requestCharacters(info!.prev);
    }


    const characters = allCharacters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()) && (c.status.toLowerCase().includes(searchState.toLowerCase())))
        .map((c, index) => <GalleryItem key={c.id} character={c}/>);

    return (
        <div className="gallery-wrapper">
            {error &&
                <div className={"gallery-error"}>{error}</div>
            }
            <div className={"search"}>
                <div className={"search-items"}>
                    <label className={"label"} htmlFor={"search-bar"}>Search for Character: </label>
                    <input maxLength={10} data-testid="gallery-input" className={"action-field"}
                           name={"search-bar"} type={"text"}
                           value={name} onChange={ev => {
                               localStorage.setItem("search", ev.target.value)
                               setName(ev.target.value)
                    }}></input>
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
            <div data-testid="gallery-test" className={"gallery"}>
                {characters}
            </div>
            {info?.prev && <button onClick={prevPage}>Prev</button>}
            {info?.next && <button onClick={nextPage}>Next</button>}
        </div>
    )
}

