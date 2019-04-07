import initialState from "../store/initialState";

export default function reducer(state=initialState.orders,action) {
  switch (action.type) {
    case "FETCH_ORDERS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}