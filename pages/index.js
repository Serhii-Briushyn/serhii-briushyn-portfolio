import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pt-[138px] max-xl:pb-20">
        <div className="text-center flex flex-col xl:mt-10 2xl:mt-20 3xl:mt-0 4xl:mt-44 5xl:mt-56  3xl:pt-40 xl:text-left h-full container mx-auto hide-scrollbar">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-20"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="description max-w-sm xl:max-w-xl 2xl:max-w-2xl 5xl:max-w-6xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-20"
          >
            Full-stack developer with expertise in creating dynamic,
            user-centric applications. Let&apos;s bring your vision to life
            through innovative, scalable solutions.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
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
          className="w-full h-full xl:max-w-[600px] xl:max-h-[552px] 2xl:max-w-[737px] 2xl:max-h-[678px] 3xl:max-w-[800px] 3xl:max-h-[736px] 4xl:max-w-[1081px] 4xl:max-h-[994px] 5xl:max-w-[1730px] 5xl:max-h-[1590px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
