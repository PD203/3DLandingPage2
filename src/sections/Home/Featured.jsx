'use client';
import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";

const SplineScene = lazy(() => import("../../components/SplineScene"));

export default function Featured() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  return (
    <div className="c-space my-20">
      <h2 className='text-heading'>Featured</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-0 p-32 grid-default-color mt-15 dark:bg-gray-900">
        
        <div className="flex-1 text-left px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Journey to the Stars
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Embark on a virtual journey through the cosmos. Explore spacecraft, celestial bodies, and the vast expanse of space.
          </p>
          <button className="bg-white hover:bg-amber-50 text-black px-6 py-2 rounded-lg">
            Explore Now
          </button>
        </div>

        <div className="flex-[1.5] w-full flex justify-center items-center">
          {isDesktopOrLaptop ? (
            <Suspense fallback={<div className="text-gray-500">Loading 3D...</div>}>
              <SplineScene />
            </Suspense>
          ) : (
            <div className="text-gray-500">
              3D view is available on desktop for a better experience.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
