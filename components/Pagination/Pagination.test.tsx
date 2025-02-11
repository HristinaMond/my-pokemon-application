import {getAllPokemonsPaginatedApi} from "@/services/pokemons";
import {fireEvent, render, screen} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import PokemonsPage from "@/app/pokemons/page";
import {useRouter} from "next/navigation";
import {Pagination} from "./Pagination";
import {usePagination} from "@/components/Pagination/hooks";
import '@testing-library/jest-dom';

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

jest.mock("@/services/pokemons/get-all-pokemons-paginated/api", () => ({
    getAllPokemonsPaginatedApi: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));


test('update current page with clicking on next and previous pagination buttons', async () => {

    useRouter.mockReturnValue({
        push: jest.fn(),
        query: {}
    })


    getAllPokemonsPaginatedApi.mockResolvedValueOnce({
        count: 20,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
        previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
        results: [
            {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
        ]
    });

    getAllPokemonsPaginatedApi.mockResolvedValueOnce({
        count: 20,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
        previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
        results: [
            {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
        ]
    });

    renderComponent();

    await screen.findByText(/pikachu/);

    const nextPageButton = screen.getByRole('button', {name: /next/i});

    fireEvent.click(nextPageButton);

    await screen.findByText(/charmander/);

    const previousPageButton = screen.getByRole('button', {name: /previous/i});

    fireEvent.click(previousPageButton);

    await screen.findByText(/pikachu/);

});


jest.mock('@/components/Pagination/hooks', () => ({
    usePagination: jest.fn(),
}));


it('displays the correct total pages', () => {

    const mockUsePagination = usePagination as jest.Mock;
    mockUsePagination.mockReturnValue({
        currentPage: 1,
        totalPages: 5,
    });

    render(<Pagination currentPage={1} totalPages={5} setCurrentPage={() => jest.fn()}/>);

    screen.findByText(/Page 1 of 5/i)
});

it('disables next button on last page', () => {

    const mockUsePagination = usePagination as jest.Mock;
    mockUsePagination.mockReturnValue({
        currentPage: 5,
        totalPages: 5,
    });

    render(<Pagination currentPage={5} totalPages={5} setCurrentPage={() => jest.fn()}/>);

    const nextButton = screen.getByRole('button', {name: /next/i});
    expect(nextButton).toBeDisabled();

});

it('disables prev button on first page', () => {
    const mockUsePagination = usePagination as jest.Mock;
    mockUsePagination.mockReturnValue({
        currentPage: 1,
        totalPages: 5,
    });

    render(<Pagination currentPage={1} totalPages={5} setCurrentPage={() => jest.fn()}/>);

    const prevButton = screen.getByRole('button', {name: /previous/i});
    expect(prevButton).toBeDisabled();

});
