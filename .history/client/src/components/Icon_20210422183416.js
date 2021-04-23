import L from 'leaflet';

const Icon = new L.Icon({
    iconUrl: './img/icon.jpg',
    iconRetinaUrl: './img/icon.jpg',
    iconAnchor: null,
    popupAnchor: (0, -10),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: (25, 25),
    className: 'leaflet-div-icon'
});

export default Icon;