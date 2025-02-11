import React from "react";

type PokemonStatsProps = {
    pokemon: {
        name?: string,
        stats?: {
            base_stat: string
            stat: {
                name: string,
            }
        }[]
    }
}
export const PokemonStats = ({ pokemon }: PokemonStatsProps) => {

    return (
        <>
            <h3>Pokémon stats:</h3>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}
            >
                {pokemon && pokemon.stats && pokemon.stats.map((stats) => {
                    return (
                        <span key={`pokemon-${pokemon?.name}-stat-${stats?.stat?.name}`}>
                            {stats?.stat?.name} : <strong>{stats.base_stat}</strong>
                        </span>
                    )
                })}
            </div>
        </>
    )
}