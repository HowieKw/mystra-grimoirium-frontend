import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import GrimoireDetails from './GrimoireDetails';

const OpenGrimoire = () => {
    const [grimDetails, setGrimDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const { grimId } = useParams();

    useEffect(() => {
        let mounted = true;
        fetch(`/grimoires/${grimId}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            if(mounted) {
                setGrimDetails(grimoireData);
                setIsLoaded(true);
            }
        });
        return () => mounted = false;
    }, [grimId]);

    // console.log(grimDetails.grimoire_spells)

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    return (
        <section className="openGrimoire">
            <GrimoireDetails 
            key={grimDetails.id}
            grimDetails={grimDetails}
            grimoireSpells={grimDetails.added_spells}
            grimId={grimId}
            />
        </section>
    )
}

export default OpenGrimoire;