"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { navbarMenu } from "./menu.data";
import NavItem from "./NavItem";
import styles from "./Navbar.module.scss";
import { ProfileIcon } from "@/features/profile-icon/ProfileIcon";
import Loader from "../Loader";
import { PAGES } from "@/shared/config/routes";
import { usePathname, useRouter } from "next/navigation";
import {
  useGetUserProfile,
  useLogoutUser,
} from "@/shared/hooks/useUserMutation";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isSuccess } = useGetUserProfile();
  const { mutate: logoutUser, isLogoutSuccess } = useLogoutUser();
  const [isMobile, setIsMobile] = useState(false);
  const loginPaths = { link: PAGES.AUTH, name: "Увійти" };
  const isAuthPage = pathname === "/auth";

  const logout = () => {
    logoutUser();

    if (isMobile) {
      setIsMobile(!isMobile);
    }

    if (isLogoutSuccess) {
      console.log("isLogoutSuccess:", isLogoutSuccess);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push(PAGES.AUTH);
    }
  };

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logo}>
        My Skills
      </Link>

      <nav className={styles.nav}>
        {navbarMenu.map((item) => (
          <NavItem
            key={item.link}
            item={item}
          />
        ))}
        {isAuthPage ? null : isLoading ? (
          <Loader
            width={30}
            height={30}
          />
        ) : user && isSuccess ? (
          <ProfileIcon
            user={user}
            onClick={logout}
          />
        ) : (
          <NavItem
            key={loginPaths.link}
            item={loginPaths}
          />
        )}
      </nav>

      <div
        onClick={() => setIsMobile(!isMobile)}
        className={styles["menu-icon"]}>
        {isMobile ? <X /> : <Menu />}
      </div>

      {isMobile && (
        <nav className={styles["mobile-menu"]}>
          {user && isSuccess ? (
            <NavItem
              isMobile
              key={"Профіль"}
              onClick={() => setIsMobile(!isMobile)}
              item={{ link: "/profile", name: "Профіль" }}
            />
          ) : (
            <NavItem
              key={"Увійти"}
              item={loginPaths}
              isMobile
              onClick={() => setIsMobile(!isMobile)}
            />
          )}
          {navbarMenu.map((item) => (
            <NavItem
              key={item.link}
              item={item}
              isMobile
              onClick={() => setIsMobile(!isMobile)}
            />
          ))}

          {user && isSuccess && (
            <NavItem
              key="Вийти"
              item={{ link: "/logout", name: "Вийти" }}
              isMobile
              onClick={logout}
            />
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
