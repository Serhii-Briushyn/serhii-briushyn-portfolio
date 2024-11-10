import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="z-10">
      <Link
        href={"/work"}
        className="relative w-[130px] h-[130px] 2xl:w-[170px] 2xl:h-[170px] 3xl:w-[220px] 3xl:h-[220px] 4xl:w-[260px] 4xl:h-[260px] 5xl:w-[320px] 5xl:h-[320px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={148}
          height={148}
          alt="Rounded text"
          className="animate-spin-slow w-[100px] h-[100px] 2xl:w-[130px] 2xl:h-[130px] 3xl:w-[170px] 3xl:h-[170px] 4xl:w-[200px] 4xl:h-[200px] 5xl:w-[260px] 5xl:h-[260px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 w-7 h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 5xl:w-16 5xl:h-16" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
