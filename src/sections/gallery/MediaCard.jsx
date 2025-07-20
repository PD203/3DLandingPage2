import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MediaCard = ({ imageUrl, title, loading = false }) => {
  return (
    <SkeletonTheme baseColor="#282b4b" highlightColor="#353965">
      <div className="flex flex-col gap-3 pb-3">
        {loading ? (
          <Skeleton height={180} borderRadius={10} />
        ) : (
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          />
        )}
        <div>
          {loading ? (
            <Skeleton width="70%" height={20} />
          ) : (
            <p className="text-white text-base font-medium leading-normal">{title}</p>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MediaCard;
