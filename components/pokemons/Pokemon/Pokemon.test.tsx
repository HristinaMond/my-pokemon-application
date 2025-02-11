import {getPokemonApi} from "@/services/pokemons/get-pokemon/api";
import {getPokemonApi as getPokedexPokemonApi} from "@/services/pokedex/get-pokemon/api";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {useRouter} from "next/navigation";
import {Pokemon} from "@/components";
import {addPokemonApi} from "@/services/pokedex/add-pokemon/api";

const queryClient = new QueryClient();

const renderComponent = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <Pokemon name='Pikachu'/>
        </QueryClientProvider>
    );

beforeEach(() => {
    jest.resetAllMocks();
});

jest.mock("@/services/pokemons/get-pokemon/api", () => ({
    getPokemonApi: jest.fn(),
}));

jest.mock("@/services/pokedex/get-pokemon/api", () => ({
    getPokemonApi: jest.fn(),
}));

jest.mock("@/services/pokedex/add-pokemon/api", () => ({
    addPokemonApi: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));


test('show pokemon details', async () => {

    useRouter.mockReturnValue({
        push: jest.fn(),
        query: {}
    })

    getPokemonApi.mockResolvedValueOnce({

        id: 25,
        name: "Pikachu",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        types: [
            {slot: 1, type: {name: "electric"}},
        ],
        abilities: [
            {ability: {name: "static"}},
            {ability: {name: "lightning-rod"}},
        ],
        stats: [
            {base_stat: 35, stat: {name: "hp"}},
            {base_stat: 55, stat: {name: "attack"}},
            {base_stat: 40, stat: {name: "defense"}},
            {base_stat: 50, stat: {name: "special-attack"}},
            {base_stat: 50, stat: {name: "special-defense"}},
            {base_stat: 90, stat: {name: "speed"}},
        ],

    });


    renderComponent();

    await waitFor(() => {
        screen.findByText(/pikachu/i);
        screen.findByText(/electric/i);
        screen.findByText(/static/i);
        screen.findByText(/lightning-rod/i);
        screen.findByText(/hp/i);
        screen.findByText(/35/i);
        screen.findByText(/attack/i);
        screen.findByText(/55/i);
        screen.findByText(/defense/i);
        screen.findByText(/40/i);
        screen.findByText(/special-attack/i);
        screen.findByText(/50/i);
        screen.findByText(/special-defense/i);
        screen.findByText(/50/i);
        screen.findByText(/speed/i);
        screen.findByText(/90/i);

    })

});

test('add pokemon to pokedex', async () => {

    useRouter.mockReturnValue({
        push: jest.fn(),
        query: {}
    })

    getPokemonApi.mockResolvedValueOnce({
        id: 25,
        name: "Pikachu",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        types: [
            {slot: 1, type: {name: "electric"}},
        ],
        abilities: [
            {ability: {name: "static"}},
            {ability: {name: "lightning-rod"}},
        ],
        stats: [
            {base_stat: 35, stat: {name: "hp"}},
            {base_stat: 55, stat: {name: "attack"}},
            {base_stat: 40, stat: {name: "defense"}},
            {base_stat: 50, stat: {name: "special-attack"}},
            {base_stat: 50, stat: {name: "special-defense"}},
            {base_stat: 90, stat: {name: "speed"}},
        ],
    });

    getPokedexPokemonApi.mockResolvedValueOnce({
        id: 25,
        name: "Pikachu",
    });

    renderComponent();

    fireEvent.click(screen.getByRole('button', {name: /add to pokedex/i}));

    addPokemonApi.mockResolvedValueOnce({
        id: 25,
        name: "Pikachu",
    });


    await screen.findByText(/added to pokedex/i)
});