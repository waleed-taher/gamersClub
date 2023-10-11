"use client";
import { Allplatforms } from "@/lib/utils/services";
import { platformPropData } from "@/lib/utils/typeProps";
import { useEffect, useState } from "react";

interface ButtonProps {
  title: string;
  onClick: (platforms: number) => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  const [platform, setPlatform] = useState<platformPropData[] | null>(null);
  useEffect(() => {
    async function getPlatforms() {
      const platform3 = await Allplatforms();
      return setPlatform(platform3.slice(0, 9));
    }
    getPlatforms();
  }, []);
  return (
    <details className="dropdown">
      <summary className="m-1 btn">{title}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          {platform?.map((plat: platformPropData) => (
            <button key={plat.id} onClick={() => onClick(plat.id)}>
              {plat.name}
            </button>
          ))}
        </li>
      </ul>
    </details>
  );
};

export default Button;
