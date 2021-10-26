

const SpellPage = ({ spellsDetail, tagsArray }) => {

    // console.log(tagsArray)

    return (
        <div>
            <h2>{spellsDetail.name}</h2>
            <h3>Level: {spellsDetail.level}</h3>
            <h3>School: {spellsDetail.school}</h3>
            <h3>Components: {spellsDetail.components}</h3>
            <h3>Casting Time: {spellsDetail.casting_time}</h3>
            <h3>Ritual: {spellsDetail.ritual}</h3>
            <h3>Concentration: {spellsDetail.concentration}</h3>
            <h3>Duration: {spellsDetail.duration}</h3>
            <h3>Range/Area of Effect: {spellsDetail.range_area}</h3>
            <h3>Attack Save: {spellsDetail.attack_save}</h3>
            <h3>Effect: {spellsDetail.damage_effect}</h3>
            <p>{spellsDetail.description}</p>
        </div>
    )
}

export default SpellPage;