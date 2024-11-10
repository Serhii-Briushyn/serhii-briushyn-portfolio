import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import React, { useState } from "react";
import { aboutData } from "../../components/aboutData";
import Image from "next/image";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full w-full bg-primary/30 pt-36 lg:pt-24 pb-20 px-[5%] lg:px-[10%] flex items-center">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex w-[44%] absolute bottom-0 -left-[20%]"
      >
        <Avatar />
      </motion.div>
      <div className="h-full xl:h-max w-full flex flex-col xl:flex-row gap-x-6 hide-scrollbar lg:justify-center">
        <div className="flex flex-col xl:basis-3/5 text-center xl:text-left items-center xl:items-start">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:text-left text-3xl sm:text-5xl xl:text-[3vw] leading-tight max-w-2xl xl:max-w-full mb-6 4xl:mb-12 5xl:mb-20 font-semibold z-10"
          >
            Captivating <span className="text-accent">stories</span> crafted
            into digital experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex text-left text-[1vw] xl:leading-[1.8] max-w-[75%] mb-10 xl:mb-12 4xl:mb-12 5xl:mb-20 z-10"
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
            className="flex w-full max-xl:mb-8 justify-center xl:justify-start"
          >
            <div className="flex max-w-[320px] sm:min-w-[400px] xl:max-w-[65%] xl:gap-4 2xl:gap-5 3xl:gap-7 4xl:gap-9 5xl:gap-14">
              <div className="relative flex-1 flex flex-col after:w-[1px] 3xl:after:w-[3px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="max-sm:text-3xl max-xl:text-4xl xl:text-[2.3vw] font-extrabold text-accent">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-[8px] sm:text-xs xl:text-[0.8vw] leading-[1.4] xl:leading-[1.6] uppercase tracking-[1px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 flex flex-col after:w-[1px] 3xl:after:w-[3px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="max-sm:text-3xl max-xl:text-4xl xl:text-[2.3vw] font-extrabold text-accent">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-[8px] sm:text-xs xl:text-[0.8vw] leading-[1.4] xl:leading-[1.6] uppercase tracking-[1px]">
                  Completed projects
                </div>
              </div>
              <div className="relative flex-1 flex flex-col after:w-[1px] 3xl:after:w-[3px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="max-sm:text-3xl max-xl:text-4xl xl:text-[2.3vw] font-extrabold text-accent">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-[8px] sm:text-xs xl:text-[0.8vw] leading-[1.4] xl:leading-[1.6] uppercase tracking-[1px]">
                  Individual projects
                </div>
              </div>
              <div className="relative flex-1 flex flex-col">
                <div className="max-sm:text-3xl max-xl:text-4xl xl:text-[2.3vw] font-extrabold text-accent">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-[8px] sm:text-xs xl:text-[0.8vw] leading-[1.4] xl:leading-[1.6] uppercase tracking-[1px]">
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
          className="flex xl:basis-2/5 flex-col w-full "
        >
          <div className="flex gap-x-4 xl:gap-x-8 4xl:gap-x-12 5xl:gap-x-16 mx-auto xl:mx-0 mb-4 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-14 5xl:mb-20">
            {aboutData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    index === aboutData.indexOf(item) &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize text-sm sm:text-lg xl:text-[1.5vw] xl:leading-[1.8] relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(aboutData.indexOf(item))}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-0 flex flex-col gap-y-2 mx-auto xl:mx-0 xl:gap-y-4 text-sm sm:text-lg xl:text-[1.1vw] xl:leading-[1.8]">
            {aboutData[index].info.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex-1 flex flex-col md:flex-row w-full text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">
                    <p className="text-accent text-center xl:text-left">
                      {item.date}
                    </p>
                    <p className="text-center xl:text-left">{item.text}</p>
                  </div>
                  <div className="flex gap-4 5xl:gap-10 flex-wrap justify-center xl:justify-start max-w-md sm:max-w-lg xl:max-w-max">
                    {item.icons?.map((icon) => (
                      <motion.div
                        key={icon.id}
                        className="relative group"
                        whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={32}
                          height={32}
                          className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 3xl:w-14 3xl:h-14 4xl:w-20 4xl:h-20 5xl:w-28 5xl:h-28"
                        />
                        <div className="absolute top-0 left-0 transform -translate-x-full -translate-y-full hidden xl:group-hover:flex">
                          <div className="relative flex items-center bg-white text-primary p-2 rounded-[3px] opacity-0 transform scale-90 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 shadow-lg">
                            <span className="text-xs 4xl:text-lg 5xl:text-2xl font-semibold capitalize leading-none">
                              {icon.title}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
