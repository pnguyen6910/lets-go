import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Home from './pages/Home'
import About from './pages/About'
import './App.css';
import L from 'leaflet'
import { TileLayer, Marker, Popup, MapContainer, Polygon, GeoJSON } from 'react-leaflet'
import bikeRoutes from './utils/Bikeroutes.json'





// var myIcon = L.icon({
//   iconUrl: '',
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// })

class App extends Component {
  state = {
    lat: 41.878113,
    lng: -87.629799,
    zoom: 13
  }

  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  //       iconUrl: require('leaflet/dist/images/marker-icon.png'),
  //         shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  //   })
  // L.shapefile = L.GeoJSON.extend({
  //   options: {
  //     importUrl: ''
  //   }
  // })

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="container">
        <Navbar />
        <Search />
        <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={true}>
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
        </MapContainer>,
      </div>
    );
  }
}


export default App