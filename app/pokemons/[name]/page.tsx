import {Pokemon} from "@/components";

type PokemonPageProps = {
    params: { name: string };
}
export default  function PokemonPage({ params }: PokemonPageProps) {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '40px',
                padding: '25px'
            }}
        >
            <h3>Pokemon</h3>

            <Pokemon name={params?.name}/>

        </div>

    );
}