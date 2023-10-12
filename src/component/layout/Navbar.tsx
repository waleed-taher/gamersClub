import { APP_IMAGES } from "@/constant/images";
import Image from "next/image";
import Search from "../NavbarComponents/Search";
import ToggleButton from "../NavbarComponents/ToggleButton";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mx-10 py-4 lg:gap-40 max-lg:gap-4 max-lg:mx-4 ">
      <div className="">
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
