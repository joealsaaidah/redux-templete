export const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case "withdraw":
      return state - action.payload;
    case "deposit":
      return state + action.payload;
    default:
      return state;
  }
};
