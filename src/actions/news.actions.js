import Axios from "axios";

export const newsActions = {
  getTopNews: (country_code) => (dispatch) => {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country_code}&apiKey=5ebb5a6ed1b2437193a5613470f91932`
    )
      .then((response) => {
        console.log(response);
        dispatch({ type: "GET_TOP_NEWS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getSources: () => {},
};
