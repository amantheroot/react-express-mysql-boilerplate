import initialState from "../store/initialState";

export default function reducer(state=initialState.products,action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}