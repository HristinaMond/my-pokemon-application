'use client';

import React, {MouseEventHandler} from "react";
import {SearchIcon} from "@/components/icons";
import * as Store from "@/store";

type SearchProps = {
    handleSearch: MouseEventHandler<HTMLButtonElement>
}

export const Search = ({ handleSearch }: SearchProps) => {

    const { formRef, inputRef, handleInput, handleBlur } = Store.useSearchWithFilter();

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start'
            }}>

            <form
                ref={formRef}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%'
                }}>

                <input
                    ref={inputRef}
                    type="search"
                    id="search"
                    placeholder="Search pokemons by name"
                    style={{
                        width: '100%',
                        padding: '5px 12px',
                        fontSize: '16px',
                        border: '1px solid #ddd',
                        outline: 'none',
                    }}
                    onInput={handleInput}
                    onBlur={handleBlur}
                />

                <button
                    type='submit'
                    onClick={handleSearch}
                    aria-label="Search"
                >
                    <SearchIcon/>
                </button>

            </form>

        </div>
    );

}