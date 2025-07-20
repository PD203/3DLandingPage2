import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NewsItem from '../sections/News/NewsItem';
import EventItem from '../sections/News/EventItem';
import { IoRocket } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiMonitorPlayFill } from "react-icons/pi";

function News() {
  return (
    <div className="c-space py-20">
          <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="flex flex-wrap justify-between gap-3 py-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
            News & Events
          </p>
        </div>

        {/* Latest News */}
        <SectionTitle title="Latest News" />
        <NewsItem
          category="Space Exploration"
          title="New Horizons Mission Discovers Icy Volcanoes on Pluto"
          description="The New Horizons spacecraft has revealed evidence of cryovolcanoes on Pluto, suggesting recent geological activity on the dwarf planet."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4Zx3kmeNf0WaTzZ6KEwI6XjeAiLO75v1q1ILRicZkTWvyS2w8o3EQQiBUekzy1idhxUu1BATJHdib7VMk7TxKCE3dbnvO5glqeSuXnewBw39tD-S-WtePCMazRpBORqNGSyRQ-V6oe4R7mBUs_u-au2kFm7ZpRvX020iGZ-h0sLeRMvfRzgXaqD_I50uUQ0nL-U5Sunw0tXWrMubRCFhn4t3bfzZEd7Iu7-nnRMdKi77vtzeNjLwxb5_NMEoz8htOtjmKsdxRg"
        />
        <NewsItem
          category="Astronomy"
          title="James Webb Telescope Captures Stunning Images of a Distant Nebula"
          description="The James Webb Space Telescope has released breathtaking images of a nebula, showcasing its intricate details and vibrant colors."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAwfuao8YQpd0I8Wv94ye5G1DWYYWLvur78GkSpQxhh-ZiSINofHReVcLDY2b9o7rhYXvas9te4gVbGEJB2wxxvtTSqabCaquxvPrXgf3Dp0-9sEk_HvB4jzUmogrIJpWMD4isjeDwxlyEoHxKtZReykDyNoN6S3n1p_qo8pUnpiCZd-KvP50nUfWk8Z5M61G7VXDGGU1pNnbGTdR_tL1uGbITp6PV42HsCXGIoLEgkv9hJ2sEa1defYAcc3LYgw_4N3y7BfZPQdQ"
        />
        <NewsItem
          category="Space Technology"
          title="Breakthrough in Propulsion Technology Could Revolutionize Space Travel"
          description="Researchers have developed a new propulsion system that could significantly reduce travel time to distant planets and beyond."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD7nMpQNOVDDdk-p1pbR6ymkp7is2GnIz44F1sPclrSj7J_fpa38xL4KWFLArw8Jew41FZCYkmFHfNpm4R4kFKhIs9kn-vnh_TRcLgT6zCQC58HySXVtPG2oBxxvT7t4bxhRBOJJSUBueGctTmNK532CdvTOmurpQhltiY-o3V8jEYDlgiX6Ytl3SFvIUl25BWmJTZ_dKiG7QKU1KT_CrCduwMwIXdwX6WVoAc0EISS2R-I-1BrhOzTjDJEdv5x-LioQ8M2TzG4pg"
        />

        {/* Press Releases */}
        <SectionTitle title="Press Releases" />
        <NewsItem
          category="Mission Update"
          title="Mars Rover Perseverance Collects Promising Rock Samples"
          description="The Perseverance rover has successfully collected several rock samples from the Martian surface, which could hold clues about the planet's past."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAGUQYnx8vNKcrARzWRN6oPOr75CmuwRvvdhVf6NBTmpaAFjKIuSrRg3PX6OhjVgMeLK-dx0usQiXBMpTFee2huRRsOLSZwEswL7APr0NqWe60Pn8bP52l_PzfK0TwFmD_GyGHNfr0ukWM_vwqErg_RvxBd_7b53CiHQcMC1qj4JNAMF3ihAKkfNTbMNKbyDntFmpZZ3TjOEeByTWle486zhqUld2Kh5G9PkQDXm6atgvW24Ht3wLPb_I6VBxGfxKOEuTQ-XLgNgA"
        />
        <NewsItem
          category="Space Science"
          title="Study Reveals New Insights into the Formation of the Solar System"
          description="A recent study has shed new light on the processes that led to the formation of our solar system, challenging existing theories."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDULFzmGzgdzvKqZmXxkRBxss18BCDnFFvSQMsL1EHU0dUhug_uct-sfFhbTPUW_1SpUCsCK1436FXQogoaqeZwBG7UVHosfie6LCdxPAVv-pR0FdRTEnTLs0-GP0V0Tj98VfyZUJy8-Go1Au1cDi8DXgMD6BfouaPwX5WF7-eEPN5DSYYPMtDOkyRD71Zijr1qkvMciaeYB2L3FYmiFh-11x7MHLJOJpOsyR3fwqDtxFmtex4omutTdsKZV_JLDCb0oi99bOHLKA"
        />

        {/* Upcoming Events */}
        <SectionTitle title="Upcoming Events" />
        <EventItem
            icon={<IoRocket className="text-2xl" />}
          title="Falcon Heavy Launch"
          subtitle="Rocket Launch"
        />
        <EventItem
          icon={<BsFillPeopleFill className="text-2xl" />}
          title="International Space Exploration Summit"
          subtitle="Conference"
        />
        <EventItem
          icon={<PiMonitorPlayFill className="text-2xl" />}
          title="Astronaut Q&A from the International Space Station"
          subtitle="Live Stream"
        />
      </div>
    </div>
    </div>
  );
}

export default News;