export const addedCount = (value) => {
  return {
    payload: value,
    type: "ADD_COUNT",
  };
};
