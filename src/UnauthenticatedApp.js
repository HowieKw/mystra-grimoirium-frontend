import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <h1 className="appTitle">Mystra Grimoirium</h1>
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <h1 className="appTitle">Mystra Grimoirium</h1>
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp;