import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './MenuToggle';
import { useOnClickOutside } from '../hooks'
import Home from './Home';
import Grimoires from './grimoires/Grimoires';
import MasterGrimoire from './grimoires/MasterGrimoire';
import OpenGrimoire from './grimoires/OpenGrimoire';


const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    const [open, setOpen] = useState(false);


    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

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
                    <Route path="/grimoires/master_grimoire" component={() => <MasterGrimoire />} />
                    <Route path="/grimoires/:id" component={() => <OpenGrimoire />} />
                    <Route path="/grimoires" component={() => <Grimoires />} />
                    <Route path="/" component={() => <Home />} />
                </Switch>
            </nav>
        </div>
    )
}

export default MystraGrimoirium;