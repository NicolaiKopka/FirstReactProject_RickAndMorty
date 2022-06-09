import {Character} from "../model";

interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <img src={props.character.image}/>
            <div className="item-text">
                <h3>{props.character.name}</h3>
                {props.character.status}
                <br/>
                {props.character.species}
            </div>

        </div>
    )
}
