export type Pokemon = {
    name: string;
    url?: string;
}

export type Pokemons = {
    count: number;
    results: Pokemon[];
    previous: string,
    next: string,
}

export type Pokedex = {
    pokedex: [
        id: string | number,
        name: string
    ]
}