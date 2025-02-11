import Link from "next/link";
import React from "react";

export default function Home() {
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
            <h2>Pokemons app</h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px'
                }}
            >
                <h3> Welcome to my Pokemons app! </h3>

                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <strong>1. Pokemons Page</strong> is listing pokemons from
                        <Link href='https://pokeapi.co/' target="_blank">https://pokeapi.co/</Link>
                    </div>

                    <strong>Options:</strong>

                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'column',
                    }}>
                        <span>View pokemons names in paginated table</span>
                        <span>See pokemon details</span>
                        <span>Search and filter pokemons by name and type</span>
                    </div>

                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <strong>2. Pokemon details page</strong>
                        <p>is listing pokemon characteristics</p>
                    </div>
                        <strong>Options:</strong>
                        <div style={{
                            display: 'flex',
                            gap: '5px',
                            flexDirection: 'column',
                        }}>
                            <span>View pokemon details</span>
                            <span>Add pokemon to pokedex</span>
                        </div>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            flexDirection: 'column',
                        }}
                    >
                        <p>
                            <strong>3. Pokedex</strong> is listing pokemons from json server
                        </p>
                        <strong>Options:</strong>
                        <span>View pokemons names from json server db</span>
                    </div>

                </div>
            </div>
            );
            }
