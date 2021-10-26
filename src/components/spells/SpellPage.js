

const SpellPage = ({ spellsDetail, tagsArray, dndClassArray }) => {

    // console.log(tagsArray)

    return (
        <div>
            <section className="leftPage"> 

            </section>
            <section className="rightPage">
                <h2>{spellsDetail.name}</h2>
                <div className="paired">
                    <h3 className="pair">Level: {spellsDetail.level}</h3>
                    <h3 className="pair">School: {spellsDetail.school}</h3>
                </div>

                <div className="paired">
                    <h3 className="pair">Casting Time: {spellsDetail.casting_time}</h3>
                    <h3 className="pair">Duration: {spellsDetail.duration}</h3>
                </div>

                <div className="paired">
                    <h3 className="pair">Range/Area of Effect: {spellsDetail.range_area}</h3>
                    <h3 className="pair">Attack Save: {spellsDetail.attack_save}</h3>
                </div>
                
                <div className="paired">
                    <h3 className="pair">Components: {spellsDetail.components}</h3>
                    <h3 className="pair">Effect: {spellsDetail.damage_effect}</h3>
                </div>

                <div className="paired">
                    <h3 className="pair">Ritual: {spellsDetail.ritual}</h3>
                    <h3 className="pair">Concentration: {spellsDetail.concentration}</h3>
                </div>

                <div className="spellDescription">
                    <p className="spellText">{spellsDetail.description}</p>
                </div>   

                <div>
                    <div className="categoryPaired">
                        <h4 className="categoryPair">Classes:</h4>
                        {dndClassArray.map(dndClass => <h4 className="catetgoryPair">{dndClass.name}</h4>)}
                    </div>
                    <div className="categoryPaired">
                        <h4 className="categoryPair">Tags:</h4>
                        {tagsArray.map(tag => <h4 className="categoryPair">{tag.name}</h4>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SpellPage;