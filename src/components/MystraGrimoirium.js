import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './MenuToggle';
import { useOnClickOutside } from '../hooks'
import Home from './Home';
import GrimoireList from './grimoires/GrimoireList';
import MasterGrimoire from './grimoires/MasterGrimoire';
import OpenGrimoire from './grimoires/OpenGrimoire';
import CreateGrimoire from './CreateGrimoire';


const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    const [open, setOpen] = useState(false);
    const [ grimoires, setGrimoires ] = useState([]);
    const [ spells, setSpells ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    useEffect(() => {
        fetch("/grimoires")
        .then(resp => resp.json())
        .then(grimoiresData => setGrimoires(grimoiresData))
    }, []);

    useEffect(() => {
        let mounted = true;
        fetch("/spells")
        .then(resp => resp.json())
        .then(spellsData => {
            if(mounted) {
                setSpells(spellsData);
                setIsLoaded(true);
            }
        })
    }, []);

    return(
        <div>

            <video autoPlay muted loop id="videoBackground">
                <source src="https://res.cloudinary.com/djzhu5kfj/video/upload/v1634615538/Flatiron%20-%20Final%20Project/Background_g6wkqp.mp4" type="video/mp4" />
            </video>

            <div ref={node}>
                <header className="header">
                    <Burger open={open} setOpen={setOpen}/>
                    <Menu open={open} setOpen={setOpen} setCurrentUser={setCurrentUser}/>
                </header>
            </div>

            <nav>
                <Switch>
                    <Route path="/create_grimoire" component={() => <CreateGrimoire />} /> 

                    <Route path="/grimoires/master_grimoire" component={() => <MasterGrimoire spells={spells} isLoaded={isLoaded} />} />

                    <Route path="/grimoires/:id" component={() => <OpenGrimoire />} />

                    <Route path="/grimoires" component={() => <GrimoireList grimoires={grimoires}/>} />

                    <Route path="/" component={() => <Home />} />
                </Switch>
            </nav>
        </div>
    )
}

export default MystraGrimoirium;