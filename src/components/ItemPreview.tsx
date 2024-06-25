import React from "react";
import { SalesData } from "../interfaces";

interface ItemPreviewProps {
  data: SalesData;
}

export const ItemPreview: React.FC<ItemPreviewProps> = ({ data }) => {
  return (
    <div className="itemPreview box">
      <img src={data.image} alt={data.title} width="250px"></img>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
