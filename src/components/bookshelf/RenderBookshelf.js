import GrimoireRender from "../grimoires/GrimoireRender"

const RenderBookshelf = ({ grimoires, userGrimoires, removeGrimoire, user }) => {

    // console.log(user) 
    // console.log(userGrimId) 


    return(
            <div>
                {/* <h1 className="collection">{user.username}'s Collection</h1> */}
                <section>
                    <GrimoireRender 
                    grimoire={grimoires}
                    userGrimoires={userGrimoires}
                    removeGrimoire={removeGrimoire}
                    />
                </section>
            </div>
    )
}

export default RenderBookshelf;