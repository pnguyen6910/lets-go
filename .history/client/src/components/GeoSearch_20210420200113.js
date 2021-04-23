import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
const searchControl = new SearchControl({
    style: 'button',
    provider: new OpenStreetMapProvider(),
});
map.addControl(searchControl);