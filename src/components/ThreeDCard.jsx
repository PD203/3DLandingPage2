"use client";

import React from "react";
import { CardBody, CardEffect, CardItem } from "../components/CardEffect";

// In ThreeDCard.jsx

const ThreeDCard = ({ title, description, imageUrl, link }) => {
    return (
      <CardEffect className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] sm:w-[24rem] h-auto rounded-xl p-4 sm:p-6 border">
          <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 max-w-sm dark:text-neutral-300">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-6 sm:mt-10">
            <CardItem
              translateZ={20}
              as="a"
              href={link}
              target="_blank"
              className="px-3 py-1 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardEffect>
    );
  };
  
export default ThreeDCard;
