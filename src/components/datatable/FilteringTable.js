import React, { useMemo } from 'react'
import { Link } from "react-router-dom";
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from 'react-table'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

export const FilteringTable = ({ spellsData, grimId }) => {


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
                    <Link to={`/grimoires/${grimId}/spell/${spellsData.id}`}>
                        <div>Get more details</div>
                    </Link>
                </div>
            ),
            Filter: ColumnFilter,
            disableFilters: true
        }
    ]

    // console.log(grimId)

    let path = `/grimoires/${grimId}/add_spells`

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => spellsData, [])

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, prepareRow, state, preGlobalFilteredRows, setGlobalFilter } = useTable({
        columns,
        data
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const renderAddSpellsButton = (id) => {
        // console.log(id)
        if (id === undefined) {
            return 
        } else {
            return <Link to={path}><button>Add Spells</button></Link>
        }
    }

    const { globalFilter, pageIndex } = state

    return (
        <>
        <section className="spellPage">
        <img className="blankBook" alt="blankBook" src="https://res.cloudinary.com/djzhu5kfj/image/upload/v1634620193/Flatiron%20-%20Final%20Project/Open_Grimoire_Edit_gty2rc.png"/>
            <div className="spellsList">
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
                            page.map(row => {
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
                <div>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                {renderAddSpellsButton(grimId)}
            </div>
        </section>
       </>
    )
}
