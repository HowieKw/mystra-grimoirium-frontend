
const SpellButton = ({ grimId, grimSpellsArray, addSpell, removeSpell, spellsGrimArray, spells }) => {

    const removeOrAddButton = (grimSpell) => {
        // console.log(grimSpell)
        
        if (spellsGrimArray.find(spellGrim => spellGrim.grimoire.id === grimSpell.id)) {

            return grimSpell.grimoire_spells_with_spell_ids.map(grimSpellId => {
                if (grimSpellId.assoc_spell === spells.id) {
                return <button onClick={(e) => {
                    e.preventDefault();
                    removeSpell(grimSpellId.grim_spell_id)}
                }>Remove Spell</button>
            }
        })

        } else {
            return  <button onClick={(e) => {
                e.preventDefault();
                addSpell(spells.id, grimId)}
            }>Add Spell</button>
        }
    }
    

    // console.log()
    // console.log(spellsGrimArray)

    return (
        <div>
            {removeOrAddButton(grimSpellsArray)}
        </div>
    )
}

export default SpellButton;

