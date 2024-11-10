import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center lg:pl-[10%] lg:pr-[10%] ">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 4xl:py-14 5xl:py-20">
          <Link href={"/"} className="flex h-auto w-[200px] xl:w-[20%]">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={737}
              height={94}
              priority={true}
              className="w-full h-auto"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
