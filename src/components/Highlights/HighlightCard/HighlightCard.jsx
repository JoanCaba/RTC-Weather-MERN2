import React from 'react';
import './HighlightCard.css';
import HighlightLargeCard from './HighlightLargeCard/HighlightLargeCard';
import HighlightSmallCard from './HighlightSmallCard/HighlightSmallCard';

const CardTypes = {
  humidity: {
    title: 'Humidity',
    symbol: '%',
    iconSrc: './src/assets/water-drop.png',
    description: 'The dew point is 18.26',
    mainValue: '65',
    information: []
  },
  visibility: {
    title: 'Visibility',
    symbol: 'Km',
    iconSrc: './src/assets/water-drop.png',
    description: 'Haze affecting visibility',
    mainValue: '03',
    information: []
  },
  wind: {
    title: 'Wind status',
    symbol: 'º',
    iconSrc: '',
    description: 'The Wind point is 18.26',
    information: []
  }
};

const HighlightCard = ({ cardType, size }) => {
  return size === 'large' ? (
    <HighlightLargeCard cardType={CardTypes[cardType]} />
  ) : (
    <HighlightSmallCard cardType={CardTypes[cardType]} />
  );
};

export default HighlightCard;
