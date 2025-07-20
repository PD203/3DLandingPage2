import React from 'react';

const EventItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-4 bg-[#101023]  px-4 min-h-[72px] py-5">
    <div className="text-white flex items-center justify-center rounded-lg bg-[#21224a] shrink-0 size-12 text-xl">
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-white text-base font-medium leading-normal line-clamp-1">{title}</p>
      <p className="text-[#b7b8d0] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
    </div>
  </div>
);

export default EventItem;
