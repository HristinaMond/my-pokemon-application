import {getRequest} from "@/utils/requests";
import {BASE_URL} from "@/services/pokedex/requests";

export async function getAllPokemonsApi(): Promise<any[] | undefined> {
    return getRequest(BASE_URL, '/pokedex', {});
}
