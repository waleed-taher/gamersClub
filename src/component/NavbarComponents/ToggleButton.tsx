"use client";

import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <div className="flex-1 lg:flex-none" onClick={() => setTheme("light")}>
          <BsSun className="h-8 w-8 cursor-pointer text-green-400 sm:h-10 sm:w-10" />
        </div>
      ) : (
        <div className="flex-1 lg:flex-none" onClick={() => setTheme("dark")}>
          <BiMoon className="h-8 w-8 cursor-pointer text-green-400 sm:h-8 sm:w-8" />
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
