import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="h-full w-full pt-36 lg:pt-24 pb-20 px-[5%] lg:px-[10%]">
        <div className="flex flex-col h-full w-full items-center xl:items-start lg:justify-center hide-scrollbar">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:text-left text-3xl sm:text-5xl xl:text-[4vw] leading-tight mb-6 4xl:mb-12 5xl:mb-20 font-semibold z-20"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:text-left text-sm sm:text-lg xl:text-[1.2vw] xl:leading-[1.8] max-w-[280px] sm:max-w-[400px] xl:max-w-[35%] mb-10 xl:mb-12 4xl:mb-12 5xl:mb-20 text-white/60 font-light z-20"
          >
            Full-stack developer with expertise in creating dynamic,
            user-centric applications. Let&apos;s bring your vision to life
            through innovative, scalable solutions.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[44%] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
