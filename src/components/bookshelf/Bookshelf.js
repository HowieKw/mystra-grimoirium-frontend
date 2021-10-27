import RenderBookshelf from "./RenderBookshelf";

const Bookshelf = ({ userGrimoire, removeGrimoire }) => {

    const displayBookshelf =
    userGrimoire.map(userGrim =>
        <RenderBookshelf 
        key={userGrim.id}
        grimoires={userGrim.grimoire}
        userGrimoires={userGrimoire}
        removeGrimoire={removeGrimoire}
        />
        )

        // console.log(userGrimoire)

    return (
        <div>
            {displayBookshelf}
        </div>
    )
}

export default Bookshelf;