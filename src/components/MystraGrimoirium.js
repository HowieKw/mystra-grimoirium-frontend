import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Burger, Menu } from './MenuToggle';
import { useOnClickOutside } from '../hooks'
import Home from './Home';
import GrimoireList from './grimoires/GrimoireList';
import MasterGrimoire from './MasterGrimoire/MasterGrimoire';
import OpenGrimoire from './grimoires/OpenGrimoire';
import CreateGrimoire from './grimoires/CreateGrimoire';
import SpellsGrim from './spells/SpellsGrim';
import SpellsDetails from './spells/SpellsDetail';
import Bookshelf from './bookshelf/Bookshelf';


const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    const [ open, setOpen ] = useState(false);
    const [ grimoires, setGrimoires ] = useState([]);
    const [ spells, setSpells ] = useState([]);
    const [ grimSpells, setGrimSpells ] = useState([]);
    const [ userGrimoire, setUserGrimoire ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    const fetchThoseGrimoires = () => {
        fetch("/grimoires")
        .then(resp => resp.json())
        .then(grimoiresData => setGrimoires(grimoiresData))
    }
    
    
    const fetchThoseSpells = () => {
        fetch("/spells")
        .then(resp => resp.json())
        .then(spellsData => {
            setSpells(spellsData);
            setIsLoaded(true);
        })
    } 
    
    const fetchThoseUserGrims = () => {
        fetch("/user_grimoires")
        .then(resp => resp.json())
        .then(userGrimData => {
            setUserGrimoire(userGrimData);
        })
    }

    useEffect(
        fetchThoseGrimoires
    , []);
    
    useEffect(
        fetchThoseSpells
    , []);

    useEffect(
        fetchThoseUserGrims
    , []);


    const addSpell = (spellId, grimoireId) => {
        
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
              fetchThoseSpells()
            })
        }

    const removeSpell = (grimSpellId) => {
        // console.log(grimSpellId)
        return fetch(`/grimoire_spells/${grimSpellId}`, {
            method: "DELETE",
            credentials: 'include'
        })
            .then(res => {
            if (res.ok) {
                const updatedGrimoreSpells = grimSpells.filter(grimSpell => grimSpell.id !== grimSpellId)
                setGrimSpells(updatedGrimoreSpells)
                fetchThoseSpells()
            }
            })
        }

        const addGrimoire = (grimId) => {
            return fetch("/user_grimoires", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              credentials: 'include',
              body: JSON.stringify(grimId)
            })
              .then(res => {
                if (res.ok) {
                  return res.json()
                } else {
                  return res.json().then(errors => Promise.reject(errors))
                }
              })
              .then(grimoire => {
                setUserGrimoire(userGrimoire.concat(grimoire))
                fetchThoseGrimoires()
                fetchThoseUserGrims()
              })
          }

          const removeGrimoire = (grimId) => {
            return fetch(`/user_grimoires/${grimId}`, {
                method: "DELETE",
                credentials: 'include'
            })
                .then(res => {
                if (res.ok) {
                    const updatedUserGrimoires = userGrimoire.filter(grimoire => grimoire.id !== grimId)
                    setUserGrimoire(updatedUserGrimoires)
                }
                })
            }

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
                    <Route path="/grimoires/:grimId/spell/:spellId" component={() => <SpellsDetails />} />

                    <Route path="/grimoires/:grimId/add_spells" component={() => <SpellsGrim spells={spells} addSpell={addSpell} removeSpell={removeSpell} /> } /> 

                    <Route path="/create_grimoire" component={() => <CreateGrimoire grimoires={grimoires} setGrimoires={setGrimoires}/>} /> 

                    <Route path="/grimoires/master_grimoire" component={() => <MasterGrimoire spells={spells} isLoaded={isLoaded} />} />

                    <Route path="/grimoires/:grimId" component={() => <OpenGrimoire />} />

                    <Route path="/grimoires" component={() => <GrimoireList grimoires={grimoires} addGrimoire={addGrimoire} removeGrimoire={removeGrimoire} userGrimoire={userGrimoire}/>} />

                    <Route path="/bookshelf" component={() => <Bookshelf userGrimoire={userGrimoire} removeGrimoire={removeGrimoire} />} />

                    <Route path="/" component={() => <Home />} />
                </Switch>
            </nav>
        </div>
    )
}

export default MystraGrimoirium;