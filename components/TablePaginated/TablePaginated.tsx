import {Pagination} from "@/components";
import React from "react";

type TablePaginatedProps = {
    data: any[],
    currentPage: number,
    totalPages: number,
    setCurrentPage: (currentPage: number) => void,
    onClick: (name: string) => void
}
export const TablePaginated = (
    {
        data,
        totalPages,
        currentPage,
        setCurrentPage,
        onClick
    }: TablePaginatedProps) => {


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: '30px',
                height: '100%',
                alignItems: 'center',
            }}
        >

            <table className="table">
                <tbody>
                {data?.map((item, index) => (
                    <tr
                        key={index}
                        onClick={() => onClick(item?.name)}
                        style={{
                            cursor: 'pointer',
                        }}
                    >
                        <td>{item?.name}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />


        </div>
    )
}