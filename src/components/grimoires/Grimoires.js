import React, { useState, useEffect } from 'react'
import GrimoireList from './GrimoireList';

const Grimoires = () => {
    const [ grimoires, setGrimoires ] = useState([])
    

    useEffect(() => {
        fetch("/grimoires")
        .then(resp => resp.json())
        .then(grimoiresData => setGrimoires(grimoiresData))
    }, []);


    return(
        <div>
            <GrimoireList grimoires={grimoires}/>
        </div>
    )
};

export default Grimoires;