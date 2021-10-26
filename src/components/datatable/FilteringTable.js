import React, { useMemo } from 'react'
import { Link } from "react-router-dom";
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

export const FilteringTable = ({ spellsData }) => {


    const Columns = [
        {
            Header: 'Level',
            accessor: 'level',
            Filter: ColumnFilter
        },
        {
            Header: 'Spell',
            accessor: 'name',
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: 'School',
            accessor: 'school',
            Filter: ColumnFilter
        },
        {
            Header: 'Components',
            accessor: 'components',
            Filter: ColumnFilter
        },
        {
            Header: 'Ritual',
            accessor: 'ritual',
            Filter: ColumnFilter
        },
        {
            Header: 'Concentration',
            accessor: 'concentration',
            Filter: ColumnFilter
        },
        {
            Header: 'Tags',
            accessor: spellsData => 
            spellsData.tags.map(tag => (
                <div>
                    <span>{tag.name}</span>
                </div>
            )),
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: 'Details',
            accessor: spellsData => (
                <div>
                    <Link to={`/spell/${spellsData.id}`}>
                        <div>Get more details</div>
                    </Link>
                </div>
            ),
            Filter: ColumnFilter,
            disableFilters: true
        }
    ]

    // console.log(spellsData)


    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => spellsData, [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, preGlobalFilteredRows, setGlobalFilter } = useTable({
        columns,
        data
    },
    useFilters,
    useGlobalFilter,
    useSortBy
    )

    const { globalFilter } = state

    return (
        <>
        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} filter={globalFilter} setFilter={setGlobalFilter} />
        <section>
            <table {...getTableProps()} className="spellTable">
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : '⏺'}
                                            </span>

                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
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
       </>
    )
}
