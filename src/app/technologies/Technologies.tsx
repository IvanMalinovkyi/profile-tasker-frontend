"use client";

import Heading from "@/shared/ui/Heading";
import styles from "./Technologies.module.scss";
import { useQuery } from "@tanstack/react-query";
import { technologyService } from "@/shared/services/technology.service";
import Loading from "../loading";

export default function Technologies() {
  const { data: response, isLoading } = useQuery({
    queryKey: ["get technologies"],
    queryFn: () => technologyService.getAll(),
    retry: false,
  });

  const technologies = response?.data ?? [];

  return isLoading ? (
    <Loading />
  ) : (
    <section className={styles.container}>
      <Heading
        size="text-5xl"
        title="Використані технології"
        font="font-bold"
      />
      <div className={styles["container-wrap"]}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={styles.card}>
            <h2 className={styles.techName}>{tech.name}</h2>
            <p className={styles.version}>{tech.version}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
