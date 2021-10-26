// import ReactPaginate from 'react-paginate';
import React, { useState } from 'react'
// import SpellButton from "./SpellButton";

const RenderSpells = ({ spells, id, grimArray, addSpell, removeSpell }) => {
    // const [ pageNumber, setPageNumber ] = useState(0);
    const [ searchTerm, setSearchTerm ] = useState("");
    // const [ school, setSchool ] = useState("")
    
    // const spellsPerPage = 5
    // const pagesVisited = pageNumber * spellsPerPage
    // const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    // const pageCount = Math.ceil(spells.length / spellsPerPage);
    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // }

    // console.log(spells)


    return(
        <div>
            <div>
                <input 
                type="text" 
                placeholder="Call upon a spell..." 
                onChange={event => {setSearchTerm(event.target.value)}}
                />
                <br></br>
                <div className="searchPaired">
                    <div >
                        <h4 className="searchPair">School:</h4>
                        <select className="searchPair"
                        type="text"
                        id="school"
                        name="school"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        >
                        <option value="">All</option>
                        <option value="Abjuration">Abjuration</option>
                        <option value="Conjuration">Conjuration</option>
                        <option value="Divination">Divination</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Evocation">Evocation</option>
                        <option value="Illusion">Illusion</option>
                        <option value="Necromancy">Necromancy</option>
                        <option value="Transmutation">Transmutation</option>
                        </select>
                    </div>

                    <div >
                        <h4 className="searchPair">Level:</h4>
                        <select className="searchPair"
                        type="text"
                        id="level"
                        name="level"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        >
                        <option value="">All</option>
                        <option value="Cantrip">Cantrip</option>
                        <option value="1st">1st</option>
                        </select>
                    </div>

                </div>

                    {spells.filter((val)=> {
                        if (searchTerm == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        } else if (val.level.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        } else if (val.school.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                    }}).map(spell => (
                    <div key={spell.id} className="spellCards">
                            <h3>{spell.name}</h3>

                        <div className="paired">
                            <h4 className="pair">{spell.level}</h4>
                            <h4 className="pair">School: {spell.school}</h4>
                        </div>

                        <h4>Components: {spell.components}</h4>
                        <h4>Ritual: {spell.ritual} / Concentration: {spell.concentration}</h4>

                        <div className="paired">
                            <h4 className="pair">Tags:</h4>
                            {spell.tags.map(tag => <h4 className="pair">{tag.name}</h4>)}
                        </div>

                        {/* <SpellButton
                        key={spell.id} 
                        spells={spell}
                        spellsGrimArray={spell.grimoire_spells}
                        grimId={id}
                        grimSpellsArray={grimArray}
                        addSpell={addSpell}
                        removeSpell={removeSpell}
                        /> */}
                    </div>
                ))}

                    {/* <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    /> */}
            </div>
        </div>
    )
}

export default RenderSpells;