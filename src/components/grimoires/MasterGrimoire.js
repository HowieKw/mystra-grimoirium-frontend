import React, { useState, useEffect } from 'react'
import GrimoireRender from './GrimoireRender';

const MasterGrimoire = () => {
    const [ spells, setSpells ] = useState([])
    
    useEffect(() => {
        fetch("/spells")
        .then(resp => resp.json())
        .then(spellsData => setSpells(spellsData))
    }, []);

    const displayMasterGrimoire = 
    spells.map(spell =>
        <MasterGrimoire 
        key={spell.id}
        spell={spell}
        />
        )

    // console.log(spells)

    return(
        <div className="grimoire-cards">
            <div className="grimoire-info">

            </div>
        </div>
    )
}

export default MasterGrimoire;