import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";

// local storage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

// ********
import diarySlice from "./diary-slice";
import uiSlice from "./ui-slice";

// *******
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  diary: diarySlice.reducer,
  ui: uiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// *********
// const store = configureStore({
//   reducer: { diary: diarySlice.reducer, ui: uiSlice.reducer },
// });

export const persistor = persistStore(store);
export default store;
