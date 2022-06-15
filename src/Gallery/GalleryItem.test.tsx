import {render, screen} from "@testing-library/react";
import GalleryItem from "./GalleryItem";
import {MemoryRouter} from "react-router-dom";


test("That headline is rendered correctly", () => {
    render(<MemoryRouter><GalleryItem character={{id: 1234, name: "Rick Sanchez", image: "werwiewas", status: "Alive", species: "Human"}}/></MemoryRouter>);
    expect((screen.getByTestId("image") as HTMLImageElement).src).toEqual("http://localhost/werwiewas");
    expect(screen.getByTestId("name-headline").textContent).toEqual("Rick Sanchez");
    expect(screen.getByTestId("status-div").textContent).toEqual("Status: Alive");
    expect(screen.getByTestId("species-div").textContent).toEqual("Species: Human");
})
