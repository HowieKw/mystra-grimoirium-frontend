import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react/cjs/react.development';


const GrimoireSpells = ({ spells }) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ searchTerm, setSearchTerm ] = useState("");

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
            <input 
            type="text" 
            placeholder="Call upon a spell..." 
            onChange={event => {setSearchTerm(event.target.value)}}
            />

            {spellsDisplayed.filter((val)=> {
                if (searchTerm == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map(spell => (
               <div key={spell.id} className="spellCards"> 
                    <h3>{spell.name}</h3>
                    <h4>Level: {spell.level}</h4>
                    <h4>School: {spell.school}</h4>
                    <h4>Components: {spell.components}</h4>
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