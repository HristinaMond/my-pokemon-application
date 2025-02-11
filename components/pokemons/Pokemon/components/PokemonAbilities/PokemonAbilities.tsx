import React from "react";

type PokemonAbilities = {
    pokemon: {
        name?: string,
        abilities?: {
            ability: {
                name?: string
            }
        }[]
    }
}
export const PokemonAbilities = ({ pokemon }: PokemonAbilities) => {

    return (
        <>
            <h3>Pokémon abilities:</h3>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {pokemon && pokemon.abilities && pokemon.abilities.map((abilities,) => {
                    return (
                        <span key={`pokemon-${pokemon?.name}-ability-${abilities?.ability?.name}`}>
                             {abilities?.ability?.name}
                        </span>
                    )
                })}
            </div>
        </>
    )
}