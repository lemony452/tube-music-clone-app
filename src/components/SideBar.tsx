import React from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";

function SideBar({ children }: any) {
  return (
    <div className="flex h-full">
      <aside className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </aside>
      <div className="flex-auto">{children}</div>
    </div>
  );
}

export default SideBar;
