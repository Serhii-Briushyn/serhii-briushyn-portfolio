import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 pt-36 lg:pt-24 pb-20 px-[5%] lg:px-[10%]">
      <Circles />
      <div className="h-full w-full flex hide-scrollbar lg:items-center">
        <div className="w-full flex flex-col xl:flex-row gap-x-8 items-center xl:items-start">
          <div className="w-full flex flex-col items-center xl:items-start">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl sm:text-5xl xl:text-[3vw] leading-tight mb-6 4xl:mb-12 5xl:mb-20 xl:mt-10 font-semibold z-20"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center xl:text-start text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] max-w-[280px] sm:max-w-[500px] xl:max-w-full mb-10 xl:mb-0 text-white/60 font-light z-20"
            >
              A showcase of my recent projects, highlighting my development
              skills and commitment to creating visually appealing and
              functional digital solutions.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
