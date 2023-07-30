import React from 'react';
import './SearchAutocomplete.css';

const SearchAutocomplete = ({ features, setSearchValue }) => {
  const handleSuggestionButton = (e) => {
    console.log(e.target.getAttribute('data-cord'));
    setSearchValue('');
  };
  return (
    <ul className="autocomplete-container">
      {features.map((feature) => {
        return (
          <li key={feature.properties.place_id}>
            <button
              type="button"
              className="autocomplete-button"
              data-cord={`${feature.properties.lon}, ${feature.properties.lat}`}
              onClick={(e) => handleSuggestionButton(e)}
            >
              {feature.properties.formatted}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchAutocomplete;
