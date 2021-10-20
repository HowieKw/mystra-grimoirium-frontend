import React, { useState } from 'react'
import { Link } from "react-router-dom";
import RenderSpells from "./RenderSpells";
import ReactPaginate from 'react-paginate';

const AddSpells = ({ spells, addSpell, removeSpell, path, id, grimId}) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    // const [ grimId, setGrimId ] = useState([])
    // const [isLoaded, setIsLoaded] = useState(false);


    // if (!isLoaded) return <h2>Revealing Spells...</h2>;

    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    // console.log(grimId)


    // grimSpells.map(grimSpell => setGrimId(grimSpell.id))

    const displaySpells =
    spellsDisplayed.map(spells =>
        <RenderSpells 
        key={spells.id}
        spells={spells}
        addSpell={addSpell}
        removeSpell={removeSpell}
        grimId={grimId}
        id={id}
        />
    )

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