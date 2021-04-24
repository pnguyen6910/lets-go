import React from 'react'
import API from '../utils/API'

const InputForm = (props) => {
    // addMarker = (e) => {
    //     console.log(e)
    //     console.log(e.latlng.lat, e.latlng.lng)
    //     this.setState({
    //         marker: [...e.latlng, form.body],
    //         renderingInput: true
    //     })
    //on submit you want the body and details along with the latlng to beput into the db
    // const { marker } = this.state
    // marker.push([e.latlng.lat, e.latlng.lng])
    // this.setState({ marker })
    // API.createPoint({ marker })
    //     .then(response => response.push('/'))
    //     .catch(err => console.log(err))
    // }

    handleNewStop() {
        ;
    }

    return (
        <form>
            <label>New Stop {props.nick}</label>
            <br />
            <input type="text" name="location" placeHolder="Location" />
            <input type="text" name="details" placeholder="Details" />
            <br />
            <button type="button" onClick={this.handleNewStop}>Submit</button>
        </form>
    )
}

export default InputForm