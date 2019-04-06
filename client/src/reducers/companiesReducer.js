import initialState from "../store/initialState";

export default function reducer(state=initialState.companies,action) {
  switch (action.type) {
    case "FETCH_COMPANIES": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}