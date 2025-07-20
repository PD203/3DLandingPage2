import React, { useState } from 'react';

const NewsItem = ({ category, title, description, imageUrl }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-4 grid-default-color my-5">
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-[#b7b8d0] text-sm font-normal leading-normal">{category}</p>
          <p className="text-white text-base font-bold leading-tight">{title}</p>

          {/* Description with toggle */}
          <p
            className={`text-[#b7b8d0] text-sm font-normal leading-normal ${
              !showMore ? 'line-clamp-2 sm:line-clamp-none' : ''
            }`}
          >
            {description}
          </p>

          {/* Show "more"/"less" only if text is long (on small screens) */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#5f61fa] text-sm font-semibold sm:hidden mt-1 w-fit"
          >
            {showMore ? 'Show less' : '...more'}
          </button>
        </div>

        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
};

export default NewsItem;
