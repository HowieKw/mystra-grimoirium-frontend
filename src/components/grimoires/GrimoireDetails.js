import { Link } from "react-router-dom";
import { FilteringTable } from "../datatable/FilteringTable";

const GrimoireDetails = ({ grimDetails, grimoireSpells }) => {
    const { title, id } = grimDetails

    // console.log(grimoireSpells)

    let path = `/grimoires/${id}/add_spells`

    return (
        <section>
            <div>
    
                <section id="table_of_contents">
                    <h1>{title}</h1>
                </section>

                <section id="rendered_spells">
                    <FilteringTable spellsData={grimoireSpells}/>
                    <Link to={path}>
                        <button>Add Spells</button>
                    </Link>
                </section>
            </div>
        </section>
    )
}

export default GrimoireDetails;