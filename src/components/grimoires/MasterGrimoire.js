import React, { useState, useEffect } from 'react'
import GrimoireSpells from './GrimoireSpells';
import ReactPaginate from 'react-paginate';

const MasterGrimoire = () => {
    const [ spells, setSpells ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ spellsPerPage, setSpellsPerPage ] = useState(5);

    
    useEffect(() => {
        fetch("/spells")
        .then(resp => resp.json())
        .then(spellsData => setSpells(spellsData))
    }, []);

    const displayMasterGrimoireSpells = 
    spells.map(spell =>
        <GrimoireSpells
        key={spell.id}
        spell={spell}
        />
        )

    // console.log(spells)

    return(
        <section>
            <section>
                <h1 className="title">Mystra's Master Grimoire</h1>
            </section>

            <section>
                {displayMasterGrimoireSpells}
            </section>
        </section>
    )
}

export default MasterGrimoire;