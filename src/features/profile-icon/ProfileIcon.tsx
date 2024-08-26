"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ProfileIcon.module.scss";
import { useRouter } from "next/navigation";
import { PAGES } from "@/shared/config/routes";
import { IUser } from "@/shared/types/auth.types";

interface Props {
  user: IUser;
  onClick?: () => void;
}

export const ProfileIcon = ({ user, onClick }: Props) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const navigateToProfile = () => {
    closeDropdown();
    router.push(PAGES.PROFILE);
  };

  const handleLogout = () => {
    closeDropdown();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles["profile-icon__container"]}>
      <div
        className={styles["profile-icon__button"]}
        onClick={toggleDropdown}>
        <div className={styles["profile-icon__icon"]}>
          {user?.name?.charAt(0) || "A"}
        </div>
        <ChevronDown
          size={20}
          strokeWidth={2.25}
        />
      </div>
      {isDropdownOpen && (
        <div className={styles["profile-icon__dropdown-menu"]}>
          <button
            className={styles["profile-icon__dropdown-menu-item"]}
            onClick={navigateToProfile}>
            Профіль
          </button>
          <button
            className={styles["profile-icon__dropdown-menu-item"]}
            onClick={() => handleLogout()}>
            Вийти
          </button>
        </div>
      )}
    </div>
  );
};
