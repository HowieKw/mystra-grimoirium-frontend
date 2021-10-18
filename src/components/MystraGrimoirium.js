import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';

const MystraGrimoirium = ({ currentUser, setCurrentUser }) => {
    
    const history = useHistory()

    const handleLogout = () => {
        fetch(`/logout`, {
        method: 'DELETE',
        credentials: 'include'
        })
        .then(res => {
            if (res.ok) {
            setCurrentUser(null)
            history.push('/')
            }
        })
    }

    return(
        <div>
            <header className="header">
                <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
            </header>
            <nav>
                <Switch>
                    <Route path="/" component={() => <Home />} />
                </Switch>
            </nav>
        </div>
    )
}

export default MystraGrimoirium;