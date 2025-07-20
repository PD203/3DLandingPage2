"use client";

import React from "react";
import { CardBody, CardEffect, CardItem } from "../components/CardEffect";

const ThreeDCard = ({ title, description, imageUrl }) => {
  return (
    <CardEffect className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] grid-default-color border-black/[0.1] w-[90vw] sm:w-[28rem] h-auto rounded-sm p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl sm:text-2xl w-full font-bold text-neutral-600 dark:text-white truncate"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base mt-2 max-w-sm w-full dark:text-neutral-300 line-clamp-2"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            className="h-60 sm:h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardEffect>
  );
};

export default ThreeDCard;
