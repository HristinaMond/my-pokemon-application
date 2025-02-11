# Pokémon App

This app is built with **[PokeAPI](https://pokeapi.co/)** for listing Pokémon data and **[JSON-Server](https://classic.yarnpkg.com/en/package/json-server/)** for saving user data. It allows users to search and filter Pokémon by name or type, view detailed information about each Pokémon, and add them to their personal Pokédex.

## Features

- **Search Pokémon by Name**: Users can type in the name of a Pokémon to quickly search for it.
- **Filter by Type**: Users can filter the Pokémon list by type (e.g., Water, Fire, Grass).
- **View Pokémon Details**: Users can click on a Pokémon to view more detailed information such as stats, abilities, and evolutions.
- **Add to Pokédex**: Users can add Pokémon to their Pokédex for future reference.

## Technologies Used

- **PokeAPI**: A free API that provides Pokémon data such as names, types, stats, and abilities.
- **JSON-Server**: A simple REST API server for storing and retrieving data, used in this app to save the user’s Pokédex.
- **Next.js**: The project is built with Next.js version 14.2.23.
- **TypeScript**: The app is written in TypeScript for better development and type safety.
- **@testing-library/react**: Unit tests are created using React Testing Library for testing components in isolation.

## Installation

To run this project locally, follow these steps:


1. Clone the repository ->
git clone https://github.com/HristinaMond/pokemon-application.git

2. Navigate to the project directory ->
cd my-pokemon-application

3. Install dependencies ->
yarn

4. Start the JSON-Server (for saving data) in separate terminal ->
yarn json-server

5. Start the project ->
yarn dev



## Usage

- **Search Pokémon**: Use the search bar at the top to find a Pokémon by name.
- **Filter Pokémon by Type**: Use the dropdown filter to view Pokémon by type.
- **View Pokémon Details**: Click on any Pokémon to see detailed information.
- **Add to Pokédex**: Click the "Add to Pokédex" button to save a Pokémon to your personal collection.
