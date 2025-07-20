import React from "react";
import StudentCard from "./StudentCard";

const GridCardSection = ({ items }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
    {items.map(({ title, description, image }, idx) => (
      <StudentCard key={idx} title={title} description={description} image={image} />
    ))}
  </div>
);

export default GridCardSection;
