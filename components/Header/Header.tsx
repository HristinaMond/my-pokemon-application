'use client';

import PokemonLogo from '@/public/pokemon-logo.svg';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import * as Routing from "@/global/routing";

export const Header = () => {

    const router = useRouter();

    return (
        <header
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                padding: '10px',
                border: '1px solid grey',
                alignItems: 'center',
            }}
        >
            <Image
                width={100}
                height={50}
                src={PokemonLogo.src}
                alt="pokemon-logo"
                priority
                onClick={() => {
                    router.push(Routing.HOME.getPath());
                }}
                style={{
                    cursor: 'pointer',
                }}
            />
            <div>
                Jane Doe
            </div>
        </header>
    )
}