import React from 'react'
import API from '../utils/API'

const InputForm = (props) => {
    addMarker = (e) => {
        console.log(e)
        console.log(e.latlng.lat, e.latlng.lng)
        // on submit you want the body and details along with the latlng to beput into the db
        API.createPoint({ marker })
            .then(response => response.push('/'))
            .catch(err => console.log(err))
    }

    const handleNewStop = () => {
        ;
    }

    return (
        <form>
            <label>New Stop {props.marker}</label>
            <br />
            <input type="text" name="location" placeHolder="Location" />
            <input type="text" name="details" placeholder="Details" />
            <br />
            <button type="button" onClick={handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm