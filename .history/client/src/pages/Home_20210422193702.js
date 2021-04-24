import React, { Component, useEffect, useRef } from 'react'
import Search from '../components/Search'
import './Home.css'
import { TileLayer, Marker, Popup, Map, GeoJSON } from 'react-leaflet'
import bikeRoutes from '../utils/Bikeroutes.json'
import "leaflet/dist/leaflet.css"
import API from '../utils/API'
import L from 'leaflet';
// import icon from './icon.jpg';
import Icon from '../components/Icon'

class Home extends Component {
    state = {
        markers: [],
        lat: 41.875440756396515,
        lng: -87.62412071228027,
        marker: []
    }

    useEffect({
        map.locate({
            setView: true
        })
    }, [])

// addMarker = (e) => {
//     console.log(e)
//     const { marker } = this.state
//     marker.push([e.latlng.lat, e.latlng.lng])
//     this.setState({ marker })
//     API.createPoint({ marker })
//         .then(response => history.push('/'))
//         .catch(err => console.log(err))
// }
// for geolocation in map
// useEffect(() {
//     const { current = {} } = mapRef
//     const { leafletElement: map } = current



componentDidMount() {
    API.getPoints()
        .then(response => this.setState({ markers: response.data }))
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
                    <Map
                        className="map"
                        center={position}
                        zoom={13}
                        scrollWheelZoom={true}
                    // onClick={this.addMarker}
                    >

                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <GeoJSON data={bikeRoutes} />
                        {this.state.markers.map(marker => {
                            return (
                                <Marker
                                    position={[marker.position.lat.$numberDecimal, marker.position.lng.$numberDecimal]}
                                    icon={Icon}
                                >
                                    <Popup>
                                        <h6>{marker.location}</h6>
                                        {marker.details}
                                    </Popup>
                                </Marker>
                            )
                        })}
                    </Map>
                </div>
            </div>
        </div>
    )
}
}

export default Home;