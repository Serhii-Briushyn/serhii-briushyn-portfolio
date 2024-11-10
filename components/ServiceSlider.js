import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper";
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
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      loop={true}
      mousewheel={{ enabled: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel]}
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between h-[192px] sm:h-[240px] lg:h[260px] xl:h-[35vh] px-5 py-3 sm:py-5 lg:p-6 3xl:p-8 4xl:p-10 5xl:p-16 bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] rounded-lg group cursor-pointer transition-all duration-300 hide-scrollbar mb-10 3xl:mb-12">
              <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-8xl text-accent">
                {item.icon}
              </div>
              <div className="hide-scrollbar">
                <div className="text-base sm:text-xl xl:text-[1.2vw] xl:leading-[1.8] mb-2">
                  {item.title}
                </div>
                <p className="text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8]">
                  {item.description}
                </p>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-8xl flex justify-end">
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
