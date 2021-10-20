import GrimoireSpells from "./GrimoireSpells"
import { Link } from "react-router-dom";

const GrimoireDetails = ({ grimDetails, grimoireSpells }) => {
    const { title, id } = grimDetails

    // console.log(id)

    let path = `/grimoires/${id}/add_spells`

    return (
        <section>
            <div className="openBook">
    
                <section id="table_of_contents">
                    <h1>{title}</h1>
                </section>

                <section id="rendered_spells">
                    <GrimoireSpells spells={grimoireSpells}/>
                    <Link to={path}>
                        <button>Add Spells</button>
                    </Link>
                </section>
            </div>
        </section>
    )
}

export default GrimoireDetails;