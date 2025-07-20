import React, { useRef } from "react";
import ThreeDCard from "../../components/ThreeDCard";

const Latest = ({ id }) => {
  const scrollRef = useRef(null);

  const spaceImages = [
    {
      title: "New Satellite Launch",
      description: "A new satellite has been launched to monitor climate change.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgqjtCUG28m5IrJniVnAyXz6oR1AvqY6Deqf9YNeu97AkHlHjJd_z-n11tjqvoW1D9ohp52bypGeiECkOwFA59moL1IrPQb_v1sO-LjAY7MWRXICm6tOiAVbb9OAyvRzYQiuSPIhxkgUd5TrCSsofOa6no1nBdhhWxn-vTpbYX64VQWpJS9wJ7Qvv1Xyc-Xcu-WrVMM3y4_b5HPGCzKBaCl1K9sfcBKiPDOoICdnWWfFucBgnx-NE76ozaQrSwVn-KlSeGHmp6uA"
    },
    {
      title: "Astronaut Mission Update",
      description: "Astronauts complete a successful spacewalk.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx09Si9ymNqnxO83H8tNhYRFkbtR4pbK4E-AS-tKn93IBS9-6zhDMDrL_oKLGjYxolhFdliVYFEccz1QlX7OaZOdlXZjuLKIx7kvGC9OlkvWr4IKfUzrQG_IRCl3ISTs7dcwpCYKf0DiCflI5Vjg07eZxa758ZMf98XCYRCPCo042pbnVLnj9pC-yGUmJ8_stwkntDhvWNyfel0nK5-13ncpAC5opgDVld51Ft-JyER6PGhgMwu-s0MORo_3hBhdH0sWNH5eAFBQ"
    },
    {
      title: "Telescope Discovery",
      description: "A new exoplanet has been discovered by the James Webb Telescope.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg30d-enAzdIwGb6ah10mu7Dx2RZrcUL13imb7SNqNE8L69p1UHnPML4scOi9iGdD3fqyiaTtjDZq94-6EhaTalp_tcQhtdtV2t0ctCshU_yzm3b0Bjzk1nX_2ftsddnttlhpAhFosf5hcpq-JEDsw_0HG8OuYzLztVZLB3BpVgmREK4pboNkjgrEpUtfIh3JQBidgUP9UPekM2m1fD04zAttRr-i3AOPiAnqCRhnOJ1tBepWm30mS01wsgeYZSC6YfV7n9M9W7g"
    },
  ];



  return (
    <section id={id} className='c-space mt-20 relative'>
      <h2 className='text-heading'>Latest News</h2>

      {/* Cards */}
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto whitespace-nowrap">
        {spaceImages.map((img, index) => (
          <div key={index} className="shrink-0">
            <ThreeDCard
              title={img.title}
              description={img.description}
              imageUrl={img.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;