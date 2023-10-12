"use client";

import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      {theme === "dark" ? (
        <BsSun
          size={32}
          className=" text-white px-2 py-2 w-full h-full rounded-full cursor-pointer transition-all delay-75 bg-[#1a1a1a]"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiMoon
          size={32}
          className=" text-white px-2 py-2 w-full h-full rounded-full cursor-pointer transition-all delay-75 bg-[#1a1a1a]"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ToggleButton;
