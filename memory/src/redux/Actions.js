export const OPEN_CARD = 'OPEN_CARD';
export const CHECK_CARDS = 'CHECK_CARDS';

export function openCard(index) {
  return {type: OPEN_CARD, index};
}

export function checkCards() {
  return {type: CHECK_CARDS};
}

