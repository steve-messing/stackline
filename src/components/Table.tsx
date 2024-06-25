import React from "react";
import { WeeklySales } from "../interfaces";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { sortSalesData } from "../reducers/salesReducer";

interface TableProps {
  data: WeeklySales[];
}

const HEADERS = [
  "Week Ending",
  "Retail Sales",
  "Wholesale Sales",
  "Units Sold",
  "Retailer Margin",
];

export const Table: React.FC<TableProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const sortColumn = useSelector((state: RootState) => state.sales.sortColumn);
  const sortDirection = useSelector(
    (state: RootState) => state.sales.sortDirection
  );

  const handleSort = (header: string) => {
    dispatch(sortSalesData(header));
  };

  const renderTableHeader = () => {
    return (
      <tr>
        {HEADERS.map((header, index) => (
          <th key={index} onClick={() => handleSort(header)}>
            {header.toUpperCase() +
              (sortColumn === header
                ? sortDirection === "asc"
                  ? " ↑"
                  : " ↓"
                : "")}
          </th>
        ))}
      </tr>
    );
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  const renderTableBody = () => {
    return data.map((sale, index) => (
      <tr key={index}>
        <td>{sale.weekEnding}</td>
        <td>{formatCurrency(sale.retailSales)}</td>
        <td>{formatCurrency(sale.wholesaleSales)}</td>
        <td>{sale.unitsSold}</td>
        <td>{formatCurrency(sale.retailerMargin)}</td>
      </tr>
    ));
  };

  return (
    <div className="table box">
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};
