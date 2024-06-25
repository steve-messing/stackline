import { Reducer } from "redux";
import { SalesActionTypes } from "../actions";
import { SalesData } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { fetchSalesDataThunk } from "../data/api";

export interface SalesState {
  salesData: SalesData | null;
  loading: boolean;
  error: string | null;
}

const initialState: SalesState = {
  salesData: null,
  loading: false,
  error: null,
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSalesDataThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSalesDataThunk.fulfilled, (state, action) => {
          state.salesData = action.payload;
          state.loading = false;
        })
        .addCase(fetchSalesDataThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load sales data';
        });
    },
  });

export default salesSlice.reducer as Reducer<SalesState, SalesActionTypes>;