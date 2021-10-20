import { Link } from "react-router-dom";


const GrimoireRender = ({ grimoire }) => {
    const { title, image, id } = grimoire

    // console.log(id)

    let path = `/grimoires/${id}`

    return (
        <div className="container">
            <Link to={path}>
                <img src={image} className="grimoire-cover" alt={title}/>
                <h1 className="centered">{title}</h1>
            </Link>
        </div>
    )
}

export default GrimoireRender;