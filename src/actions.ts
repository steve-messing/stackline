import { UnknownAction } from "@reduxjs/toolkit";
import { SalesData } from "./interfaces";

export const LOAD_SALES_DATA = 'LOAD_SALES_DATA';

export interface LoadSalesDataAction extends UnknownAction {
    type: typeof LOAD_SALES_DATA;
    payload: SalesData;
}

export type SalesActionTypes = LoadSalesDataAction;

export const loadSalesData = (salesData: SalesData): SalesActionTypes => ({
  type: LOAD_SALES_DATA,
  payload: salesData,
});