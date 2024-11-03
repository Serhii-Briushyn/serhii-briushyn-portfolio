import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { SiBackendless, SiFrontendmentor } from "react-icons/si";
import {
  RxDesktop,
  RxPencil2,
  RxRocket,
  RxArrowTopRight,
  RxMobile,
} from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Fullstack Development",
    description:
      "Comprehensive full-stack application development, including both frontend and backend solutions.",
  },
  {
    icon: <SiFrontendmentor />,
    title: "Frontend Development",
    description:
      "Creating adaptive and interactive user interfaces for an enhanced user experience across all devices.",
  },
  {
    icon: <SiBackendless />,
    title: "Backend Development",
    description:
      "Building reliable and scalable server-side solutions with a focus on security and performance.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile app development that runs smoothly on both iOS and Android.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    description:
      "Optimizing websites to improve visibility in search engines and attract targeted traffic.",
  },
  {
    icon: <RxPencil2 />,
    title: "Basic UI Setup",
    description:
      "Setting up basic user interfaces using pre-built components and libraries.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[270px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-[220px] sm:h-[290px] rounded-lg px-6 py-8 flex sm:flex-col justify-between gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent sm:mb-4">{item.icon}</div>
              <div className="sm:mb-8 hide-scrollbar">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
