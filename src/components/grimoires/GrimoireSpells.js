import { Link } from "react-router-dom";

const GrimoireSpells = ({ spells }) => {

    // console.log(spell)


    return(
        <div>
            {spells.map(spell => (
               <div key={spell.id}> 
                    <h3>{spell.name}</h3>
                    <h4>{spell.level}</h4>
                    <h4>{spell.school}</h4>
                    <h4>{spell.components}</h4>
                    <h4>Ritual: {spell.ritual} / Concentration: {spell.concentration}</h4>
                </div>
            ))}
        </div>
    )
}

export default GrimoireSpells;