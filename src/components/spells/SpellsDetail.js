import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SpellButton from "./SpellButton";

const SpellsDetails = () => {
    const [ spellsDetail, setSpellsDetail ] = useState([])

    const id = useParams().id;

    useEffect(() => {
        fetch(`/spells/${id}`)
        .then(resp => resp.json())
        .then(spellDetailData => {
            setSpellsDetail(spellDetailData)
        })
    }, [id]);

    return (
        <section>

        </section>
    )
}

export default SpellsDetails;