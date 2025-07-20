import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className="flex items-center justify-center p-4 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex size-10 items-center justify-center text-white disabled:opacity-40"
      >
        <IoIosArrowBack />
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`text-sm font-${num === currentPage ? "bold" : "normal"} leading-normal flex size-10 items-center justify-center text-white rounded-full ${num === currentPage ? "bg-[#21224a]" : ""}`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex size-10 items-center justify-center text-white disabled:opacity-40"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
