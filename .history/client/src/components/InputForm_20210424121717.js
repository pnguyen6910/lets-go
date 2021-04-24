import React from 'react'
import API from '../utils/API'

const InputForm = (props) => {
    addMarker = (e) => {
        console.log(e)
        console.log(e.latlng.lat, e.latlng.lng)
        // on submit you want the body and details along with the latlng to beput into the db
    }
    const handleNewStop = () => {
        API.createPoint({
            marker: props.marker,
            location: "Green Mill",
            details: "Saxophones are forbidden"
        })
            .then(response => response.push('/'))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleNewStop}>
            <label>New Stop {props.marker}</label>
            <br />
            <input type="text" name="location" placeHolder="Location" value={location} />
            <input type="text" name="details" placeholder="Details" value={details} />
            <br />
            <button type="button" onClick={handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm