import SpellButton from "./SpellButton";

const RenderSpells = ({ spells, id, grimId, addSpell, removeSpell }) => {

    const { name, level, school, components, ritual, concentration, grimoire_spells } = spells

    // console.log(grimId)

    const displaySpellButton =
    grimId.map(grimSpellsId =>                 
        <SpellButton 
        key={grimSpellsId.id}
        id={id}
        spells={spells}
        grimId={grimSpellsId}
        grimSpells={grimoire_spells}
        addSpell={addSpell}
        removeSpell={removeSpell}
        />
        )

    return(
        <div>
                <div className="spellCards"> 
                    <h3>{name}</h3>
                    <h4>{level}</h4>
                    <h4>School: {school}</h4>
                    <h4>Components: {components}</h4>
                    <h4>Ritual: {ritual} / Concentration: {concentration}</h4>
                    {displaySpellButton}
                </div>
        </div>
    )
}

export default RenderSpells;