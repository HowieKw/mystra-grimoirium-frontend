import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { Columns } from './Columns'
import './table.css'

export const SortingTable = ({ spellsData }) => {

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => spellsData, [])


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    },
    useSortBy
    )


    return (
        <section>
            <table {...getTableProps()} className="spellTable">
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                        <br></br>
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : 'Click to Sort'}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    <tr>
                    
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                        })
                                    }
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
       </section>
    )
}
