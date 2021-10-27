import { Link } from "react-router-dom";
import GrimoireRender from "./GrimoireRender";

const GrimoireList = ({ grimoires }) => {

    // console.log(grimoires) 
    // console.log(spells) 

    let path = "/grimoires/master_grimoire"

    const displayGrimoire = 
    grimoires.map(grimoire =>
        <GrimoireRender 
        key={grimoire.id}
        grimoire={grimoire}
        />
        )

    return(
        <section className="grimoireList">
            <div className="grimoire-cards">
                <section className="container">
                    <Link to={path}>
                        <img src="https://res.cloudinary.com/djzhu5kfj/image/upload/v1634251865/Flatiron%20-%20Final%20Project/Mystra_Grimoire_plnagw.jpg" id="master-grimoire" alt="Master Grimoire"/>
                        <h1 className="centered">Mystra's Master Grimoire</h1>
                    </Link>
                </section>
            </div>
            
            <div>
                <section className="grimoire-cards">
                    {displayGrimoire}
                </section>
            </div>
        </section>
    )
}

export default GrimoireList;