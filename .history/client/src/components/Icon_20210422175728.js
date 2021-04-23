import L from 'leaflet';

const Icon = new L.Icon({
    iconUrl: require('../img/icon.jpg'),
    iconRetinaUrl: require('../img/icon.jpg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export default Icon;