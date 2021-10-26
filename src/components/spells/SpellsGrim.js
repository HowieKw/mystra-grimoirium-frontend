import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { RenderSpellsTable } from './RenderSpellsTable';

const SpellsGrim = ({ spells, addSpell, removeSpell }) => {
    const [ grimArray, setGrimArray ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const id = useParams().id;
    let path = `/grimoires/${id}`

    useEffect(() => {
        let mounted = true;

        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimArray(grimoireData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, []);


    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    // console.log(grimArray)


    return (
        <div>
           
            <RenderSpellsTable
            spellsData={spells} 
            addSpell={addSpell} 
            removeSpell={removeSpell} 
            grimArray={grimArray} 
            id={id}
            />

            <Link to={path}>
                <button>Return to Grimoire</button>
            </Link>
        </div>
    )
}

export default SpellsGrim;