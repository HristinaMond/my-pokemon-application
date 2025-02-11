import {getRequest} from '@/utils/requests';
import {BASE_URL} from "@/services/pokemons/requests";

const itemsPerPage = 10;

export async function getAllPokemonsPaginatedApi(page:number): Promise<any> {
    const offset = (page - 1) * itemsPerPage;
    return getRequest(BASE_URL,`/pokemon?limit=${itemsPerPage}&offset=${offset}`);

}
