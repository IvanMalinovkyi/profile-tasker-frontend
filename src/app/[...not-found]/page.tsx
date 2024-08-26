import { PAGES } from "@/shared/config/routes";
import Link from "next/link";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import styles from "./NotFound.module.scss";
import Heading from "@/shared/ui/Heading";

export const metadata: Metadata = {
  title: "Сторінка не існує",
  ...NO_INDEX_PAGE,
};

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.area}>
        <Heading title="404.Сторінку не знайдено"></Heading>
        <p className={styles.info}>Хм,схоже,ця сторінка не існує.</p>
        <Link
          className={styles.link}
          href={PAGES.HOME}>
          Перейти на головну
        </Link>
      </div>
    </div>
  );
}
