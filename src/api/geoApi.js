import axios from 'axios';

/*

https://api.geoapify.com/v1/geocode/search?text=Waldkirchen&lang=en&limit=5&type=city&filter=countrycode:de&bias=proximity:13.1934588,48.633274&apiKey=YOUR_API_KEY


`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&bias=proximity:lat,lon&apiKey=${apiKey}`;

*/
// export const apiGeoHeader = {};

const API_GEO = axios.create({
  baseURL: import.meta.env.VITE_API_GEO_URL,
  timeout: 2000
});

export default API_GEO;

// API_GEO.get(`?text=${encodeURIComponent(currentValue)}&limit=5&bias=proximity:lat,lon&apiKey=${import.meta.env.VITE_API_GEO_KEY}`)
