import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'node_modules/leaflet-geosearch/dist/geosearch.css';

const searchControl = new SearchControl({
    style: 'button',
    provider: new OpenStreetMapProvider(),
});

map.addControl(searchControl);

export default SearchControl