import { Reducer } from "redux";
import { LOAD_SALES_DATA, SalesActionTypes } from "../actions";
import { SalesData } from "../interfaces";

export interface SalesState {
  salesData: SalesData | null;
}

const initialState: SalesState = {
  salesData: null,
};

const salesReducer: Reducer<SalesState, SalesActionTypes> = (state = initialState, action: SalesActionTypes): SalesState => {
  switch (action.type) {
    case LOAD_SALES_DATA:
      return {
        ...state,
        salesData: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;