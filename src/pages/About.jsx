import React from 'react';
import { IoRocket } from "react-icons/io5";
import { RiAliensFill } from "react-icons/ri";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { FaUserAstronaut } from "react-icons/fa6";
import { GiSpaceShuttle } from "react-icons/gi";

function About() {
    return (
        
        <div className="c-space py-20 flex flex-1 justify-center ">
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">About Us</p>
            <p className="text-[#b7b8d0] text-base font-normal leading-normal">
              Cosmos Exploration Agency (CEA) is dedicated to advancing scientific knowledge, exploring the universe, and inspiring future generations through our work in space
              exploration and research.
            </p>
          </div>
        </div>

        {[
          {
            title: 'Our Mission',
            text: `CEA's mission is to explore the universe, understand our place in it, and inspire the next generation of explorers. We conduct cutting-edge research, develop innovative technologies, and collaborate with partners worldwide to achieve our goals.`,
          },
          {
            title: 'Core Values',
            text: `Our core values guide our work and interactions. We are committed to excellence, integrity, safety, teamwork, and innovation. These values ensure we operate at the highest standards and achieve our ambitious goals.`,
          },
          {
            title: 'Leadership',
            text: `CEA is led by a team of experienced professionals dedicated to advancing our mission. Our leadership fosters a culture of collaboration, innovation, and excellence, ensuring we remain at the forefront of space exploration.`,
          },
          {
            title: 'Centers',
            text: `CEA operates several centers across the country, each specializing in different aspects of space exploration and research. These centers are hubs of innovation, driving our scientific and technological advancements.`,
          },
          {
            title: 'Organizational Structure',
            text: `CEA's organizational structure is designed to facilitate efficient operations and collaboration across various departments. Our structure supports our mission by ensuring clear lines of responsibility and effective communication.`,
          },
        ].map(({ title, text }) => (
          <div key={title}>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{text}</p>
          </div>
        ))}

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Timeline of Achievements</h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          {[
            { icon: <IoRocket size={24}/>, title: 'First Satellite Launch', year: '1958' },
            { icon: <RiAliensFill size={24}/>, title: 'First Human in Space', year: '1961' },
            { icon: <WiMoonAltWaningCrescent5 size={24}/>, title: 'Moon Landing', year: '1969' },
            { icon: <FaUserAstronaut size={24}/>, title: 'Mars Rover Mission', year: '2003' },
            { icon: <GiSpaceShuttle size={24}/>, title: 'International Space Station', year: '1998-Present' },
          ].map(({ icon, title, year }, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white text-xl">{icon}</div>
                <div className="w-[1.5px] bg-[#2f306a] h-2 grow" />
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">{title}</p>
                <p className="text-[#8e8fcc] text-base font-normal leading-normal">{year}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

     
    </div>
    )
}

export default About;