import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SpellPage from './SpellPage';

const SpellsDetails = () => {
    const [ spellsDetail, setSpellsDetail ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        let mounted = true;
        fetch(`/spells/${id}`)
        .then(resp => resp.json())
        .then(spellDetailData => {
            if(mounted) {
                setSpellsDetail(spellDetailData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, [id]);

    // console.log(spellsDetail)

    if (!isLoaded) return <h2>Revealing Spell...</h2>;


    return (
        <section className="spellPage">
            
            <img className="blankBook" alt="blankBook" src="https://res.cloudinary.com/djzhu5kfj/image/upload/v1634620193/Flatiron%20-%20Final%20Project/Open_Grimoire_Edit_gty2rc.png"/>

            <SpellPage 
            key={spellsDetail.id}
            spellsDetail={spellsDetail}
            tagsArray={spellsDetail.tags}
            dndClassArray={spellsDetail.dnd_classes}
            />
           
        </section>
    )
}

export default SpellsDetails;