import * as _ from 'lodash';

const appendPath = (...paths: (string | number | undefined)[]) => _.join(paths, '/');

export const HOME = {
    getPath: (): string => appendPath('/'),
};

export const POKEDEX = {
    getPath: (): string => appendPath('/pokedex'),
};

type POKEMON_ARGS = {
    name?: string | undefined
}

export const POKEMONS = {
    getPath: (args?: POKEMON_ARGS): string => appendPath('/pokemons', args?.name),
};