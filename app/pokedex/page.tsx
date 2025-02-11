import React from "react";
import {PokemonsList} from "@/components/pokedex";

export default function PokedexPage() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                gap: '30px'
            }}
        >
            <h2>Pokedex page</h2>

            <p>View your list of Pokémon in the Pokédex!</p>

            <PokemonsList/>
        </div>
    );
}
