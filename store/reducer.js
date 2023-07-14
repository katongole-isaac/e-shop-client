/**
 * Root reducer for redux store
 *
 */

const { createReducer, createAction } = require("@reduxjs/toolkit");

export const inc = createAction("inc");
export const dec = createAction("dec");

export default createReducer(
  { value: 0 },
  {
    inc: (state, action) => {
      state.value += 1;
    },
    dec: (state, action) => {
      state.value -= 1;
    },
  }
);
