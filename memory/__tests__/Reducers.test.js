import {createStore} from 'redux';
import {EMPTY_CARD, reducers, initOpenedCardsState} from '../src/redux/Reducers';
import {openCard, checkCards} from '../src/redux/Actions';
import {backward, getCardImageById} from '../Images';

describe('reducer tests', () => {
  let store;

  beforeEach(() => {
    store = createStore(reducers);
  });

  test('test that on start all cards are closed', () => {
    let cards = cardsState();
    for (let i = 0; i < cards.length; i++) {
      expect(cards[i].image).toBe(backward);
    }
  });

  test('test that on start no cards are selected ', () => {
    let openedCards = openedCardsState();

    expect(openedCards.firstCardId === EMPTY_CARD);
    expect(openedCards.secondCardId === EMPTY_CARD);
  });

  test('test open first card ', () => {
    const cardToOpenId = 1;

    openCardWithId(cardToOpenId);

    expect(openedCardsState().firstCardId).toBe(cardToOpenId);
    expectCardIsOpen(findCardById(cardToOpenId));
  });

  test('test open second card with same image remain open', () => {
    const firstCard = findCardById(1);
    openCardWithId(firstCard.id);
    let secondCard = findCardWithSameImageId(firstCard);

    openCardWithId(secondCard.id);

    expect(openedCardsState().firstCardId).toBe(firstCard.id);
    expect(openedCardsState().secondCardId).toBe(secondCard.id);

    checkCardsAreEqual();

    expectCardIsOpen(findCardById(firstCard.id));
    expectCardIsOpen(findCardById(secondCard.id));
  });

  test('test open second card with different image are closed', () => {
    const firstCard = findCardById(1);
    openCardWithId(firstCard.id);
    let secondCard = findCardWithSameImageId(firstCard);

    openCardWithId(secondCard.id);

    expect(openedCardsState().firstCardId).toBe(firstCard.id);
    expect(openedCardsState().secondCardId).toBe(secondCard.id);

    checkCardsAreEqual();

    expect(openedCardsState()).toBe(initOpenedCardsState);
    expectCardIsOpen(findCardById(firstCard.id));
    expectCardIsOpen(findCardById(secondCard.id));
  });

  function checkCardsAreEqual(){
    store.dispatch(checkCards());
  }

  function expectCardIsOpen(card){
    expect(card.image).toBe(getCardImageById(card.imageId));
  }

  function findCardWithSameImageId(card) {
    return cardsState().find((c) => {
      return c.imageId === card.imageId && c.id !== card.id;
    });
  }

  function findCardById(id) {
    return cardsState()[id];
  }

  function openCardWithId(id) {
    store.dispatch(openCard(id));
  }

  function cardsState() {
    return store.getState().gameState.cards;
  }

  function openedCardsState() {
    return store.getState().gameState.openedCards;
  }
});

