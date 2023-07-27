import React from 'react';
import './SearchAutocomplete.css';

const SearchAutocomplete = ({ features }) => {
  return (
    <ul className="autocomplete-container">
      {features.map((feature) => {
        return (
          <li key={feature.properties.place_id}>
            <button className="autocomplete-button">{feature.properties.formatted}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchAutocomplete;
