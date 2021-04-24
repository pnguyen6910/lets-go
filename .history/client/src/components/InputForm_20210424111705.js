import React from 'react'
import API from '../utils/API'

const InputForm = () => {
    addMarker = (e) => {
        console.log(e)
        console.log(e.latlng.lat, e.latlng.lng)
        this.setState({
            marker: [...e.latlng, form],
            renderingInput: true
        })
        // const { marker } = this.state
        // marker.push([e.latlng.lat, e.latlng.lng])
        // this.setState({ marker })
        // API.createPoint({ marker })
        //     .then(response => response.push('/'))
        //     .catch(err => console.log(err))
    }

    return (
        <form onSubmit={addMarker}>
            <input type="text" placeHolder="Location"></input>
            <input type="text" placeHolder="Details"></input>
            {this.setState}
        </form>
    )
}

export default InputForm