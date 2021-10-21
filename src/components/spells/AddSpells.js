import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SpellAssociations from './SpellAssociations';
import ReactPaginate from 'react-paginate';

const AddSpells = ({ spells, addSpell, removeSpell, path, id, grimId, associations }) => {
    const [ pageNumber, setPageNumber ] = useState(0);

    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    const displaySpells =
    spellsDisplayed.map(spells =>
        <SpellAssociations 
        key={spells.id}
        spells={spells}
        addSpell={addSpell}
        removeSpell={removeSpell}
        grimId={grimId}
        id={id}
        associations={associations}
        />
    )

    // console.log(spells)
    
    return (
        <div>
            {displaySpells}
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
            <Link to={path}>
                <button>Return to Grimoire</button>
            </Link>
        </div>
    )
}


export default AddSpells;