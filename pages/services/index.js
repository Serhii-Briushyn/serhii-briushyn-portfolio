import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 pt-36 lg:pt-24 pb-20 px-[5%] lg:px-[10%]">
      <Circles />
      <div className="h-full w-full flex hide-scrollbar lg:items-center">
        <div className="w-full flex flex-col gap-x-8 items-center">
          <div className="w-full flex flex-col items-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl sm:text-5xl xl:text-[3vw] leading-tight mb-6 4xl:mb-12 5xl:mb-20 font-semibold z-20"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] max-w-[280px] sm:max-w-[400px] xl:max-w-[50%] mb-10 xl:mb-12 4xl:mb-12 5xl:mb-20 text-white/60 font-light z-20"
            >
              I offer a full range of services to create and develop your online
              project. My goal is to provide you with solutions that work
              efficiently and capture attention.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-sm sm:max-w-lg lg:max-w-full "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
