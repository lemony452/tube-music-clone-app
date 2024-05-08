"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus, FiHome, FiMusic, FiCompass } from "react-icons/fi";

import { cn } from "@/lib/utils";

function Navigator() {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <FiHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div className="flex flex-col gap-5">
      <section className="flex flex-col gap-3 p-4">
        {routes.map((route) => (
          <Link href={route.href} key={route.label}>
            <div
              className={cn(
                "flex flex-row rounded-lg gap-2 items-center p-2 hover:bg-neutral-700",
                route.isActive && "bg-neutral-800"
              )}
            >
              {route.icon}
              <span>{route.label}</span>
            </div>
          </Link>
        ))}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>
      <section className="px-6">
        <div className="p-2 flex flex-row items-center justify-center gap-2 rounded-full font-[200] bg-neutral-700 cursor-pointer hover:bg-neutral-600">
          <FiPlus size={24}></FiPlus>
          <span>새 재생목록</span>
        </div>
      </section>
    </div>
  );
}

export default Navigator;
