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


    return (
        <section className="spellPage">
            
            <SpellPage 
            key={spellsDetail.id}
            spellsDetail={spellsDetail}
            tagsArray={spellsDetail.tags}
            />
           
        </section>
    )
}

export default SpellsDetails;