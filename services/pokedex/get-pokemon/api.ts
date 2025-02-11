import {Pokemon} from "@/services/types";
import {getRequest} from "@/utils/requests";
import {BASE_URL} from "@/services/pokedex/requests";

type GetPokemonApiProps = {
    id?: string | number
}
export async function getPokemonApi({id}: GetPokemonApiProps): Promise<Pokemon> {
    return getRequest(BASE_URL, `/pokedex/${id}`);
}
