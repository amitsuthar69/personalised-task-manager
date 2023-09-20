"use client";

import { useState } from "react";
import Image from "next/image";
import Providers from "./Providers";
import ThemeButton from "./ThemeButton";
import DropDownMenu from "./DropDownMenu";

export default function Header() {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsDropdownMenuVisible(!isDropdownMenuVisible);
  };

  return (
    <Providers>
      <header>
        <nav className="bg-[#3400B3] dark:bg-[#1F1B24] drop-shadow-lg p-4 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl text-white">Task Manager</h1>
          <div className="flex gap-3 items-center">
            <ThemeButton />
            <Image
              src="/weather.svg"
              alt="weather_svg"
              width={25}
              height={25}
              priority
            />
            <Image
              onClick={handleHamburgerMenuClick}
              src="/user.svg"
              alt="user_svg"
              width={25}
              height={25}
              priority
            />
          </div>
        </nav>
        <div className="absolute right-0">
          {isDropdownMenuVisible && <DropDownMenu />}
        </div>
      </header>
    </Providers>
  );
}
