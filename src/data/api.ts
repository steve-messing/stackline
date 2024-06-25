import { createAsyncThunk } from "@reduxjs/toolkit";
import { SalesData } from "../interfaces";
import { mockData } from "./mockData";

export const fetchSalesData = (): Promise<SalesData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[0]);
    }, 1000);
  });
};

export const fetchSalesDataThunk = createAsyncThunk<SalesData>(
  "sales/fetchSalesData",
  async () => {
    const data = await fetchSalesData();
    return data;
  }
);
