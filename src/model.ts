

export interface Character {
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