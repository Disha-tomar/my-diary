import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
  name: "diary",
  initialState: {
    diaryList: [],
    diaryItem: {
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
  },
});

export const diaryActions = diarySlice.actions;
export default diarySlice;
