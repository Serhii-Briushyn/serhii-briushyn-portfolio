import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex w-full h-auto">
      <Image
        src="/avatar.png"
        alt="Photo Serhii"
        width={1474}
        height={1356}
        className="translate-z-0 w-full h-auto"
      />
    </div>
  );
};

export default Avatar;
