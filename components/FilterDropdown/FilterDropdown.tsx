import React from "react";
import {FilterIcon} from "@/components/icons"; // Import CSS file
import * as Store from '@/store';
import * as PokemonsServices from "@/services/pokemons";

interface FilterDropdownProps {
    options: string[] | undefined
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({options}: FilterDropdownProps) => {

    const {updateFilter} = Store.useSearchWithFilter();
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Sync filter state with selected options after state update
    React.useEffect(() => {
        updateFilter(selectedOptions);
    }, [selectedOptions, updateFilter]);

    const {hasTypes} = PokemonsServices.useGetPokemonTypes();

    return (
        <div
            ref={dropdownRef}
            style={{
                position: "relative"
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Filter"
                disabled={!hasTypes}
            >
                <FilterIcon/>
            </button>

            {isOpen && (
                <div
                    style={{
                        top: '55px',
                        position: 'absolute',
                        right: 0,
                        width: '250px',
                        backgroundColor: 'antiquewhite',
                        padding: '10px',
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: '5px'
                        }}
                    >
                        {options && options.map((option, index) => (
                            <div key={index}>
                                <label
                                    style={{
                                        display: 'flex',
                                        gap: '10px'
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => {
                                            setSelectedOptions((prev) => {
                                                return prev.includes(option)
                                                    ? prev.filter((item) => item !== option)
                                                    : [...prev, option];
                                            });
                                        }}

                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
};
