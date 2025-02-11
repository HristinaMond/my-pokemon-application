import Image from "next/image";
import LoadingPokemon from "@/public/loading-pokemon.gif";
import React from "react";

export const Loading = () => {
    return (
        <div
            style={{
                display: "flex",
                width: '100%',
                height: '100%',
                gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Image width={100} height={100} src={LoadingPokemon.src} alt='loading'/>
            <p>Loading...</p>
        </div>
    )
}