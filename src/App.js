import './App.css';
import { useState, useEffect } from "react";
import MystraGrimoirium from './components/MystraGrimoirium';
import UnauthenticatedApp from './UnauthenticatedApp';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}

  return (
    <div className="App">
      {currentUser ? (
        <MystraGrimoirium
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        />
      ) : (
        <UnauthenticatedApp
          setCurrentUser={setCurrentUser}
        />
      )
    }
    </div>
  );
}

export default App;
