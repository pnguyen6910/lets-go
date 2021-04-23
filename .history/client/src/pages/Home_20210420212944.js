import React, { Component } from 'react'
import Search from '../components/Search'
import './Home.css'
import L from 'leaflet'
import { TileLayer, Marker, Popup, Map, GeoJSON } from 'react-leaflet'
import bikeRoutes from '../utils/Bikeroutes.json'
import Icon from '../components/Icon'
import "leaflet/dist/leaflet.css"
import API from '../utils/API'

class Home extends Component {
    state = {
        markers: [],
        lat: 41.875440756396515,
        lng: -87.62412071228027,
        marker: []
    }

    addMarker = (e) => {
        console.log(e)
        const { marker } = this.state
        marker.push([e.latlng.lat, e.latlng.lng])
        this.setState({ marker })
        API.createPoint({ marker })
            .then(response => history.push('/'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const { current = {} } = mapRef
        const { leafletElement: map } = current

        map.locate({
            setView: true
        })
    }, [])

function handleOnLocationFound(e) {
    const latlng = e.latlng
    const radius = e.accuracy
    const circle = L.circle(latlng, radius)
    const { current = {} } = mapRef
    const { leafletElement: map } = current
    circle.addTo(map)
}

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
                        onClick={this.addMarker}
                    >

                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <GeoJSON data={bikeRoutes} />
                        {this.state.markers.map(marker => {
                            return (
                                <Marker position={[marker.position.lat.$numberDecimal, marker.position.lng.$numberDecimal]}>
                                    <Popup>
                                        <div dangerouslySetInnerHTML={{
                                            __html: marker.popup
                                        }} />
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


export default Home;