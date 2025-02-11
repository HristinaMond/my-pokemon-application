import React from 'react';
import {fireEvent, render, screen,} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SearchPokemon} from './SearchPokemon';
import '@testing-library/jest-dom';

const queryClient = new QueryClient();

const renderComponent = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <SearchPokemon/>
        </QueryClientProvider>
    );

test('renders search input, search button and filter button', () => {
    renderComponent();

    const input = screen.getByPlaceholderText(/Search pokemons by name/i);
    const searchButton = screen.getByRole('button', {name: /search/i})
    const filterButton = screen.getByRole('button', {name: /filter/i})

    expect(input).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
});

test('updates search input value on typing', () => {
    renderComponent();
    const input = screen.getByPlaceholderText(/Search pokemons by name/i);

    fireEvent.change(input, { target: { value: 'pikachu' } });

    expect(input).toHaveValue('pikachu');
});