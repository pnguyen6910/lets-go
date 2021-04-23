import React, { Component } from 'react';
import Axios from 'axios';
import API from '../utils/API'
import { DivOverlay } from 'leaflet';




class Card extends Component {
    state = {
        markers: [],
        lat: 41.875440756396515,
        lng: -87.62412071228027,
        marker: []
    }


    componentDidMount() {
        API.getPoints()
            .then(response => this.setState({ markers: response.data }))
    }

    render() {

        return (<div className="container-fluid">
            {this.state.markers.map(marker => {
                return (
                    <div>
                        <strong>{marker.location}</strong>
                        <h6>{marker.details}</h6>
                    </div>
                )
            })}
        </div>)
    }

}

export default Card;