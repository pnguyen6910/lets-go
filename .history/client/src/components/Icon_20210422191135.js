import L from 'leaflet';

const Icon = new L.Icon({
    iconUrl: './img/bikeIcon.png',
    iconRetinaUrl: './img/bikeIcon.png',
    iconAnchor: null,
    popupAnchor: (15, 15),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: (25, 25),
    className: 'leaflet-div-icon'
});

export default Icon;