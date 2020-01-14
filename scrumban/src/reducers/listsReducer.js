import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 3;

const initState = [
  {
    title: "Todo",
    id: 0,
    cards: [
      {
        id: 0,
        text: "New Card"
      },
      {
        id: 1,
        text: "Another New Card"
      }
    ]
  },
  {
    title: "In Progess",
    id: 1,
    cards: [
      {
        id: 0,
        text: "New Card"
      },
      {
        id: 1,
        text: "Another New Card"
      },
      {
        id: 2,
        text: "Yet Another New Card"
      }
    ]
  }
];

const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
