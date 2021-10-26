

const SpellButton = ({ grimId, grimSpellsArray, addSpell, removeSpell, spellsGrimArray, spells }) => {

    const removeOrAddButton = (grimSpell) => {
        // console.log(grimSpell)
        
        if (spellsGrimArray.find(spellGrim => spellGrim.grimoire.id === grimSpell.id)) {

            return grimSpell.grimoire_spells_with_spell_ids.map(grimSpellId => {
                if (grimSpellId.assoc_spell == spells.id) {
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




// const arrayToConvert = grimSpell.grimoire_spells
       
//         const convertArrayToObject = (array, key) =>
//             array.reduce(
//                 (obj, item) => ({
//                 ...obj,
//                 [item[key]]: item
//                 }),
//                 {}
//             );

//         const grimSpellId = convertArrayToObject(arrayToConvert, 'id')
//         // console.log(grimSpellId)
//         // arrayToConvert.map(grim => console.log(grimSpellId[key].id))


// import React, { useState } from 'react'


// const SpellButton = ({ id, grimId, addSpell, removeSpell, grimSpells, spells }) => {
//     const [ removeButtonRendered, setRemoveButtonRendered ] = useState(false);
//     const [ addButtonRendered, setAddButtonRendered ] = useState(false);


//     const handleRemoveButtRender = () => {
//         setRemoveButtonRendered(!removeButtonRendered)
//         if (removeButtonRendered === true) {
//             return <button onClick={() => removeSpell(grimId.id)}>Remove Spell</button>
//         }
//     }

//     // console.log(removeButtonRendered)
//     const removeOrAddButton = (grimId) => {
//         if (grimSpells.find(grimSpell => grimSpell.id === grimId.id) && removeButtonRendered === false) {
//             // setRemoveButtonRendered(true)
//             // console.log(removeButtonRendered)
//             {handleRemoveButtRender()}

//         } else if (addButtonRendered === false) {
//             // setAddButtonRendered(true)
//             // console.log(addButtonRendered)
//             return <button onClick={(e) => addSpell(spells.id, id, e)}>Add Spell</button>
        
//         }
//     }

//     // console.log(grimId)

//     return (
//         <div>
//             {removeOrAddButton(grimId)}
//         </div>
//     )
// }

// export default SpellButton;