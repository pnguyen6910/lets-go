import React, { Component } from 'react'
import Search from '../components/Search'
import './Home.css'
import L from 'leaflet'
import { TileLayer, Marker, Popup, Map, GeoJSON } from 'react-leaflet'
import bikeRoutes from '../utils/Bikeroutes.json'
import Icon from '../components/Icon'
import "leaflet/dist/leaflet.css"

class Home extends Component {
    state = {
        lat: 41.878113,
        lng: -87.629799,
        zoom: 13
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-3">
                        <Search />
                    </div>
                    <div className="col-9">
                        <Map className="map" center={position} zoom={13} scrollWheelZoom={true}>

                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <GeoJSON data={bikeRoutes} />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </Map>
                    </div>
                </div>
                <img className="img-fluid" src="https://i.pinimg.com/236x/89/88/20/8988206fcd258e0c65be8e5dcf90b7fb--ride-a-bike-bike-rides.jpg" alt="logo" id="bike"></img>
            </div>
        )
    }
}

export default Home;