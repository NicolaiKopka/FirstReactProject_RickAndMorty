import {Character} from "../model";
import "./GalleryItem.css";
import {NavLink} from "react-router-dom";

interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item" data-testid={props.character.id}>
            <NavLink to={`character/${props.character.id}`}>
                <a href={""}><img data-testId="image" src={props.character.image}/></a>
            </NavLink>
            <div className="item-text">
                <h3 data-testId="name-headline">{props.character.name}</h3>
                <div data-testId="status-div" className={"char-detail"}>
                    <span className={"bold"}>Status:</span> {props.character.status}
                </div>
                <div data-testId="species-div" className={"char-detail"}>
                    <span className={"bold"}>Species:</span> {props.character.species}
                </div>
            </div>
        </div>
    )
}
