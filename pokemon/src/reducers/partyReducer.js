const initialState = { party: [] };

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PARTY_ADD":
      return { party: [...state.party, action.payload] };
    case "PARTY_REMOVE":
      return {
        party: state.party.filter((pokemon) => {
          return pokemon !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default partyReducer;
