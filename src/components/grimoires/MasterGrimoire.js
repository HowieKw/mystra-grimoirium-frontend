import GrimoireSpells from './GrimoireSpells';

const MasterGrimoire = ({ spells, isLoaded }) => {    

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    // console.log(currentSpells)

    return(
        <section>
            <section>
                <h1 className="title">Mystra's Master Grimoire</h1>
            </section>

            <section>
                <GrimoireSpells spells={spells}/>
            </section>
        </section>
    )
}

export default MasterGrimoire;