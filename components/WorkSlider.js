import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
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
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
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
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
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
