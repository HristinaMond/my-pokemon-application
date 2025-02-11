import { getRequest } from '@/utils/requests';
import { BASE_URL } from "@/services/pokemons/requests";
import { getAllPokemonsApi } from "@/services/pokemons";

type GetPokemonsByTypeApiProps = {
    type?: string[];
    name?: string;
};

type PokemonEntry = {
    pokemon: {
        name: string;
    };
};

type GetPokemonsByTypeApiResponse = {
    pokemon: PokemonEntry[];
};


export async function getPokemonsByTypeAndNameApi(type: string): Promise<string[]> {
    const response: GetPokemonsByTypeApiResponse = await getRequest(BASE_URL, `/type/${type}`);
    return response.pokemon.map(p => p.pokemon.name);
}

export async function getPokemonsByTypesAndNameApi({ type, name }: GetPokemonsByTypeApiProps): Promise<{ name: string }[]> {
    let filteredPokemons: string[] = [];

    if (type?.length) {
        const typeLists = await Promise.all(type.map(getPokemonsByTypeAndNameApi));

        filteredPokemons = typeLists.reduce((acc, curr) => acc.filter(pokemon => curr.includes(pokemon)));
    }

    const allPokemons = await getAllPokemonsApi();
    const allPokemonNames: string[] = allPokemons?.results?.map((p: { name: string }) => p.name) || [];

    if (name) {
        filteredPokemons = filterPokemonsByName(filteredPokemons.length ? filteredPokemons : allPokemonNames, name);
    }

    return formatPokemonList(filteredPokemons);
}

const filterPokemonsByName = (pokemons: string[], name: string): string[] =>
    pokemons.filter(pokemon => pokemon.toLowerCase().startsWith(name.toLowerCase()));


const formatPokemonList = (pokemons: string[]): { name: string }[] =>
    pokemons.map(name => ({ name }));
