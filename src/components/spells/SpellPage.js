import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import CastSpell from "./CastSpell";

const SpellPage = ({ spellsDetail, tagsArray, dndClassArray }) => {
    const [ buttonPopup, setButtonPopup ] = useState(false);

    const { grimId } = useParams();
    // console.log(spellsDetail)

    let grimPath = `/grimoires/${grimId}`
    let masterPath = `/grimoires/master_grimoire`

    const returnToGrimoire = () => {
        if (grimId === 'undefined') {
            return <Link to={masterPath}><button>Return to Grimoire</button></Link>
        } else {
            return <Link to={grimPath}><button>Return to Grimoire</button></Link>
        }
    }

    return (
        <>
        <div className="spellChapter">
            <section className="leftPage"> 
                <h2>Glossary</h2>
                <h3>Components</h3>
                <li>V: Verbal - requires incantation</li>
                <li>S: Somatic - requires hand signs</li>
                <li>M: Material - requires specific ingredients</li>
                <h3>Ritual</h3>
                <p className="ritualText">Such a spell can be cast following the normal rules for spellcasting, or the spell can be cast as a ritual. The ritual version of a spell takes 10 minutes longer to cast than normal. It also doesn't expend a spell slot, which means the ritual version of a spell can't be cast at a higher level.</p>
                <p className="ritualText">To cast a spell as a ritual, a spellcaster must have a feature that grants the ability to do so. The cleric and the druid, for example, have such a feature.</p>

                <h3>Schools of Magic</h3>
                <li>Abjuration: primarily used for protection, self-buffing, and counterspelling.</li>
                <li>Conjuration: responsible for summoning, creating constructs, and duplication.</li>
                <li>Divination: assists in attaining information and knowledge.</li>
                <li>Enchantment: spells designed to manipulate the mental state.</li>
                <li>Evocation: utilizes pure elemental or arcane energies.</li>
                <li>Illusion: focuses on manipulating the senses and tricking the mind.</li>
                <li>Necromancy: handling the energy between life and death.</li>
                <li>Transmutation: manipulation of physical properties of matter.</li>

                {returnToGrimoire()}
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

            <button onClick={() => setButtonPopup(true)} className="spellButton">Cast Spell</button>
            <CastSpell trigger={buttonPopup} setTrigger={setButtonPopup}>
                <video src={spellsDetail.ani} autoPlay loop muted className="spellAni"/>
            </CastSpell>
            </section>
        </div>
        
        
        </>
    )
}

export default SpellPage;