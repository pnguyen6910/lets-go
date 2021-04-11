import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import './App.css';
import L from 'leaflet'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet'



class App extends Component {
  state = {
    lat: 41.878113,
    lng: -87.629799,
    zoom: 13
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="container">
        <Navbar />
        <Search />
        <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
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
export default App;
