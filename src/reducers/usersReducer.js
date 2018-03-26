import {
  FETCH_USERS,
  ACCEPTED_USERS,
  REJECTED_USERS,
  COUNT_ACCEPTED,
  COUNT_REJECTED,
} from '../actions/types';

const initialState = {
  items: [],
  accepted: [],
  rejected: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload,
      };
    case ACCEPTED_USERS:
      return {
        ...state,
        items: state.items.filter(user => user._id !== action.payload),
        accepted: [
          ...state.accepted,
          state.items.filter(user => user._id === action.payload)[0],
        ],
      };
    case REJECTED_USERS:
      return {
        ...state,
        items: state.items.filter(user => user._id !== action.payload),
        rejected: [
          ...state.rejected,
          state.items.filter(user => user._id === action.payload)[0],
        ],
      };

    case COUNT_ACCEPTED:
      return state.accepted.length;

    case COUNT_REJECTED:
      return state.rejected.length;

    default:
      return state;
  }
};
