import { FETCH_BARS, ADD_VISITOR } from '../actions/types.js';

export default function getBarsReducer(state = [], action) {

  switch (action.type) {
    case FETCH_BARS:
      return state = action.payload;
    case ADD_VISITOR:
      return state.map((bar) => {
        if (bar._id !== action.payload._id) {
          return bar;
        } else {
          return Object.assign({}, action.payload);
        }
      });
    default:
      return state;
  }
}
