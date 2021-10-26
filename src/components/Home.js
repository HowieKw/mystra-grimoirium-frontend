import { Link } from "react-router-dom";

const Home = () => {

    let researchPath = "/grimoires/master_grimoire"
    let grimoirePath = "/grimoires"
    let createPath = "/create_grimoire"

    
    return(
        <section>
            <div className="homeIntro">
                <h1>Welcome to the Grand Grimoirium,</h1>
                <h1>bestowed upon us by the Goddess Mystra</h1>
            </div>
            <div className="whatDo">
                <h2>What would you like to do?</h2>
            </div>
            
            <div className="frontButts">
                <Link to={createPath}>
                    <button>Create Grimoire</button>
                </Link>
                <Link to={grimoirePath}>
                    <button>Checkout Grimoires</button>
                </Link>
                <Link to={researchPath}>
                    <button>Research Spells</button>
                </Link>
            </div>
        </section>
    )
}

export default Home;