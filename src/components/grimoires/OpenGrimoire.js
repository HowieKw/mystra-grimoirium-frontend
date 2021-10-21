import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import GrimoireDetails from './GrimoireDetails';

const OpenGrimoire = () => {
    const [grimDetails, setGrimDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const id = useParams().id;

    useEffect(() => {
        let mounted = true;
        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimDetails(grimoireData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, [id]);

    console.log(grimDetails.grimoire_spells)

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    return (
        <section>
            <GrimoireDetails 
            key={grimDetails.id}
            grimDetails={grimDetails}
            grimoireSpells={grimDetails.added_spells}
            />
        </section>
    )
}

export default OpenGrimoire;