import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
  name: "diary",
  initialState: {
    diaryList: [],
    diaryItem: {
      date: "",
      title: "",
      content: "",
    },
  },
  reducers: {
    addEntry(state, action) {
      state.diaryList = [action.payload, ...state.diaryList];
    },
    updateEntry(state, action) {
      state.diaryList = state.diaryList.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    deleteEntry(state, action) {
      state.diaryList = state.diaryList.filter((el) => el.id != action.payload);
    },
    getEntry(state, action) {
      state.diaryItem = state.diaryList.find((el) => el.id === action.payload);
    },
    clearEntry(state) {
      state.diaryItem = {
        date: "",
        title: "",
        content: "",
      };
    },
  },
});

export const diaryActions = diarySlice.actions;
export default diarySlice;
