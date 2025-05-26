import React, { useRef } from 'react'
import grid1 from '../assets/coding-pov.png'
import csharp from '../assets/logos/csharp-pink.png'
import dotnet from '../assets/logos/dotnet-pink.png'
import blazor from '../assets/logos/blazor-pink.png'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = () => {
  const grid2Container = useRef();

  return (
    <section className='c-space section-spacing'>
      <h2 className='text-heading'>About me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex flex-col items-center text-center grid-default-color grid-1 p-4">
          <img
            src={grid1}
            className="h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain z-0"
            alt="WASP AI Visual"
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end gap-4 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="headtext text-white">Hi, We’re WASP</p>
            <p className="subtext text-white text-center">
              We specialize in delivering cutting-edge AI solutions that transform industries. With a focus on performance and scalability, we build intelligent systems that empower businesses worldwide.
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
              WHERE AI MEETS INGENUITY
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="AI First"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text=" Automation Ready"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Secure by Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Scalable Systems"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Human-Centric Interfaces"
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
            <p className="headtext">Global Reach</p>
            <p className="subtext">
              We operate across 56 countries with 30M+ users, offering AI services tailored to regional needs—no matter where you are.
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
              Have a Project in Mind?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Our Tech Ecosystem</p>
            <p className="subtext">
              We build using the best tools in AI, cloud computing, and automation. From Python and TensorFlow to Kubernetes and custom ML pipelines—we innovate at scale.
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