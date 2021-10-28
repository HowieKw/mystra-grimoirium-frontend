import GrimoireRender from "../grimoires/GrimoireRender"

const RenderBookshelf = ({ grimoires, userGrimoires, removeGrimoire, user }) => {

    // console.log(user) 
    // console.log(userGrimId) 




    return(
        <section className="grimoireList">
            <div>
                <h1 className="collection">{user.username}'s Collection</h1>
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