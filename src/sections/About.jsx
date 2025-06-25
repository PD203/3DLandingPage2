import React, { useRef } from 'react'
import grid1 from '../assets/coding-pov.png'
import csharp from '../assets/logos/csharp-pink.png'
import dotnet from '../assets/logos/dotnet-pink.png'
import blazor from '../assets/logos/blazor-pink.png'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = ({ id }) => {
  const grid2Container = useRef();

  return (
    <section id={id} className='c-space section-spacing'>
      <h2 className='text-heading'>About</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex flex-col items-center text-center grid-default-color grid-1 p-4">
          <img
            src={grid1}
            className="h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain z-0"
            alt="WASP AI Visual"
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end gap-4 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="headtext text-white">Welcome to SpaceScope</p>
            <p className="subtext text-white text-center">
              Explore the cosmos like never before. Powered by NASA’s API, we bring you real-time images, space missions, and cosmic insights—straight from the source.
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
            {/* <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="AI First"
              containerRef={grid2Container}
            /> */}
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text=" Daily Space Imagery"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Authentic Mission Logs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Astronomy Updates"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Explore the Universe"
              containerRef={grid2Container}
            />
            {/* <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image={csharp}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={dotnet}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image={blazor}
              containerRef={grid2Container}
            /> */}
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Universal Access</p>
            <p className="subtext">
              Explore space from anywhere on Earth. Our platform streams real-time NASA data, imagery, and updates—bringing the cosmos closer to you.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
            Curious about the universe? Get in touch!
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Unveiling the universe</p>
            <p className="subtext">
            We harness NASA’s Open API to deliver the latest space images, mission logs, and cosmic events—all in one place.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About