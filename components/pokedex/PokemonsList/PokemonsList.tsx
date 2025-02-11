'use client';

import * as PokedexServices from '@/services/pokedex';
import Link from "next/link";
import * as Routing from '@/global/routing';
import {TablePaginated} from "@/components/TablePaginated";
import {useRouter} from "next/navigation";
import {Loading} from "@/components/Loading";

export const PokemonsList = () => {

    const router = useRouter();

    const pokedex = PokedexServices.useGetAllPokemons();

    if(pokedex?.isError) return <div>Failed to fetch the pokemons, try again later</div>

    if(pokedex?.isLoading) return <Loading />

    if (!pokedex?.isLoading && !pokedex?.hasPokemons) return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>

            <p>
                No pokemons in your pokedex :(
            </p>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px'
            }}
            >Go to the
                <Link href={Routing.POKEMONS.getPath()}>
                    <p style={{
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                    }}>pokemons page</p>
                </Link>
                and choose which
                one you like to add
            </div>

        </div>
    )

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: '10px'
            }}
        >

            <h2>Pokedex List</h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px'
                }}
            >
                {pokedex?.hasPokemons && (
                    <TablePaginated
                        data={pokedex?.pokemons}
                        currentPage={pokedex?.currentPage}
                        totalPages={pokedex?.totalPages}
                        setCurrentPage={pokedex?.setCurrentPage}
                        onClick={(name: string) => router.push(Routing.POKEMONS.getPath({name}))}
                    />
                )}
            </div>

        </div>
    )
}