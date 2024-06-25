import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";
import salesReducer, { SalesState } from "./reducers/salesReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    sales: salesReducer as Reducer<SalesState, UnknownAction>,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;