import initialState from "../store/initialState";

export default function reducer(state=initialState.stocks,action) {
  switch (action.type) {
    case "FETCH_STOCKS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}