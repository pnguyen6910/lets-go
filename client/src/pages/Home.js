import React, { Component } from 'react'
import Search from '../components/Search'
import './Home.css'
import L from 'leaflet'
import { TileLayer, Marker, Popup, MapContainer, GeoJSON } from 'react-leaflet'
import bikeRoutes from '../utils/Bikeroutes.json'
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
                        <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={false}>
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
                        </MapContainer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;