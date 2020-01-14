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
    default:
      return state;
  }
};

export default listsReducer;
