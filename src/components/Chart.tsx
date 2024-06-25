import React from "react";
import { WeeklySales } from "../interfaces";

interface ChartProps {
    data: WeeklySales[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="chart box">
            <h2>Sales Data Chart</h2>
            <div className="chart-container">
            </div>
        </div>
    );
}