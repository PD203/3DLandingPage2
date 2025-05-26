import React, { useRef } from "react";
import ThreeDCard from "../components/ThreeDCard";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const Works = () => {
  const scrollRef = useRef(null);

  const apps = [
      {
        title: "AI-Powered Automation",
        description: "Streamline your business with intelligent automation.",
        imageUrl: "https://media.slidesgo.com/storage/44761196/conversions/0-artificial-intelligence-ai-technology-project-proposal-thumb.jpg",
        link: "",
      },
      {
        title: "Smart Recommendation Systems",
        description: "DeliverML-based recommendation engines.",
        imageUrl: "https://flyaps.com/blog/content/images/size/w960/2024/12/AI-Software-Development.png",
        link: "",
      },
      {
        title: "Real-Time AI Analytics",
        description: "Make data-driven  insights powered by AI.",
        imageUrl: "https://img.freepik.com/free-vector/explore-future-seo-landing-page-template_23-2148929032.jpg?semt=ais_hybrid&w=740",
        link: "",
      },
      {
        title: "Custom AI Solutions",
        description: "We build scalable, exact business needs.",
        imageUrl: "https://img.freepik.com/free-vector/robot-winning-golden-cup_74855-7154.jpg?semt=ais_hybrid&w=740",
        link: "",
      }
    ]
    
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -380 : 380, behavior: "smooth" });
    }
  };

  return (
    <section className='c-space mt-10 relative  mt-0 '>
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
