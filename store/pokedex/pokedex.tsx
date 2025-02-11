'use client';

import React from "react";
import * as PokedexServices from '@/services/pokedex';

type PokedexContextProps = {
    pokemons: any[];
};

const PokedexContext = React.createContext<PokedexContextProps>({
    pokemons: [],
})

type PokedexProviderProps = {
    children: React.ReactNode
}

export const PokedexProvider = ({children}: PokedexProviderProps) => {

    const {pokemons} = PokedexServices.useGetAllPokemons();


    return (
        <PokedexContext.Provider
            value={{
                pokemons,
            }}
        >
            {children}
        </PokedexContext.Provider>
    )
}

export const usePokedex = () => {
    const context = React.useContext(PokedexContext);
    if (!context) {
        throw new Error("usePokedex must be used within a PokedexProvider");
    }
    return context;
};
