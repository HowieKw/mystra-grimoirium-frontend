import React, { useState, useEffect } from 'react'
import GrimoireSpells from './GrimoireSpells';
import ReactPaginate from 'react-paginate';

const MasterGrimoire = ({ spells, isLoaded }) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    // console.log(currentSpells)

    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return(
        <section>
            <section>
                <h1 className="title">Mystra's Master Grimoire</h1>
            </section>

            <section>
                <GrimoireSpells spells={spellsDisplayed}/>
                <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                />
            </section>
        </section>
    )
}

export default MasterGrimoire;