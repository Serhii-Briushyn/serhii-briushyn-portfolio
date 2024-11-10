import Link from "next/link";
import {
  RiLinkedinLine,
  RiTelegramLine,
  RiGithubLine,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 xl:gap-x-7 2xl:gap-x-8 3xl:gap-x-10 4xl:gap-x-14 5xl:gap-x-20 text-xl xl:text-[1.5vw] xl:leading-normal">
      <Link
        href="https://www.linkedin.com/in/serhii-briushyn/"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://t.me/sbriushyn"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiTelegramLine />
      </Link>
      <Link
        href="https://wa.me/421940335330"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href="mailto:serhii.briushyn@icloud.com"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href="https://github.com/Serhii-Briushyn"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
