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
        <form className="form" onSubmit={handleNewStop}>
            <label><strong>New Stop
                <br />
                {props.marker[0]}
                <br />
                {props.marker[1]}
            </strong></label>
            <br />
            <input
                className="form"
                type="text"
                name="location"
                placeHolder="Location"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <br />
            <input
                className="form"
                type="text"
                name="details"
                placeholder="Details"
                value={details}
                onChange={e => setDetails(e.target.value)}
            />
            <br />
            <button className="form"type="button" onClick={handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm