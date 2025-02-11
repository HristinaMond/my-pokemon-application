import * as Routing from '@/global/routing';
import Link from "next/link";

export const SideMenu = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px 20px',
                gap: '20px',
                maxWidth: '200px',
                border: '1px solid grey',
                height: '100%'
            }}>
            <Link href={Routing.POKEMONS.getPath()}>Pokemons</Link>
            <Link href={Routing.POKEDEX.getPath()}>Pokedex</Link>
        </div>
    )
}