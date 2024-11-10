import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Portfolio",
          path: "/project-portfolio.jpg",
          url: "https://serhii-briushyn.github.io/js-team-project-09/",
        },
        {
          title: "PhoneBook",
          path: "/project-phone-book.jpg",
          url: "https://goit-react-hw-08-serhii-briushyn.vercel.app/",
        },
        {
          title: "Image Search",
          path: "/project-image-search.jpg",
          url: "https://goit-typescript-hw-02-serhii-briushyn.vercel.app/",
        },
        {
          title: "FilmQuest",
          path: "/project-film-quest.jpg",
          url: "https://goit-react-hw-05-serhii-briushyn.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "WatchCharm",
          path: "/project-watch-charm.jpg",
          url: "https://natasmol.github.io/team-number-16/",
        },
        {
          title: "WebStudio",
          path: "/project-web-studio.jpg",
          url: "https://serhii-briushyn.github.io/goit-markup-hw-06/",
        },
        {
          title: "My portfolio",
          path: "/project-my-portfolio.jpg",
          url: "https://serhii-briushyn-portfolio.vercel.app/",
        },
        {
          title: "ForexFinder",
          path: "/project-forex-finder.jpg",
          url: "https://react-blended-5-eosin.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      mousewheel={{ enabled: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel]}
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer mb-10 3xl:mb-12">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.url}
                    target="_blank"
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        width={1280}
                        height={720}
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div
                        className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-7 group-hover:xs:-translate-y-12
                        group-hover:sm:-translate-y-14 group-hover:md:-translate-y-20 group-hover:lg:-translate-y-24 group-hover:xl:-translate-y-20 group-hover:2xl:-translate-y-28 group-hover:3xl:-translate-y-32 group-hover:4xl:-translate-y-40 group-hover:5xl:-translate-y-64
                      "
                      >
                        <div className="flex items-center gap-x-2 text-[8px] xs:text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-[8px] xs:text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
