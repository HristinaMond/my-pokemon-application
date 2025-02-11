import {SearchWithFilterProvider} from "@/store/searches";
import React from "react";
import {PokemonsProvider} from "@/store/pokemons";

type StoreProviderProps = {
    children: React.ReactNode
}
export const StoreProvider = ({children}: StoreProviderProps) => {
    return (
        <PokemonsProvider>
            <SearchWithFilterProvider>
                {children}
            </SearchWithFilterProvider>
        </PokemonsProvider>
    )
}