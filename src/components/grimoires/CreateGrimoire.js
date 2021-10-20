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
        <div className="createGrimoire">
            <form onSubmit={createGrimoire}>
                <p>
                <label htmlFor="title">
                    Title
                </label>
                    <input
                    type="text"
                    name="username"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="inputArea"
                    />
                </p>

                <p>
                <label htmlFor="grimoire cover">
                    Grimoire Cover
                </label>
                    <input
                    type="text"
                    name="grimoire cover"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="inputArea"
                    />
                </p>

                <p><button type="submit" className="butt" id="authButton">Create Grimoire</button></p>
            </form>
        </div>
    )
}

export default CreateGrimoire;