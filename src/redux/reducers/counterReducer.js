import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      state.counter++
      return  state
    case actionTypes.DECREASE_COUNTER:
      return {...state, counter: state.counter - action.payload}
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return {...state, counter: state.counter + action.payload}
    default:
      return state;
  }
};

export default counterReducer;
