import { Link } from "react-router-dom";

const GrimoireSpells = ({ spell }) => {
    const { name, level, school, components, ritual, concentration } = spell

    // console.log(spell)

    return(
        <div>
            <h3>{name}</h3>
            <h4>{level}</h4>
            <h4>{school}</h4>
            <h4>{components}</h4>
            <h4>Ritual: {ritual} / Concentration: {concentration}</h4>
        </div>
    )
}

export default GrimoireSpells;