"use client";

import React from "react";
import IconButton from "./IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiYoutubemusic } from "react-icons/si";
import { useRouter } from "next/navigation";

function Logo() {
  const { push } = useRouter();

  const onClickLogo = () => push("/");

  return (
    <section className="flex flex-row items-center gap-2">
      <IconButton icon={<RxHamburgerMenu size={24} />}></IconButton>
      <div className="cursor-pointer flex flex-row gap-1" onClick={onClickLogo}>
        <SiYoutubemusic color="red" size={24}></SiYoutubemusic>
        <div className="text-xl">Tube Music</div>
      </div>
    </section>
  );
}

export default Logo;
