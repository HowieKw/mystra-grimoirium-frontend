import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const GrimoireSpells = ({ spells }) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    // console.log(spell)

    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return(
        <div>
            {spellsDisplayed.map(spell => (
               <div key={spell.id} className="spellCards"> 
                    <h3>{spell.name}</h3>
                    <h4>{spell.level}</h4>
                    <h4>{spell.school}</h4>
                    <h4>{spell.components}</h4>
                    <h4>Ritual: {spell.ritual} / Concentration: {spell.concentration}</h4>
                </div>
            ))}
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
        </div>
    )
}

export default GrimoireSpells;