import React from 'react';
import './Header.css';
import ChangeViewButtons from '../ChangeViewButtons/ChangeViewButtons';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <header>
      <ChangeViewButtons />
      <SearchBar />
    </header>
  );
};

export default Header;
