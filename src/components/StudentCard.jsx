import React from "react";

const StudentCard = ({ image, title, description }) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
      style={{ backgroundImage: `url('${image}')` }}
    ></div>
    <div>
      <p className="text-white text-base font-medium leading-normal">{title}</p>
      <p className="text-[#b7b8d0] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
);

export default StudentCard;
