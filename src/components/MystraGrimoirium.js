import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './MenuToggle';
import { useOnClickOutside } from '../hooks'
import Home from './Home';
import GrimoireList from './grimoires/GrimoireList';
import MasterGrimoire from './grimoires/MasterGrimoire';
import OpenGrimoire from './grimoires/OpenGrimoire';
import CreateGrimoire from './grimoires/CreateGrimoire';
import AddSpells from './spells/AddSpells';


const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    const [open, setOpen] = useState(false);
    const [ grimoires, setGrimoires ] = useState([]);
    const [ spells, setSpells ] = useState([]);
    const [ grimSpells, setGrimSpells ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    useEffect(() => {
        fetch("/grimoires")
        .then(resp => resp.json())
        .then(grimoiresData => setGrimoires(grimoiresData))
    }, []);

    useEffect(() => {
        fetch("/spells")
        .then(resp => resp.json())
        .then(spellsData => {
                setSpells(spellsData);
                setIsLoaded(true);
        })
    }, []);

    const addSpell = (spellId, grimoireId, e) => {
        // console.log(spellId)
        // console.log(grimoireId)
        e.preventDefault();
        return fetch('/grimoire_spells', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                grimoire_id: grimoireId,
                spell_id: spellId
            })
          })
            .then(res => {
              if (res.ok) {
                return res.json()
              } else {
                return res.json().then(errors => Promise.reject(errors))
              }
            })
            .then(addedSpell => {
              setGrimSpells(grimSpells.concat(addedSpell))
            })
        }

        // const removeSpell = (favId) => {
        //     e.preventDefault();
        //     return fetch(`/grimoire_spells/${favId}`, {
        //         method: "DELETE",
        //         credentials: 'include'
        //     })
        //         .then(res => {
        //         if (res.ok) {
        //             const updatedFavHeroes = favHeroes.filter(hero => hero.id !== favId)
        //             setFavHeroes(updatedFavHeroes)
        //         }
        //         })
        //     }


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
                    <Route path="/grimoires/:id/add_spells" component={() => <AddSpells spells={spells} isLoaded={isLoaded} addSpell={addSpell}/>} /> 

                    <Route path="/create_grimoire" component={() => <CreateGrimoire grimoires={grimoires} setGrimoires={setGrimoires}/>} /> 

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