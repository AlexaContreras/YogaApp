import { types } from '../types/types';

const initialState = {
  entry: [],
};

export const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newEntry:
      return {
        ...state,
        entry: [action.payload, ...state.entry],
      };

    default:
      return state;
  }
};
