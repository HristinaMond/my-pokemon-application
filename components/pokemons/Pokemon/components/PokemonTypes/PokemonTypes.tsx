import React from "react";

type PokemonTypesProps = {
    pokemon: {
        types?: {
            type: {
                name: string
            }
        }[]
    }
}
export const PokemonTypes = ({ pokemon }: PokemonTypesProps) => {
    return (
        <>
            <h3>Pokémon type:</h3>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {pokemon && pokemon.types && pokemon.types.map((pokemon) => {
                    return (
                        <span
                            key={`pokemon-type-${pokemon.type.name}`}>
                            {pokemon.type?.name}
                        </span>
                    )
                })}
            </div>
        </>
    )
}