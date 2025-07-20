import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full relative">
          <div className="text-[#b7b8d0] text-2xl p-3 absolute items-center justify-center rounded-l-lg border-r-0">
            <IoSearchSharp />
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for images, videos, podcasts, and 3D models"
            className="form-input flex w-full min-w-0 flex-1 bg-gradient-to-b from-storm to-indigo rounded-lg resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 focus:border-none h-full placeholder:text-[#8e8fcc] pl-10 text-base font-normal leading-normal"
          />
        </div>
      </label>
    </form>
  );
};

export default SearchBar;
