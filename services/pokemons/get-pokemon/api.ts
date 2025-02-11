import {getRequest} from '@/utils/requests';
import {BASE_URL} from "@/services/pokemons/requests";

type GetPokemonApiProps = {
    name: string
};

type GetPokemonApiResponse = {
    id: string;
    name: string,
    sprites: { front_default: string },
    types: {
        type: {
            name: string,
        }
    }[],
    abilities: { ability: { name: string } }[],
    stats: { stat: { name: string }, base_stat: string }[]
}

export function getPokemonApi({name}: GetPokemonApiProps): Promise<GetPokemonApiResponse> {
    return getRequest(BASE_URL, `/pokemon/${name}`);
}
