import { IMenuItem } from "./menu.types";

export interface INavItem {
  item: IMenuItem;
  isMobile?: boolean;
  onClick?: () => void;
}
