import { generatePath } from "react-router"

const SpellButton = ({ id, grimId, addSpell, removeSpell, grimSpells, spells }) => {

    const removeOrAddButton = (grimId) => {
        if (grimSpells.find(grimSpell => grimSpell.id === grimId.id)) {
            return <button onClick={() => removeSpell(grimId.id)}>Remove Spell</button>
        } else {
            return  <button onClick={(e) => addSpell(spells.id, id, e)}>Add Spell</button>
        }
    }

    // console.log(grimId)

    return (
        <div>
            {removeOrAddButton(grimId)}
        </div>
    )
}

export default SpellButton;