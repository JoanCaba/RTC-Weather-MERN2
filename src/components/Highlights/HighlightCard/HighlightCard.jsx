import React from 'react';
import './HighlightCard.css';
import HighlightLargeCard from './HighlightLargeCard/HighlightLargeCard';
import HighlightSmallCard from './HighlightSmallCard/HighlightSmallCard';
import WindWheel from '../../WindWheel/WindWheel';

const CardTypes = {
  humidity: {
    title: 'Humidity',
    symbol: '%',
    iconSrc: './src/assets/water-drop.png',
    description: 'The dew point is 18.26',
    mainValue: '65',
    extraInfo: [
      { title: '1', value: '', symbol: '' },
      { title: '2', value: '', symbol: '' }
    ]
  },
  visibility: {
    title: 'Visibility',
    symbol: 'Km',
    iconSrc: './src/assets/visibility.png',
    description: 'Haze affecting visibility',
    mainValue: '03',
    extraInfo: [{ title: 'Visibility', value: '03', symbol: 'Km' }]
  },
  wind: {
    title: 'Wind status',
    symbol: 'º',
    iconSrc: './src/assets/wind.png',
    description: 'The Wind point is 18.26',
    mainValue: '330',
    extraValue: 'WNW',
    extraInfo: [
      { title: 'Wind', value: '3.8', symbol: 'm/s' },
      { title: 'Gust', value: '12.3', symbol: 'm/s' }
    ],
    decoration: <WindWheel rotationDegrees="330" />
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
