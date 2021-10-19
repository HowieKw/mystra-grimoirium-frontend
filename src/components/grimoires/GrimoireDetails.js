import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const GrimoireDetails = () => {
    const [grimDetails, setGrimDetails] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const id = useParams().id;

    useEffect(() => {
        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            setGrimDetails(grimoireData);
            // setComment(superheroes.comments);
            setIsLoaded(true);
        });
    }, [id]);

    // console.log(details)

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    return (
        <section>

        </section>
    )
}

export default GrimoireDetails;