import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed top-0 bottom-0 xl:right-[2%] w-full xl:w-max h-max xl:h-screen z-50 mt-auto">
      <div className="flex w-full items-center justify-between xl:flex-col xl:justify-center gap-y-10 4xl:gap-y-14 5xl:gap-y-20 px-4 md:px-40 xl:px-6 4xl:px-9 5xl:px-12 h-[80px] xl:h-max py-8 4xl:py-12 5xl:py-16 bg-white/10 backdrop-blur-sm text-3xl xl:text-[1.6vw] xl:leading-normal xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14 right-0 5xl:right-14 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-xs 4xl:text-lg 5xl:text-2xl font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
