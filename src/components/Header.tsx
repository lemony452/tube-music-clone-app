"use client";

import Image from "next/image";
import React, { useState } from "react";
import SideBar from "./SideBar";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import Logo from "@/components/Logo";
import Navigator from "@/components/Navigator";

import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer direction="left" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션+재생목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isDrawerOpen={isDrawerOpen}
              onClickClose={() => setIsDrawerOpen(false)}
            ></Logo>
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

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
      <section className="sticky">
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between">
            <article className="hidden lg:flex flex-row items-center gap-4 p-2 bg-[rgba(0,0,0,0.14)] rounded-lg min-x-[480px]">
              <FiSearch size={24} />
              <input
                className="w-full h-full bg-transparent"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <article className="lg:hidden">
              <HeaderDrawer>
                <Logo></Logo>
              </HeaderDrawer>
            </article>
            <article className="flex flex-row items-center gap-3">
              <FaChromecast size={26}></FaChromecast>
              <UserIcon></UserIcon>
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}

export default Header;
