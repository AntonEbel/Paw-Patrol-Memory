export const cardImages = {
  chase: require('./img/Chase.png'),
  everest: require('./img/Everest.png'),
  marshall: require('./img/Marshall.png'),
  rocky: require('./img/Rocky.png'),
  rubble: require('./img/Rubble.png'),
  ryder: require('./img/Ryder.png'),
  skye: require('./img/Skye.png'),
  zuma: require('./img/Zuma.png')
};

export const images = [
  require('./img/Chase.png'),
  require('./img/Everest.png'),
  require('./img/Marshall.png'),
  require('./img/Rocky.png'),
  require('./img/Rubble.png'),
  require('./img/Ryder.png'),
  require('./img/Skye.png'),
  require('./img/Zuma.png')
];

export function getCardImageById(id){
  return cardImages[id];
}

export const backward = require('./img/Backward.png');

export const cardImageIds = [
  'chase',
  'everest',
  'marshall',
  'rocky',
  'rubble',
  'ryder',
  'skye',
  'zuma',
];