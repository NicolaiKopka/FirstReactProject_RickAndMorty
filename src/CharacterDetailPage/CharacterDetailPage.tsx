import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character, DetailCharacter} from "../model";
import axios from "axios";


export default function CharacterDetailPage() {

    const [character, setCharacter] = useState<DetailCharacter>()
    const id = useParams().id

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then(c => setCharacter(c))
    }, [id])

    return (
        <div>
            <img alt={""} className={"detail-img"} src={character?.image}/>
            <div>
                <h3 data-testId="name-headline">{character?.name}</h3>
                <div data-testId="status-div" className={"char-detail"}>
                    <span className={"bold"}>Status:</span> {character?.status}
                </div>
                <div data-testId="species-div" className={"char-detail"}>
                    <span className={"bold"}>Species:</span> {character?.species}
                </div>
                <div data-testId="gender-div" className={"char-detail"}>
                    <span className={"bold"}>Origin:</span> {character?.gender}
                </div>
                <div data-testId="origin-div" className={"char-detail"}>
                    <span className={"bold"}>Origin:</span> {character?.origin.name}
                </div>
            </div>
            <NavLink to={"/"}>
                <button>Main Page</button>
            </NavLink>
        </div>
    )
}