import React from 'react'
import API from '../utils/API'

const InputForm = () => {
    addMarker = (e) => {
        console.log(e)
        console.log(e.latlng.lat, e.latlng.lng)
        this.setState({
            marker: [e.latlng.lat, e.latlng.lng],
            renderingInput: true
        })
        // const { marker } = this.state
        // marker.push([e.latlng.lat, e.latlng.lng])
        // this.setState({ marker })
        // API.createPoint({ marker })
        //     .then(response => response.push('/'))
        //     .catch(err => console.log(err))
    }

    render() {
        return (
            <form>
                <input type="text" placeHolder="Location"></input>
                <input type="text" placeHolder="Details"></input>
            </form>
        )
    }
}

export default InputForm