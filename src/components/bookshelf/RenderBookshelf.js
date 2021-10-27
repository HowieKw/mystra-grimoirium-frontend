import GrimoireRender from "./GrimoireRender";

const RenderBookshelf = ({ grimoires }) => {

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
            <div>
                <section className="grimoire-cards">
                    {displayGrimoire}
                </section>
            </div>
        </section>
    )
}

export default RenderBookshelf;