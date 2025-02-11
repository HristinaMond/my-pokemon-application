import {getRequest} from '@/utils/requests';
import {BASE_URL} from "@/services/pokemons/requests";

type GetPokemonTypesApiResponse = {
    count?: number
    results?: {name: string}[]
}

export function getPokemonTypesApi(): Promise<GetPokemonTypesApiResponse> {
    return getRequest(BASE_URL, `/type/?limit=20&offset=0`);
}
