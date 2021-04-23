import L from 'leaflet';

const Icon = new L.Icon({
    iconUrl: require('./pin-icon.png'),
    iconRetinaUrl: require('./pin-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 60),
    className: 'leaflet-div-icon'
});

export default Icon