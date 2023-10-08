import { APP_IMAGES } from "@/constant/images";
import Image from "next/image";
import Search from "../NavbarComponents/Search";
import ToggleButton from "../NavbarComponents/ToggleButton";

const Navbar = () => {
  return (
    <header className="text-black dark:text-white">
      <div>
        <Image src={APP_IMAGES.logo} alt="Rawg Logo" width={40} height={40} />
      </div>

      {/* search icon */}
      <Search />

      {/* toggle Button */}
      <ToggleButton />
    </header>
  );
};

export default Navbar;
