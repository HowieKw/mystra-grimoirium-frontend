import GrimoireList from "./GrimoireList"


const GrimoireRender = ({ grimoire }) => {
    const { title, image } = grimoire

    console.log(grimoire)

    return (
        <div className="container">
            <img src={image} className="grimoire-cover"/>
            <h1 className="centered">{title}</h1>
        </div>
    )
}

export default GrimoireRender;