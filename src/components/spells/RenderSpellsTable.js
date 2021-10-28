import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
import '../datatable/table.css'
import { GlobalFilter } from '../datatable/GlobalFilter'
import { ColumnFilter } from '../datatable/ColumnFilter'
import SpellButton from './SpellButton'

export const RenderSpellsTable = ({ spellsData, grimId, grimArray, addSpell, removeSpell }) => {

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
            Header: 'Add/Remove',
            accessor: spellsData => (
                <div>
                    <SpellButton 
                    key={spellsData.id} 
                    spells={spellsData}
                    spellsGrimArray={spellsData.grimoire_spells}
                    grimId={grimId}
                    grimSpellsArray={grimArray}
                    addSpell={addSpell}
                    removeSpell={removeSpell}
                    />
                </div>
            ),
            Filter: ColumnFilter,
            disableFilters: true
        }
    ]

    let path = `/grimoires/${grimId}`

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
        <section className="spellPage">
        <img className="blankScroll" alt="blankBook" src="https://res.cloudinary.com/djzhu5kfj/image/upload/v1635192945/Flatiron%20-%20Final%20Project/pngegg_rmzbxz.png"/>
            <div className="spellsListAdd">
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
            <Link to={path}>
                <button>Return to Grimoire</button>
            </Link>
            </div>
        </section>
       </>
    )
}
