import SpellButton from "./SpellButton";

const RenderSpells = ({ spells, id, grimId, addSpell, removeSpell, associations }) => {

    const { name, level, school, components, ritual, concentration, grimoire_spells } = spells

    // console.log(name)

    const displaySpellButton =
    grimId.filter(grimSpell => grimSpell.id === grimSpell.id).map(grimSpellsId =>                 
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

        // grimId.filter(grimSpell => console.log(grimSpell))

    return(
        <div>
            <div className="spellCards">
                    <h3>{name}</h3>
                    <h4>{level}</h4>
                    <h4>School: {school}</h4>
                    <h4>Components: {components}</h4>
                    <h4>Ritual: {ritual} / Concentration: {concentration}</h4>

                    {displaySpellButton}

                    {/* <SpellButton 
                    // key={grimSpellsId.id}
                    id={id}
                    spells={spells}
                    grimId={grimId}
                    grimSpells={grimoire_spells}
                    addSpell={addSpell}
                    removeSpell={removeSpell}
                    /> */}
            </div>
        </div>
    )
}

export default RenderSpells;