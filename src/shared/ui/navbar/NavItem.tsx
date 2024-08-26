"use client";

import Link from "next/link";
import cn from "clsx";
import { usePathname } from "next/navigation";
import { INavItem } from "@/shared/types/nav-item.types";

export default function NavItem({ item, isMobile = false, onClick }: INavItem) {
  const pathName = usePathname();

  return (
    <div
      onClick={onClick}
      className={cn(
        "px-4 py-2 cursor-pointer text-gray-700 font-semibold",
        isMobile ? "px-4 capitalize py-6 text-2xl" : "",
        pathName === item.link
          ? "text-white border rounded-md bg-violet-600"
          : ""
      )}>
      <Link href={item.link}>{item.name}</Link>
    </div>
  );
}
