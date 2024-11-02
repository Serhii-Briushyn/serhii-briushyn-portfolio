import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiSwagger,
  SiVercel,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiGit,
  SiGithub,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiStyledcomponents,
  SiMui,
  SiTailwindcss,
  SiReactrouter,
  SiAxios,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        icons: [
          <SiReact key={nanoid()} title="React" />,
          <SiRedux key={nanoid()} title="Redux" />,
          <SiJavascript key={nanoid()} title="JavaScript" />,
          <SiTypescript key={nanoid()} title="TypeScript" />,
          <SiHtml5 key={nanoid()} title="HTML5" />,
          <SiCss3 key={nanoid()} title="CSS3" />,
          <SiVuedotjs key={nanoid()} title="Vue.js" />,
          <SiNextdotjs key={nanoid()} title="Next.js" />,
          <TbBrandReactNative key={nanoid()} title="React Native" />,
        ],
      },
      {
        icons: [
          <FaNode key={nanoid()} title="Node.js" />,
          <SiMysql key={nanoid()} title="MySQL" />,
          <SiExpress key={nanoid()} title="Express" />,
          <SiMongodb key={nanoid()} title="MongoDB" />,
          <SiSwagger key={nanoid()} title="Swagger" />,
        ],
      },
      {
        icons: [
          <SiGit key={nanoid()} title="Git" />,
          <SiGithub key={nanoid()} title="GitHub" />,
          <SiVercel key={nanoid()} title="Vercel" />,
          <SiVite key={nanoid()} title="Vite" />,
          <SiFigma key={nanoid()} title="Figma" />,
          <SiPostman key={nanoid()} title="Postman" />,
          <SiEslint key={nanoid()} title="ESLint" />,
          <SiPrettier key={nanoid()} title="Prettier" />,
        ],
      },
      {
        icons: [
          <SiMui key={nanoid()} title="Material-UI" />,
          <SiTailwindcss key={nanoid()} title="Tailwind CSS" />,
          <SiReactrouter key={nanoid()} title="React Router" />,
          <SiAxios key={nanoid()} title="Axios" />,
          <SiStyledcomponents key={nanoid()} title="Styled Components" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        text: "Truck Driver - BoBo | 2017 - Present",
      },
      {
        text: "Head of Mechanics Departmen - Mine Shakhterskaya-Glubokaya | 2013 - 2017 ",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        text: "Fullstack Developer - IT School GoIT | 2024 - 2025",
      },
      {
        text: "Mining Electromechanical Technician - Mining Technical College of Torez | 2007 - 2010",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> crafted
            into digital experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            One year ago, I began pursuing my dream of becoming a developer.
            Since then, I have not only gained programming skills but also
            actively participated in team projects, where I took on the roles of
            team leader and Scrum master. My goal is to create innovative and
            functional digital products that bring value and inspire.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed projects
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Individual projects
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Team projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item) => {
              return (
                <div
                  key={nanoid()}
                  className={`${
                    index === aboutData.indexOf(item) &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(aboutData.indexOf(item))}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item) => {
              return (
                <div
                  key={nanoid()}
                  className="flex-1 flex flex-col md:flex-row max-w-max items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.text}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon) => {
                      return (
                        <div key={nanoid()} className="text-2xl text-white/60">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
