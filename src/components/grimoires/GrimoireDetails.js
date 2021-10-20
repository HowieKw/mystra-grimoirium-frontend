import GrimoireSpells from "./GrimoireSpells"

const GrimoireDetails = ({ grimDetails, grimoireSpells }) => {
    const { title } = grimDetails

    // console.log(grimoireSpells)

    // const displaySpells =
    // grimoireSpells.map(spell => 
    // <GrimoireSpells 
    // id={spell.id}
    // spell={spell}
    // />    
    // )

    return (
        <section>
            <div className="openBook">
    
                <section id="table_of_contents">
                    <h1>{title}</h1>
                </section>

                <section id="rendered_spells">
                    <GrimoireSpells spells={grimoireSpells}/>
                </section>
            </div>
        </section>
    )
}

export default GrimoireDetails;