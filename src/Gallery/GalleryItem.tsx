import {Character} from "../model";
import "./GalleryItem.css";

interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <img src={props.character.image}/>
            <div className="item-text">
                <h3>{props.character.name}</h3>
                <div className={"char-detail"}>
                    <span className={"bold"}>Status: </span> {props.character.status}
                </div>
                <div className={"char-detail"}>
                    <span className={"bold"}>Species: </span>{props.character.species}
                </div>
            </div>
        </div>
    )
}
