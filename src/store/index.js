import { configureStore } from "@reduxjs/toolkit";

import diarySlice from "./diary-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { diary: diarySlice.reducer, ui: uiSlice.reducer },
});

export default store;
