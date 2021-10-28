import RenderBookshelf from "./RenderBookshelf";

const Bookshelf = ({ userGrimoire, removeGrimoire, currentUser }) => {

    const displayBookshelf =
    userGrimoire.map(userGrim =>
        <RenderBookshelf 
        key={userGrim.id}
        grimoires={userGrim.grimoire}
        userGrimoires={userGrimoire}
        removeGrimoire={removeGrimoire}
        user={userGrim.user}
        />
        )

        console.log(currentUser)

    return (
        <div>
            <h1 className="collection">{currentUser.username}'s Collection</h1>
            <div className="grimoireList">
                <section className="grimoire-cards">
                    {displayBookshelf}
                </section>
            </div>
        </div>
    )
}

export default Bookshelf;