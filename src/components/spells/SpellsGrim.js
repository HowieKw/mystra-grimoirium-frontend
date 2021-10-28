import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { RenderSpellsTable } from './RenderSpellsTable';

const SpellsGrim = ({ spells, addSpell, removeSpell }) => {
    const [ grimArray, setGrimArray ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const { grimId } = useParams();

    useEffect(() => {
        let mounted = true;

        fetch(`/grimoires/${grimId}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimArray(grimoireData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, [grimId]);


    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    // console.log(grimArray)


    return (
        <div>
           
            <RenderSpellsTable
            spellsData={spells} 
            addSpell={addSpell} 
            removeSpell={removeSpell} 
            grimArray={grimArray} 
            grimId={grimId}
            />

        </div>
    )
}

export default SpellsGrim;