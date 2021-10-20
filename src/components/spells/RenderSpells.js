import React, { useState } from 'react'

const RenderSpells = ({ spells, id, grimId, setGrimId, addSpell }) => {

    const { name, level, school, components, ritual, concentration, grimoire_spells } = spells

    // console.log(grimId)
    
    grimoire_spells.map(grimoire_spell => setGrimId(grimoire_spell.id))

    return(
        <div>
                <div className="spellCards"> 
                    <h3>{name}</h3>
                    <h4>{level}</h4>
                    <h4>School: {school}</h4>
                    <h4>Components: {components}</h4>
                    <h4>Ritual: {ritual} / Concentration: {concentration}</h4>
                    <button onClick={(e) => addSpell(spells.id, id, e)}>Add Spell</button>
                </div>
        </div>
    )
}

export default RenderSpells;