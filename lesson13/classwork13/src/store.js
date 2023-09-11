import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counerSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
