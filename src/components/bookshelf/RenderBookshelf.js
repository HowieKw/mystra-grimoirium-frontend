import GrimoireRender from "../grimoires/GrimoireRender"

const RenderBookshelf = ({ grimoires, userGrimoires, removeGrimoire }) => {

    // console.log(grimoires) 
    // console.log(userGrimId) 


    return(
        <section className="grimoireList">
            <div>
                <section className="grimoire-cards">
                    <GrimoireRender 
                    grimoire={grimoires}
                    userGrimoires={userGrimoires}
                    removeGrimoire={removeGrimoire}
                    />
                </section>
            </div>
        </section>
    )
}

export default RenderBookshelf;