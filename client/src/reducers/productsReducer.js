import initialState from "../store/initialState";

export default function reducer(state=initialState.products,action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}