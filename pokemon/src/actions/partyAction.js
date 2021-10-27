export const partyAdd = (value) => {
  return {
    payload: value,
    type: "PARTY_ADD",
  };
};

export const partyRemove = (value) => {
  return {
    payload: value,
    type: "PARTY_REMOVE",
  };
};
