// import GrimoireSpells from './GrimoireSpells';
// import { BasicTable } from '../datatable/BasicTable';
import { SortingTable } from '../datatable/SortingTable';
import { FilteringTable } from '../datatable/FilteringTable';

const MasterGrimoire = ({ spells, isLoaded }) => {    

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    console.log(spells)

    return(
        <section>
            <section>
                <h1 className="title">Mystra's Master Grimoire</h1>
            </section>

            <section>
                {/* <GrimoireSpells spells={spells}/> */}
                <FilteringTable spellsData={spells}/>
            </section>
        </section>
    )
}

export default MasterGrimoire;