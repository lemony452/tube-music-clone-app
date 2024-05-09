import Image from "next/image";
import React from "react";
import UserIcon from "./UserIcon";

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative w-full h-full">
      <section className="absolute t-0 w-full">
        <div className="relative h-[400px]">
          <Image
            alt="background img"
            fill
            priority
            className="object-cover"
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          ></Image>
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      <section className="absolute flex">
        <UserIcon></UserIcon>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
}

export default Header;
