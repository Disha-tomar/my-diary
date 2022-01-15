import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { homePage: true, form: false, entries: false },
  reducers: {
    showHomePage(state) {
      state.homePage = true;
      state.form = false;
      state.entries = false;
    },
    showForm(state) {
      state.homePage = false;
      state.form = true;
      state.entries = false;
    },
    showEntries(state) {
      state.homePage = false;
      state.form = false;
      state.entries = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
