import React from "react";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}

export const Pagination = (
    {
        currentPage,
        setCurrentPage,
        totalPages,
    }: PaginationProps) => {

    return (
        <div
            style={{
                display: 'flex',
                gap: '10px'
            }}
        >

            <button
                disabled={totalPages === 1}
                onClick={() => setCurrentPage(1)}
            >
                First
            </button>

            <button
                disabled={currentPage === 1}
                onClick={() => {
                    setCurrentPage(currentPage - 1)
                }}
                aria-label='Previous'
            >
                &laquo; Previous
            </button>

            <span>Page {currentPage} of {totalPages}</span>

            <button
                disabled={currentPage === totalPages}
                onClick={() => {
                    setCurrentPage(currentPage + 1)
                }}
                aria-label='Next'
            >
                Next &raquo;
            </button>

            <button
                disabled={totalPages === 1 || currentPage === totalPages}
                onClick={() => {
                    setCurrentPage(totalPages)
                }}
            >
                Last
            </button>

        </div>
    )
}