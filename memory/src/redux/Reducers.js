import {backward, cardImageIds, getCardImageById} from '../../Images';
import shuffle from 'lodash.shuffle';
import {combineReducers} from 'redux';
import {OPEN_CARD, CHECK_CARDS} from './Actions';

const imageIds = shuffle(cardImageIds.concat(cardImageIds));

const initCardState = imageIds.map((imageId, index) => (
  {
    id: index,
    image: backward,
    imageId: imageId,
  }
));

export const EMPTY_CARD = '';

export const initOpenedCardsState = {
  firstCardId: EMPTY_CARD,
  secondCardId: EMPTY_CARD,
};

const initialState = {
  cards: initCardState,
  openedCards: initOpenedCardsState,
  checkRunning: false,
};

function isFirstCardNotOpen(state) {
  return state.openedCards.firstCardId === EMPTY_CARD;
}

function areTwoCardsOpen(state) {
  return state.openedCards.firstCardId !== EMPTY_CARD && state.openedCards.secondCardId !== EMPTY_CARD;
}

function replaceCard(cards, newCard) {
  return cards.map((card, index) => {
    if (index === newCard.id) {
      return newCard;
    } else {
      return card;
    }
  });
}

function openCard(card) {
  return Object.assign({}, card, {
    image: getCardImageById(card.imageId)
  });
}

function closeCard(card) {
  return Object.assign({}, card, {
    image: backward
  });
}

function calculateState(state, action) {
  if (areTwoCardsOpen(state)) {
    return state;
  }
  let cards = state.cards;
  let openedCards = state.openedCards;
  if (isFirstCardNotOpen(state)) {
    cards = replaceCard(cards, openCard(cards[action.index]));
    openedCards = Object.assign({}, openedCards, {firstCardId: action.index});
  } else {
    cards = replaceCard(cards, openCard(cards[action.index]));
    openedCards = Object.assign({}, openedCards, {secondCardId: action.index});
  }

  return {cards: cards, openedCards: openedCards};
}

function checkCards(state) {
  let cards = state.cards;
  let openedCards = state.openedCards;
  if (areTwoCardsOpen(state)) {
    let card1 = state.cards[state.openedCards.firstCardId];
    let card2 = state.cards[state.openedCards.secondCardId];
    if (card1.imageId !== card2.imageId) {
      cards = replaceCard(cards, closeCard(card1));
      cards = replaceCard(cards, closeCard(card2));
    }
    openedCards = initOpenedCardsState;
  }
  return {cards: cards, openedCards: openedCards};
}

function gameState(state = initialState, action) {
  switch (action.type) {
    case OPEN_CARD:
      return calculateState(state, action);
    case CHECK_CARDS:
      return checkCards(state);
    default:
      return state;
  }
}

export const reducers = combineReducers({
  gameState: gameState
});