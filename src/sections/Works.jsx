import React, { useRef } from "react";
import ThreeDCard from "../components/ThreeDCard";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const Works = () => {
  const scrollRef = useRef(null);

  const apps = [
    {
      title: "3D Magic UI",
      description: "Hover to experience 3D effects like never before.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2560",
      link: "https://example.com/magic",
    },
    {
      title: "Smooth Animations",
      description: "CSS + JS = smooth, immersive animations.",
      imageUrl: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=2560",
      link: "https://example.com/animations",
    },
    {
      title: "Responsive Design",
      description: "Fully responsive and interactive 3D cards.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2560",
      link: "https://example.com/responsive",
    },
    {
        title: "Responsive Design",
        description: "Fully responsive and interactive 3D cards.",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2560",
        link: "https://example.com/responsive",
      },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -380 : 380, behavior: "smooth" });
    }
  };

  return (
    <section className='c-space relative  mt-0 '>
       <h2 className='text-heading'>My Work</h2>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black p-2 rounded-full shadow-md hover:bg-gray-800"
      >
        <IoIosArrowBack size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black p-2 rounded-full shadow-md hover:bg-gray-800"
      >
        <IoIosArrowForward  size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto whitespace-nowrap "
      >
        {apps.map((card, index) => (
          <div key={index} className="shrink-0">
            <ThreeDCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
