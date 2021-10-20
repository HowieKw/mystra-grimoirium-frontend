import './App.css';
import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './menustyling';
import { theme } from './theme';
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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
          <div className="App">
            
            <video autoPlay muted loop id="videoBackground">
                <source src="https://res.cloudinary.com/djzhu5kfj/video/upload/v1634615538/Flatiron%20-%20Final%20Project/Background_g6wkqp.mp4" type="video/mp4" />
            </video>

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
      </>
    </ThemeProvider>
  );
}

export default App;
