

export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
}

export interface AllCharacters {
    info: Info;
    results: Array<Character>;
}

export interface Info {
    next: string;
    prev: string;
}

interface Origin {
    name: string;
}

export interface DetailCharacter {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
}