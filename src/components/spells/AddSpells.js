import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import RenderSpells from "./RenderSpells";
import ReactPaginate from 'react-paginate';

const AddSpells = ({ spells, addSpell, removeSpell }) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ grimId, setGrimId ] = useState([])
    const [ grimDetails, setGrimDetails ] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const id = useParams().id;
    let path = `/grimoires/${id}`

    useEffect(() => {
        let mounted = true;
        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimDetails(grimoireData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, [id]);

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    const spellsPerPage = 5
    const pagesVisited = pageNumber * spellsPerPage
    const spellsDisplayed = spells.slice(pagesVisited, pagesVisited + spellsPerPage);

    const pageCount = Math.ceil(spells.length / spellsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    // console.log(grimDetails.grimoire_spells)

    // grimSpells.map(grimSpell => setGrimId(grimSpell.id))

    const displaySpells =
    spellsDisplayed.map(spells =>
        <RenderSpells 
        key={spells.id}
        spells={spells}
        addSpell={addSpell}
        removeSpell={removeSpell}
        pageCount={pageCount}
        changePage={changePage}
        grimId={grimId}
        setGrimId={setGrimId}
        grimSpells={grimDetails.grimoire_spells}
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