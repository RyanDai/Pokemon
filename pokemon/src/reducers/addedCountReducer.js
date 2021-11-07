const initialState = { counts: {} };

const addedCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      const found = state.counts[action.payload] !== undefined;
      if (found) {
        return {
          counts: {
            ...state.counts,
            [action.payload]: state.counts[action.payload] + 1,
          },
        };
      }
      return { counts: { ...state.counts, [action.payload]: 1 } };

    default:
      return state;
  }
};

export default addedCountReducer;
