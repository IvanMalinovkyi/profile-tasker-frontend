import { PAGES } from "@/shared/config/routes";
import { IMenuItem } from "@/shared/types/menu.types";

export const navbarMenu: IMenuItem[] = [
  {
    link: PAGES.ABOUT_PLATFORM,
    name: "Про платформу",
  },
  {
    link: PAGES.TECHNOLOGIES,
    name: "Наші технології",
  },
  {
    link: PAGES.QUESTIONNAIRE,
    name: "Анкети",
  },
];
