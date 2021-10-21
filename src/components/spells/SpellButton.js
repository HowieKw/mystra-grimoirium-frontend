

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