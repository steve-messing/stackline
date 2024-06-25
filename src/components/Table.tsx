import React from "react";
import { WeeklySales } from "../interfaces";

interface TableProps {
    data: WeeklySales[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="table box">
            <h2>Sales Data Table</h2>
            <div id="salesTable">
            </div>
        </div>
    );
}