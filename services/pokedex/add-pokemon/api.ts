import {Pokemons} from "@/services/types";
import {postRequest} from "@/utils/requests";
import {BASE_URL} from "@/services/pokedex/requests";

type AddPokemonApiProps = {
    data: {
        id?: string;
        name?: string;
    }
}

export async function addPokemonApi({ data }: AddPokemonApiProps): Promise<Pokemons> {
    return postRequest(BASE_URL, '/pokedex', {id: data?.id, name: data?.name});
}
