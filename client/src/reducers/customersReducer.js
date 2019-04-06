import initialState from "../store/initialState";

export default function reducer(state=initialState.customers,action) {
  switch (action.type) {
    case "FETCH_CUSTOMERS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}