import { Link } from "react-router-dom";
// import BookshelfButton from "../bookshelf/BookshelfButton";

const GrimoireRender = ({ grimoire, addGrimoire, removeGrimoire, userGrimoires }) => {
    const { title, image, id } = grimoire

    // console.log(userGrimoires)

    let path = `/grimoires/${id}`

    const handleAddGrimoire = (e) => {
        e.preventDefault();
        addGrimoire({
            grimoire_id: id
        });
    };

    const renderAddRemoveGrimoire = (userGrimoires) => {
        // console.log(userGrimoires)
        if (grimoire.user_grimoires.find(userGrim => userGrimoires.find(userGrimId => userGrimId.id === userGrim.id))) {
            return userGrimoires.map(userGrimId => <button onClick={(e) => {
                e.preventDefault();
                removeGrimoire(userGrimId.id)
            }} id="centeredButt" className="createButt">Remove</button>)
        } else {
            return <button onClick={handleAddGrimoire} id="centeredButt" className="createButt">Add</button>
        }
    }

    return (
        <div className="container">
            <Link to={path}>
                <img src={image} className="grimoire-cover" alt={title}/>
                <h1 className="centered">{title}</h1>
            </Link>
            {renderAddRemoveGrimoire(userGrimoires)}
            {/* <button onClick={handleAddGrimoire} id="centeredButt" className="createButt">Add</button> */}
        </div>
    )
}

export default GrimoireRender;