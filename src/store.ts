import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";
import salesReducer, { SalesState } from "./reducers/salesReducer";

const store = configureStore({
  reducer: {
    sales: salesReducer as Reducer<SalesState, UnknownAction>,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;