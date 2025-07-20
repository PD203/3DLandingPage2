import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight py-5">{title}</p>
        <p className="text-[#b7b8d0] text-sm font-normal leading-normal pb-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
