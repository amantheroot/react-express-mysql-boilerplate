import initialState from "../store/initialState";

export default function reducer(state=initialState,action) {
  switch (action.type) {
    case "INCREMENT": {
      return {state: state.state+1};
    }
    
    default: {
      return state;
    }
  }
}