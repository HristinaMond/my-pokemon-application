import * as ReactQuery from '@tanstack/react-query';
import {getAllPokemonsApi} from "@/services/pokedex";
import {usePagination} from "@/components/Pagination/hooks";

export function getAllPokemonsQueryKey() {
    return ['pokedex/getAllPokemons'];
}

export const useGetAllPokemons = () => {

    const {
        data,
        isLoading,
        isSuccess,
        isError
    } = ReactQuery.useQuery({
        queryKey: getAllPokemonsQueryKey(),
        queryFn: () => getAllPokemonsApi(),
    });

    const { currentItems, currentPage, totalPages, handlePrevPage, handleNextPage, setCurrentPage} = usePagination({
        items: data || [],
        itemsPerPage: 10
    });

    return {
        pokemons: currentItems,
        hasPokemons: totalPages > 0,
        isLoading,
        isSuccess,
        currentPage,
        totalPages,
        nextPage: handleNextPage,
        previousPage: handlePrevPage,
        setCurrentPage,
        isError
    };
}
