import ReactPaginate from 'react-paginate';
import React, { useState } from 'react'
import SpellButton from "./SpellButton";

const RenderSpells = ({ spells, id, grimArray, addSpell, removeSpell }) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    
    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    // console.log(spellsDisplayed)


    return(
        <div>
            <div>
                
                {spellsDisplayed.map(spell => (
                    <div key={spell.id} className="spellCards">
                        <h3>{spell.name}</h3>
                        <h4>{spell.level}</h4>
                        <h4>School: {spell.school}</h4>
                        <h4>Components: {spell.components}</h4>
                        <h4>Ritual: {spell.ritual} / Concentration: {spell.concentration}</h4>

                        <SpellButton 
                        spells={spell}
                        spellsGrimArray={spell.grimoire_spells}
                        grimId={id}
                        grimSpellsArray={grimArray}
                        addSpell={addSpell}
                        removeSpell={removeSpell}
                        />
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
        </div>
    )
}

export default RenderSpells;