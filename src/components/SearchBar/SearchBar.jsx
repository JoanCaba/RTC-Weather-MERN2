import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import SearchAutocomplete from './SearchAutocomplete/SearchAutocomplete';
import API_GEO from '../../api/geoApi';

const SearchBar = () => {
  const response = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          datasource: {
            sourcename: 'openstreetmap',
            attribution: '© OpenStreetMap contributors',
            license: 'Open Database License',
            url: 'https://www.openstreetmap.org/copyright'
          },
          country: 'France',
          country_code: 'fr',
          region: 'Metropolitan France',
          state: 'Normandy',
          county: 'Eure',
          city: 'Barc',
          municipality: 'Bernay',
          postcode: '27170',
          lon: 0.8182989,
          lat: 49.0701807,
          state_code: 'NOR',
          state_COG: '28',
          formatted: '27170 Barc, France',
          address_line1: '27170 Barc',
          address_line2: 'France',
          department_COG: '27',
          category: 'administrative',
          timezone: {
            name: 'Europe/Paris',
            offset_STD: '+01:00',
            offset_STD_seconds: 3600,
            offset_DST: '+02:00',
            offset_DST_seconds: 7200,
            abbreviation_STD: 'CET',
            abbreviation_DST: 'CEST'
          },
          plus_code: '8FX23RC9+38',
          result_type: 'postcode',
          rank: {
            importance: 0.548166057069124,
            confidence: 1,
            confidence_city_level: 1,
            match_type: 'full_match'
          },
          place_id: '51ee49bb2c812fea3f59bba761aefb884840f00101f9018065080000000000c00207'
        },
        geometry: {
          type: 'Point',
          coordinates: [0.8182989, 49.0701807]
        },
        bbox: [0.791502, 49.0615499, 0.8576392, 49.0966947]
      },
      {
        type: 'Feature',
        properties: {
          datasource: {
            sourcename: 'openstreetmap',
            attribution: '© OpenStreetMap contributors',
            license: 'Open Database License',
            url: 'https://www.openstreetmap.org/copyright'
          },
          country: 'Spain',
          country_code: 'es',
          state: 'Catalonia',
          county: 'Barcelona',
          lon: 2.031182036159852,
          lat: 41.75786995,
          formatted: 'Barcelona, Catalonia, Spain',
          address_line1: 'Barcelona',
          address_line2: 'Catalonia, Spain',
          county_code: 'B',
          category: 'administrative',
          timezone: {
            name: 'Europe/Madrid',
            offset_STD: '+01:00',
            offset_STD_seconds: 3600,
            offset_DST: '+02:00',
            offset_DST_seconds: 7200,
            abbreviation_STD: 'CET',
            abbreviation_DST: 'CEST'
          },
          plus_code: '8FH4Q25J+4F',
          result_type: 'county',
          rank: {
            importance: 0.5986238583753987,
            confidence: 1,
            match_type: 'full_match'
          },
          place_id: '51e93b0c5edc3f00405982efece101e14440f00101f9016b53050000000000c00209'
        },
        geometry: {
          type: 'Point',
          coordinates: [2.031182036159852, 41.75786995]
        },
        bbox: [1.3603839, 41.1927078, 2.7780029, 42.3233011]
      },
      {
        type: 'Feature',
        properties: {
          datasource: {
            sourcename: 'openstreetmap',
            attribution: '© OpenStreetMap contributors',
            license: 'Open Database License',
            url: 'https://www.openstreetmap.org/copyright'
          },
          country: 'Spain',
          country_code: 'es',
          state: 'Catalonia',
          state_district: 'Barcelona',
          county: 'Barcelonès',
          lon: 2.1630637715443863,
          lat: 41.406467250000006,
          formatted: 'Barcelonès, Catalonia, Spain',
          address_line1: 'Barcelonès',
          address_line2: 'Catalonia, Spain',
          county_code: 'B',
          category: 'administrative',
          timezone: {
            name: 'Europe/Madrid',
            offset_STD: '+01:00',
            offset_STD_seconds: 3600,
            offset_DST: '+02:00',
            offset_DST_seconds: 7200,
            abbreviation_STD: 'CET',
            abbreviation_DST: 'CEST'
          },
          plus_code: '8FH4C547+H6',
          result_type: 'county',
          rank: {
            importance: 0.5128841688372918,
            confidence: 1,
            match_type: 'full_match'
          },
          place_id: '517f90ef60f44d01405992d26c1e07b44440f00101f901e1e4240000000000c00209'
        },
        geometry: {
          type: 'Point',
          coordinates: [2.1630637715443863, 41.406467250000006]
        },
        bbox: [2.0524977, 41.3170353, 2.2700263, 41.4929167]
      },
      {
        type: 'Feature',
        properties: {
          datasource: {
            sourcename: 'openstreetmap',
            attribution: '© OpenStreetMap contributors',
            license: 'Open Database License',
            url: 'https://www.openstreetmap.org/copyright'
          },
          country: 'Spain',
          country_code: 'es',
          state: 'Castile and León',
          county: 'Salamanca',
          city: 'Barceo',
          lon: -6.452043,
          lat: 41.0612538,
          formatted: 'Barceo, Castile and León, Spain',
          address_line1: 'Barceo',
          address_line2: 'Castile and León, Spain',
          county_code: 'SA',
          category: 'administrative',
          timezone: {
            name: 'Europe/Madrid',
            offset_STD: '+01:00',
            offset_STD_seconds: 3600,
            offset_DST: '+02:00',
            offset_DST_seconds: 7200,
            abbreviation_STD: 'CET',
            abbreviation_DST: 'CEST'
          },
          plus_code: '8CHM3G6X+G5',
          plus_code_short: '+G5 Barceo, Salamanca, Spain',
          result_type: 'city',
          rank: {
            importance: 0.5138655498517343,
            confidence: 1,
            confidence_city_level: 1,
            match_type: 'full_match'
          },
          place_id: '51fc8a355ce4ce19c059bce01d2ad7874440f00101f901d234050000000000c00208'
        },
        geometry: {
          type: 'Point',
          coordinates: [-6.452043, 41.0612538]
        },
        bbox: [-6.4883297, 41.0388157, -6.4108922, 41.0935083]
      },
      {
        type: 'Feature',
        properties: {
          datasource: {
            sourcename: 'openstreetmap',
            attribution: '© OpenStreetMap contributors',
            license: 'Open Database License',
            url: 'https://www.openstreetmap.org/copyright'
          },
          country: 'Spain',
          country_code: 'es',
          state: 'Catalonia',
          state_district: 'Barcelona',
          county: 'Barcelonès',
          city: 'Barcelona',
          postcode: '08001',
          lon: 2.1774322,
          lat: 41.3828939,
          formatted: '08001 Barcelona, Spain',
          address_line1: '08001 Barcelona',
          address_line2: 'Spain',
          county_code: 'B',
          category: 'administrative',
          timezone: {
            name: 'Europe/Madrid',
            offset_STD: '+01:00',
            offset_STD_seconds: 3600,
            offset_DST: '+02:00',
            offset_DST_seconds: 7200,
            abbreviation_STD: 'CET',
            abbreviation_DST: 'CEST'
          },
          plus_code: '8FH495MG+5X',
          plus_code_short: '95MG+5X Barcelona, Barcelonès, Spain',
          result_type: 'postcode',
          rank: {
            importance: 0.7435649969503182,
            confidence: 1,
            confidence_city_level: 1,
            match_type: 'full_match'
          },
          place_id: '51040fc292616b014059402bd5aa02b14440f00101f9012e4f050000000000c00207'
        },
        geometry: {
          type: 'Point',
          coordinates: [2.1774322, 41.3828939]
        },
        bbox: [2.0524977, 41.3170353, 2.2283555, 41.4679135]
      }
    ],
    query: {
      text: 'barc',
      parsed: {
        city: 'barc',
        expected_type: 'unknown'
      }
    }
  }; // response mockup

  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState();

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchValue.length >= 3) {
        console.log('API CALL');
        // API_GEO.get(
        //   `?text=${encodeURIComponent(searchValue)}&limit=5&type=city&apiKey=${
        //     import.meta.env.VITE_API_GEO_KEY
        //   }`
        // ).then((response) => {
        //   console.log(response.data);
        // });
        setSuggestions(response.features); // response.data.features
      } else {
        setSuggestions('');
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [searchValue]);
  return (
    <div className="search-bar suggestions-open">
      <input
        value={searchValue}
        placeholder="Search location"
        type="text"
        onChange={(e) => handleSearchInput(e)}
      />
      {suggestions && <SearchAutocomplete features={suggestions} />}
    </div>
  );
};

export default SearchBar;
