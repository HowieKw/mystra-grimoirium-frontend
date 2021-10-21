import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AddSpells from "./AddSpells";

const SpellsGrim = ({ spells, addSpell, removeSpell, associations }) => {
    const [ grimId, setGrimId ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const id = useParams().id;
    let path = `/grimoires/${id}`

    useEffect(() => {
        let mounted = true;

        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimId(grimoireData.grimoire_spells);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, []);


    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    console.log(grimId)

    // grimId.map(grimSpellId => setGrimId(grimSpellId))

    // const displayAddSpells =
    // grimId.map(grimSpellId =>
    //     <AddSpells 
    //     key={grimSpellId.id}
    //     spells={spells} 
    //     addSpell={addSpell} 
    //     removeSpell={removeSpell}
    //     grimId={grimSpellId}
    //     />
    //     )

    return (
        <div>
            <AddSpells 
            spells={spells} 
            addSpell={addSpell} 
            removeSpell={removeSpell} 
            grimId={grimId} 
            path={path} 
            id={id}
            associations={associations}
            />
        </div>
    )
}

export default SpellsGrim;