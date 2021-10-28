import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/groups')
          })
        } else {
          history.push('/signup')
          res.json().then(errors => {
            alert(errors)
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <p>
          <label 
            htmlFor="username"
          >
            Username
          </label>
          <br></br>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputArea"
          />
        </p>

        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <br></br>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputArea"
          />
        </p>

        <p>
          <label 
            htmlFor="password_confirmation"
            className="inputTitle"
          >
            Password Confirmation
          </label>
          <br></br>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="inputArea"
          />
        </p>

        <p><button type="submit" className="butt" id="authButton">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/" className="butt">Log In</Link></p>

      </form>
    </div>
  )
}

export default Signup;