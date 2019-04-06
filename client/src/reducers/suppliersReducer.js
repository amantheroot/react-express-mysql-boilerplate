import initialState from "../store/initialState";

export default function reducer(state=initialState.suppliers,action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}