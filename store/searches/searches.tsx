'use client';

import React, {Dispatch, Ref, SetStateAction} from "react";

type SearchWithFilterProps = {
    formRef: Ref<HTMLFormElement>;
    inputRef: Ref<HTMLInputElement>;
    search?: string,
    setSearch: Dispatch<SetStateAction<string>>,
    filter?: string[],
    updateFilter: (e?: string[]) => void,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleBlur: (e: React. FocusEvent<HTMLInputElement>) => void,
}
const SearchWithFilterContext = React.createContext<SearchWithFilterProps>({
    formRef: () => {},
    inputRef: () => {},
    search: '',
    setSearch: () => {},
    handleInput: () => {},
    handleBlur: () => {},
    updateFilter: () => {},
    filter: [],
})

type SearchWithFilterProviderProps = {
    children: React.ReactNode
}

export const SearchWithFilterProvider = ({children}: SearchWithFilterProviderProps) => {

    const [search, setSearch] = React.useState<string>('');

    const formRef = React.useRef<HTMLFormElement | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleInput = () => {
        if (inputRef.current?.value === "") {
            formRef.current?.submit();
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        return setSearch(e.currentTarget.value);
    };

    const [filter, setFilter] = React.useState<string[] | undefined>(undefined);

    const updateFilter = (e?: string[]) => setFilter(e);

    return (
        <SearchWithFilterContext.Provider
            value={{
                formRef,
                inputRef,
                search,
                setSearch,
                handleInput,
                handleBlur,
                filter,
                updateFilter
            }}
        >
        {children}
    </SearchWithFilterContext.Provider>
    )
}

export const useSearchWithFilter = () => {
    const context = React.useContext(SearchWithFilterContext);
    if (!context) {
        throw new Error("useSearchWithFilter must be used within a SearchWithFilterProvider");
    }
    return context;
};
