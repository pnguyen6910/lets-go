import React, { useState } from 'react'
import API from '../utils/API'

const InputForm = (props) => {
    const [location, setLocation] = useState("")
    const [details, setDetails] = useState("")

    const handleNewStop = () => {
        API.createPoint({
            marker: props.marker,
            location: location,
            details: details
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleNewStop}>
            <label>New Stop {props.marker}</label>
            <br />
            <input
                type="text"
                name="location"
                placeHolder="Location"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <input
                type="text"
                name="details"
                placeholder="Details"
                value={details}
                onChange={e => setDetails(e.target.value)}
            />
            <br />
            <button type="button" onClick={handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm