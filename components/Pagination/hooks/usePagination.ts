import React from 'react';

type UsePaginationProps = {
    items: any[] | undefined;
    itemsPerPage: number;
};

export const usePagination = ({ items, itemsPerPage }: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [paginatedItems, setPaginatedItems] = React.useState<any[]>([]);


    React.useEffect(() => {
        if (items) {
            const formattedItems = items.map(item => ({
                ...item,
                name: item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : item.name,
            }));
            setPaginatedItems(formattedItems);
        }
    }, [items]);

    const totalPages = Math.ceil(paginatedItems?.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const currentItems = paginatedItems?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const updateItems = React.useCallback((newItems: any[]) => {
        setPaginatedItems(newItems);
    }, []);

    return {
        currentPage,
        totalPages,
        currentItems,
        updateItems,
        handleNextPage,
        handlePrevPage,
        setCurrentPage,
    };
};
