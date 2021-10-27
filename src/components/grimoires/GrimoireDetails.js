import { FilteringTable } from "../datatable/FilteringTable";

const GrimoireDetails = ({ grimDetails, grimoireSpells, grimId }) => {
    const { title } = grimDetails

    // console.log(grimoireSpells)


    return (
        <section>
            <div>
    
                <section className="grimoireTitle">
                    <h2>{title}</h2>
                </section>

                <section id="rendered_spells">
                    <FilteringTable spellsData={grimoireSpells} grimId={grimId}/>
                </section>
            </div>
        </section>
    )
}

export default GrimoireDetails;