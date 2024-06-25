import { Reducer } from "redux";
import { SalesActionTypes } from "../actions";
import { SalesData, WeeklySales } from "../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSalesDataThunk } from "../data/api";

export interface SalesState {
  salesData: SalesData | null;
  loading: boolean;
  error: string | null;
  sortColumn?: string;
  sortDirection?: "asc" | "desc";
}

const initialState: SalesState = {
  salesData: null,
  loading: false,
  error: null,
  sortColumn: "Week Ending",
  sortDirection: "asc",  
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    sortSalesData(state, action: PayloadAction<string>) {
      const column = action.payload;
      console.log("sorting by", column);
      if (state.sortColumn === column) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortColumn = column;
        state.sortDirection = "asc";
      }
      if (state.salesData) {
        state.salesData.sales.sort((a: WeeklySales, b: WeeklySales) => {
          if (state.sortDirection === "asc") {
            switch (column) {
              case "Week Ending":
                return new Date(a.weekEnding).getTime() - new Date(b.weekEnding).getTime();
              case "Retail Sales":
                return a.retailSales - b.retailSales;
              case "Wholesale Sales":
                return a.wholesaleSales - b.wholesaleSales;
              case "Units Sold":
                return a.unitsSold - b.unitsSold;
              case "Retailer Margin":
                return a.retailerMargin - b.retailerMargin;
              default: 
                return 0;
            }
          } else {
            switch (column) {
              case "Week Ending":
                return new Date(b.weekEnding).getTime() - new Date(a.weekEnding).getTime();
              case "Retail Sales":
                return b.retailSales - a.retailSales;
              case "Wholesale Sales":
                return b.wholesaleSales - a.wholesaleSales;
              case "Units Sold":
                return b.unitsSold - a.unitsSold;
              case "Retailer Margin":
                return b.retailerMargin - a.retailerMargin;
              default:
                return 0;
            }
          }
        });
      }
    },
  },
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
        state.error = action.error.message || "Failed to load sales data";
      });
  },
});

export const { sortSalesData } = salesSlice.actions;
export default salesSlice.reducer as Reducer<SalesState, SalesActionTypes>;
