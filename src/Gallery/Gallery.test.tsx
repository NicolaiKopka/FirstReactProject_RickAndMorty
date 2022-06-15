import axios from "axios";
import {Character} from "../model";
import Gallery from "./Gallery";
import {render, waitFor, screen, fireEvent} from "@testing-library/react";




test("That get request returns correct items", async() => {
    const character1: Character = {
        id: 12,
        name: "Rick Sanchez",
        image: "url.ofImage.com",
        status: "Alive",
        species: "Human"
    }

    const character2: Character = {
        id: 13,
        name: "Morty Smith",
        image: "url.ofImage2.com",
        status: "Alive",
        species: "Human"
    }

    const character3: Character = {
        id: 14,
        name: "Summer Smith",
        image: "url.ofImage4.com",
        status: "Alive",
        species: "Human"
    }

    jest.spyOn(axios, "get").mockImplementation((url: string) => {
        expect(url).toEqual("https://rickandmortyapi.com/api/character")
        return Promise.resolve({
            status: 200,
            data:{
                results: [character1, character2, character3]
        }})
    })

    render(<Gallery/>)

    await waitFor(() => {
        expect(() => screen.getByTestId(12)).not.toThrowError()
        // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
        expect(() => screen.getByTestId(13)).not.toThrowError()
        // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
        expect(() => screen.getByTestId(14)).not.toThrowError()
    })

    const galleryInput = screen.getByTestId("gallery-input")
    fireEvent.change(galleryInput, { target: { value: "Smith"} } )

    await waitFor(() => {
        expect(() => screen.getByTestId(12)).toThrowError()
        // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
        expect(() => screen.getByTestId(13)).not.toThrowError()
        // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
        expect(() => screen.getByTestId(14)).not.toThrowError()
    })

})

