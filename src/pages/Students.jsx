import React from "react";
import SectionTitle from "../components/SectionTitle";
import GridCardSection from "../components/GridCardSection";

const Students = () => {
  return (
    <div className="c-space flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight">
              Resources for Students and Educators
            </p>
            <p className="text-[#b7b8d0] text-sm font-normal leading-normal">
              Explore a wealth of educational materials, lesson plans, and
              programs designed to inspire and engage students of all ages.
            </p>
          </div>
        </div>


        {/* Featured Resources */}
        <SectionTitle title="Featured Resources" />
        <GridCardSection items={featuredResources} />

        {/* Grade Level */}
        <SectionTitle title="Grade Level" />
        <div className="pb-3">
          <div className="flex border-b border-[#2f306a] px-4 gap-8">
            {gradeLevels.map((label, idx) => (
              <a
                key={idx}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${label.active
                    ? "border-b-[#282b4b] text-white"
                    : "border-b-transparent text-[#b7b8d0]"
                  }`}
                href="#"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  {label.name}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Subject Area */}
        <SectionTitle title="Subject Area" />
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {subjects.map((subject, idx) => (
            <div
              key={idx}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#282b4b] pl-4 pr-4"
            >
              <p className="text-white text-sm font-medium leading-normal">
                {subject}
              </p>
            </div>
          ))}
        </div>

        {/* Lesson Plans */}
        <SectionTitle title="Lesson Plans" />
        <GridCardSection items={lessonPlans} />

        {/* Activities */}
        <SectionTitle title="Activities" />
        <GridCardSection items={activities} />

        {/* Programs */}
        <SectionTitle title="Programs" />
        <GridCardSection items={programs} />
      </div>
    </div>
  );
};



const featuredResources = [
  {
    title: "Journey to the Stars: A Comprehensive Guide",
    description:
      "Explore the wonders of space with our detailed guide covering everything from planets to galaxies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtiDVgG7wsUsZJlJOK3gxbJ-fXbZMbzevu96liCT7XMcWcWP-nVWymmESWVAI5tYaggRQ-YdMjbDPop2AVqTI1oeYcFzRwOS2SrWWNcUHkkesFgQAW8k84enTqI0368KJ5cp4kxKYnQYQ2s_NiTIbI2o8szwNRuVrWx0FnstWhjiAnkFliKJ-E330Y7VDnWBmM9AjCERv3xlZ31W98RTUJCJf8HwhoHO0yU3FByoOa-JKtMOss44RDcSYzu3MZv8jC7IB1dI6wbA",
  },
  {
    title: "Unlocking the Universe: Interactive Lessons",
    description:
      "Engage students with interactive lessons and activities that make learning about space fun and exciting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDn0jda2p64V348r2RRFrgjooWntsLOe4mzhIGcTkVfFoqpVUDdMCWtk-EZ1RW9Qo9iUw2ztRHgtcaKyvCUSDXepzY8V7D4LApefg6PiLImX00h8w__p6bCzj6V9dgP17E2KWdC01ZVTiqQMPSjG78v4IdSvDszQKVmJg7h0wBQmn8RMUKByWw8ERwGPdqFCNTUjHtxicbmlPwVtfSxX9lwPLnjrvIeTQdUZq2h3aE3LKQKuEXRww8S72FTwUxBqTTTd7eqad0DkQ",
  },
  {
    title: "Cosmic Careers: Pathways in Space Science",
    description:
      "Discover various career paths in space science and learn how to prepare for them.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIvhyKnym6rGuhyp4r9IReASZOZmgpnguUy0vsMFI0unh7MKyThuAQObQhXEbo57fBKVyuiWf0G4o9ybx3QXr_WXxzgLYkjfOwedDDe_JXJ_Vuzl9ugMpO9W7xtUJI7yHsWXZ06yBz7RdBanPWaYzOq7lnSPJiJEKhliewO7GBHrQ7OOTQhQ6QhrQ2vcgUx7RQk62-gkRXipbF8zfS452Co7shh2AgEHT5RmiNG5kFJGxPhQHbqNHbkomPHI4FNYF0IX-2G744rQ",
  },
];

const gradeLevels = [
  { name: "Elementary School" },
  { name: "Middle School" },
  { name: "High School" },
  { name: "All Grades", active: true },
];

const subjects = [
  "Astronomy",
  "Physics",
  "Biology",
  "Engineering",
  "Mathematics",
  "Technology",
];

const lessonPlans = [{
  title: "Exploring the Solar System",
  description:
    "A detailed lesson plan for elementary students to learn about the planets and their characteristics.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuChxwYnpwnuu1Sw6BcfbNuYRUuK8mRkOR7T60_gmrVWbXj3xlK2lJ_UasOmNMLROHzvv-aRWR8Sc2yKXU_PKQXK-IxxvALEi6XRqo83bLMRS9am3RVP3aj4s7wwXp2lJtAfgSbsSihreMo406cVNODTlBhI3JbELSRYL9vE8Tx4tdtOHbW2k9PK8UsAFgTqcwJkRprzS8ATuAv198PRWyTqHceVEWMJ8F_XeoOz0_sGAc4y0d8OlSks3wLuxuXoTnEUe4btL0_CdQ",
},
{
  title: "Understanding Gravity",
  description:
    "A comprehensive guide for middle school students to understand the concept of gravity and its effects.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDlGO0F9RzU0w41AXASfBIsElYt8QLxUY1oZlXvxKfdhWCVCz0NSO9agNni3uXgPaji2rsruuQR3cy9PspD35uMa--NUCnFyBY83P9fx3AbZn-gkYm77Lk1MZMPDEuI2zwmaGZukH_DcmeXbk-2ufbFeUwWG6su2T1yN_OP_YaJ6QDv0OQMoy9U3PI-7Nfn8CD9NS8whING0I46iVhSMAPN6QjnISpVbyyDNyUuw695xZSi1and1JJh_Tuc3TYky8_H4_6sTjgB1w",
},
{
  title: "Life Beyond Earth",
  description:
    "An engaging lesson for high school students to explore the possibilities of life on other planets.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6wyA2cbbqH_8xZtPiSHvkSQxdRyPiPQyDmmzzI03iVGfpQXwsdZeCB3tFIw2GYiwUYdzs-cB8yHoDhQGq689ia8HpG-Sq1F73qd9LRc_d2VUywo_N73yEJofAQRoECvZlsFvVq-4TcD1rkJWa2gZ8aREL01EjrgbJcWKVVCNrilP4R__pC7CnQrLxtKsupwZD1pxCjJojOW95yADkkXm0oYDk4vkcb382ba7UtcqRcX-KF43HBsNES2bMSd3GnUStLh3JnJha9Q",
},
];

const activities = [{
  title: "Build Your Own Rocket",
  description:
    "A hands-on activity for students to build and launch their own rockets using simple materials.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCq1G7YfPUEn7mn831gsSDiCYDiUxg6w8codHGzTgv7Set1filocmve9B72dUKmuW3L0li48RRpyoaZoFcUV2dxal_BUe72i4cQhpEIDSD1-q-X1ejZFVAMxGIi5GgYvHBLwgOI-s6_O2BJUYa-hTvWUlQgQcoTUK6dqkdr9GWf2RtlfJwns8yRKlIjc9kxorA0u1sZkj85LhEIJr5RtNCnssXRVA5_ftvEmhXNT_U3PrBxsB6fA9yq8-hse3xesmhojEDJHDmqnA",
},
{
  title: "Create a Star Chart",
  description:
    "An interactive activity to create a star chart and learn about constellations.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBi23gJenoBk5YnCbRBANHSyO0KQ4fUzcUov0ohQQllz3gdEYG2-0T7YU-G9u1pUdWxhyrHKpzSewHXcOk8SumWtfPBif8CxxpnaRH4AdzcIf0St5AzSpoTUYFXG8Nsw_Q0aqUrSXLWG4PG3i4QPn5B0cpP8mSlTAF_kzDLvUOYU7H3OKPk0En1d7gkWKJvyl_ohFDFU6bgYhTxlilDOJB22qYu4bDDrXJ2w9kLAwyYr4RiLYn690BHknlnGSKZYbv2WGCEmi8uEA",
},
{
  title: "Design a Space Habitat",
  description:
    "A creative project for students to design a habitat for astronauts on another planet.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdymKTfa9Jn_6mSKLRiW4XdNSh09hFQDaCcGplhyPZgZZMmG0_vUzaeqi4qeVXtGcU6mgKx4mCXNkmwPIc0B69ATNyrH2_Jc4h74N-PYDeTRlUToa-tv97B51riQAbEJGKQp047wXLqwblC8e6puWigICThZAWMozAMWFeB1JpK3Ht0cxXoY98J7eAy1KVqmXYmOKrs5KaKaUN4Kf1rogtd50n1yzc-MzRi219MV2lQPMyywSD4oPB1QGxgZSwRjYVBfhFHsCxkA",
}];


const programs = [{
  title: "Internships",
  description:
    "Explore internship opportunities for students to gain practical experience in space science.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9P0AWBs1XPQ41po8893NUPHq9n80o0wQA4QUsLMiguugZukvS-XqoaO7LVzfJ6d3rQrH-AsiOmlewIH9fTnA3r68o83cQjY5K7gzOESlAPS5AFXGe7Qah40qZsQjFQMoIoX_1J3Tv2yI3dZoAK4nWeD7GE_2TUCtdH-rN8ocI7jhZEI-Ec3M9zggXS_RmxcgRL9lxDks8KlWbcLktaPwquzuGTU3ePpvIfPtMS0aOMCqBIWRq5tER-AF5Fc6ulFsJ4OEUKEbZ8w",
},
{
  title: "Fellowships",
  description:
    "Discover fellowship programs for graduate students and researchers in various fields.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmGF8JkfPT2i2EDhKbLgShB9FB6zRtT460VRNoxyDJbT6C-xcVdc6c9VBD8X6OmyAS-OqUau246w9PWLpFB14LJs7n7WTO9cQEJ5cYh5HKHeef6mcmezOS577EBIXH184O_nvX1YlHfTTwCxLjEoPdXZzSKv-wybaLZwe3EBqST9vJD2tt5FF5TkW07rzuBDaZabEKAAo2M9FDrViIpqjQmh6UB8MumEv2JY13GYlKDSKPspWPupMfD0QvFVXwR4P_xvQbI734Gw",
},
{
  title: "Scholarships",
  description:
    "Find scholarship programs to support students pursuing careers in space exploration and research.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4znNNwtc_4gEGURSIadmXzROpqPsvQELTpzpvGO8JXyHW241DOtN344GZsHuNdas-tlgXQWhrCapNoalbHdliaQrBb2rQQ0xPFrAHgE3C8V47e2Ggn_jqB8S0-6jVwRaU9PbtFD-v6qp7piaajIXjbF-EVFnLo_7v41i2eyyNFodDhl4YLhxtSzLAU0WgasBdoUPc1jKxLzYEj7pnHnWZZP4nOZVta2AW12Iy0tC7JXKiOcboyWS4EFQh76Q1SJxEs5o_Zp4VGw",
}];

export default Students;
