import React, { useState } from 'react'

const RenderSpells = ({ spells, id, grimId, setGrimId, grimSpells, addSpell, removeSpell }) => {

    const { name, level, school, components, ritual, concentration, grimoire_spells } = spells

    // console.log(spells)
    
    grimSpells.map(grimSpell => setGrimId(grimSpell.id))

    const removeOrAddButton = (grimId) => {
        if (grimoire_spells.find(grimSpell => grimSpell.id === grimId)) {
            return <button onClick={() => removeSpell(grimId)}>Remove Spell</button>
        } else {
            return  <button onClick={(e) => addSpell(spells.id, id, e)}>Add Spell</button>
        }
    }

    return(
        <div>
                <div className="spellCards"> 
                    <h3>{name}</h3>
                    <h4>{level}</h4>
                    <h4>School: {school}</h4>
                    <h4>Components: {components}</h4>
                    <h4>Ritual: {ritual} / Concentration: {concentration}</h4>
                    {removeOrAddButton(grimId)}
                </div>
        </div>
    )
}

export default RenderSpells;