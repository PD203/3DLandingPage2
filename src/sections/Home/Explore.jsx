import React, { useRef } from 'react'
import Card from '../../components/Card'
import { Globe } from '../../components/Globe'
import CopyEmailButton from '../../components/CopyEmailButton'

const Explore = ({ id }) => {
  const grid2Container = useRef();

  return (
    <section id={id} className='c-space '>
      <h2 className='text-heading'>Explore</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex flex-col items-center text-center grid-default-color grid-1 h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {/* Background image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6wyA2cbbqH_8xZtPiSHvkSQxdRyPiPQyDmmzzI03iVGfpQXwsdZeCB3tFIw2GYiwUYdzs-cB8yHoDhQGq689ia8HpG-Sq1F73qd9LRc_d2VUywo_N73yEJofAQRoECvZlsFvVq-4TcD1rkJWa2gZ8aREL01EjrgbJcWKVVCNrilP4R__pC7CnQrLxtKsupwZD1pxCjJojOW95yADkkXm0oYDk4vkcb382ba7UtcqRcX-KF43HBsNES2bMSd3GnUStLh3JnJha9Q"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="WASP AI Visual"
          />

          {/* Overlay gradient and content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 w-full bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end pb-6 px-4">
            <p className="headtext text-white">Explore the Universe</p>
            <p className="subtext text-white text-center">
              An interactive activity to create a star chart and learn about constellations.
            </p>
          </div>
        </div>



        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              YOUR WINDOW TO THE COSMOS
            </p>
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Astronomy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Physics"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Engineering"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Technology"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Life Beyond Earth</p>
            <p className="subtext">
              A comprehensive guide for middle school students to understand the concept of gravity and its effects.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-default-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Curious about the universe? Get in touch!
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-default-color grid-5 overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
          <img
            src="https://wallpapers.com/images/hd/animated-space-0ghh7kjo9rie1ppz.jpg"
            alt="Space"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 w-[50%] p-6">
            <p className="headText text-white font-bold">Unveiling the universe</p>
            <p className=" text-white text-sm">
              We harness NASA’s Open API to deliver the latest space images, mission logs, and cosmic events—all in one place.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Explore;