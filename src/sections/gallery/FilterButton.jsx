import React from 'react';

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gradient-to-b from-storm to-indigo pl-4 pr-4 ${
        isActive ? 'bg-opacity-70' : 'bg-opacity-30'
      }`}
    >
      <p className="text-white text-sm font-medium leading-normal">{label}</p>
    </button>
  );
};

export default FilterButton;
