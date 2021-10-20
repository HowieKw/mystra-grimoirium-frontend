import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
// import AddSpells from "./AddSpells";

const SpellsGrim = ({ spells, addSpell, removeSpell }) => {
    const [ grimId, setGrimId ] = useState([])
    const [ grimDetails, setGrimDetails ] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const id = useParams().id;
    let path = `/grimoires/${id}`

    useEffect(() => {
        let mounted = true;
        fetch(`/grimoires/${id}`)
        .then(resp => resp.json())
        .then(grimoireData => {
            // if(mounted) {
                setGrimDetails(grimoireData);
                setIsLoaded(true);
            // }
        });
        return () => mounted = false;
    }, [id]);

    if (!isLoaded) return <h2>Revealing Spells...</h2>;

    return (
        <div>

        </div>
    )
}

export default SpellsGrim;