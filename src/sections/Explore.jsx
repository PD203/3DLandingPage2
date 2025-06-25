import React, { useRef, useEffect, useState } from "react";
import ThreeDCard from "../components/ThreeDCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Explore = ({ id }) => {
  const scrollRef = useRef(null);
  const [spaceImages, setSpaceImages] = useState([]);

  useEffect(() => {
    const fetchSpaceImages = async () => {
      try {
        const res = await fetch("https://images-api.nasa.gov/search?q=space&media_type=image");
        const data = await res.json();
        const items = data.collection.items.slice(0, 8);
        const formatted = items.map(item => ({
          title: item.data[0].title,
          description: item.data[0].description,
          imageUrl: item.links[0].href,
          link: item.href,
        }));

        setSpaceImages(formatted);
      } catch (err) {
        console.error("Error fetching NASA space images:", err);
      }
    };

    fetchSpaceImages();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -380 : 380, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className='c-space mt-10 relative mt-0'>
      <h2 className='text-heading'>NASA Space Gallery</h2>
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
        <IoIosArrowForward size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto whitespace-nowrap"
      >
        {spaceImages.map((img, index) => (
          <div key={index} className="shrink-0">
            <ThreeDCard
              title={img.title}
              description={img.description}
              imageUrl={img.imageUrl}
              link={img.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
