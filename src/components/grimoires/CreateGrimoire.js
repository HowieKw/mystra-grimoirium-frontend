import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateGrimoire = ({ grimoires, setGrimoires }) => {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
  
    const createGrimoire = (e) => {
        e.preventDefault();
        return fetch("/grimoires", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                title,
                image
            })
        })
            .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("There is a grimoire already with that title!")
                return res.json().then(errors => Promise.reject(errors))
            }
            })
            .then(grimoire => {
            setGrimoires(grimoires.concat(grimoire));
            history.push(`/grimoires/${grimoire.id}/add_spells`)
            })
        }

    return (
        
        <div>
            <div style={{marginTop: "5%"}}>
                <h1>With Mystra's guidance,</h1>
                <h1>create your own grimoire.</h1>
            </div>

            <video autoPlay muted loop id="mystra">
                <source src="https://res.cloudinary.com/djzhu5kfj/video/upload/v1635297752/Flatiron%20-%20Final%20Project/Mystra_kdraju.mp4" type="video/mp4" />
            </video>

            <div className="createGrimoire">
                <form onSubmit={createGrimoire}>
                    <p>
                    <label htmlFor="title">
                        Title
                    </label>
                    <br></br>
                        <input
                        type="text"
                        name="username"
                        placeholder="Title of grimoire..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="inputArea"
                        />
                    </p>

                    <p>
                    <label htmlFor="grimoire cover">
                        Grimoire Cover
                    </label>
                    <br></br>
                        <input
                        type="text"
                        name="grimoire cover"
                        placeholder="Image URL..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="inputArea"
                        />
                    </p>

                    <div><button type="submit" className="createButt" id="authButton">Create Grimoire</button></div>
                </form>
            </div>
        </div>
    )
}

export default CreateGrimoire;