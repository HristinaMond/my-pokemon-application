import {getAllPokemonsPaginatedApi} from "@/services/pokemons/get-all-pokemons-paginated/api";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import PokemonsPage from "@/app/pokemons/page";
import {useRouter} from "next/navigation";

const queryClient = new QueryClient();

const renderComponent = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <PokemonsPage/>
        </QueryClientProvider>
    );


beforeEach(() => {
    jest.resetAllMocks();
});


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock("@/services/pokemons/get-all-pokemons-paginated/api", () => ({
    getAllPokemonsPaginatedApi: jest.fn(),
}));


test('displays pokemons from API on page load', async () => {

    useRouter.mockReturnValue({
        push: jest.fn(),
        query: {}
    })

    getAllPokemonsPaginatedApi.mockResolvedValueOnce({
        "count": 1304,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
        "previous": null,
        "results": [
            {
                "name": "pikachu",
                "url": "https://pokeapi.co/api/v2/pokemon/25/"
            }
        ]
    });

    renderComponent();

    await waitFor(() => expect(getAllPokemonsPaginatedApi).toHaveBeenCalled());

    const pikachuRow = await screen.findAllByText((content, element) => {
        return element?.textContent?.toLowerCase()?.includes('pikachu');
    });

    expect(pikachuRow.length).toBeGreaterThan(0);

});

test('shows "No pokemons found" when API returns empty array', async () => {

    getAllPokemonsPaginatedApi.mockResolvedValueOnce({
        "count": 0,
        "next": null,
        "previous": null,
        "results": []
    });

    renderComponent();

    const input = screen.getByPlaceholderText(/Search pokemons by name/i);
    const button = screen.getByRole('button', {name: /search/i});

    fireEvent.change(input, {target: {value: 'not existing pokemon'}});
    fireEvent.click(button);

    await screen.findByText(/no pokemons found/i);

});

test('shows error message when API fails', async () => {

    renderComponent();

    getAllPokemonsPaginatedApi.mockRejectedValueOnce(new Error('Failed to fetch pokemons'));

    await screen.findByText(/Failed to fetch the pokemons, try again later/i);

});