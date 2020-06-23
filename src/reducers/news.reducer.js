const initialState = {
  newsList: null,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOP_NEWS":
      return {
        ...state,
        newsList: action.payload,
      };

    default:
      return state;
  }
};

export default news;
