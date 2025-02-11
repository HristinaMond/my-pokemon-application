import {PokemonsList} from "@/components";
import React from "react";
import {SearchPokemon} from "@/components/searches/SearchPokemon/SearchPokemon";

export default function PokemonsPage() {

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                gap: '30px'
            }}>

            <h2>Pokemons page</h2>

            <p>
                Search for a Pokémon by name, and refine your search with additional filters. After selecting your filters, click <i>Apply</i> and then press the <i>Search</i> button to view your results.
            </p>

            <SearchPokemon/>

            <PokemonsList/>
        </div>
    )
}