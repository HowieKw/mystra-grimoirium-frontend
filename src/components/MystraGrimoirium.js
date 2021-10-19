import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './MenuToggle';
import { useOnClickOutside } from '../hooks'
import Home from './Home';
import Grimoires from './grimoires/Grimoires';
import MasterGrimoire from './grimoires/MasterGrimoire';
import GrimoireDetails from './grimoires/GrimoireDetails';


const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    const [open, setOpen] = useState(false);


    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return(
        <div>
            <div ref={node}>
                <header className="header">
                    <Burger open={open} setOpen={setOpen}/>
                    <Menu open={open} setOpen={setOpen} setCurrentUser={setCurrentUser}/>
                </header>
            </div>

            <nav>
                <Switch>
                    <Route path="/grimoire_details" component={() => <GrimoireDetails />} />
                    <Route path="/grimoires/master_grimoire" component={() => <MasterGrimoire />} />
                    <Route path="/grimoires" component={() => <Grimoires />} />
                    <Route path="/" component={() => <Home />} />
                </Switch>
            </nav>
        </div>
    )
}

export default MystraGrimoirium;