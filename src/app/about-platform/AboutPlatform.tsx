import Heading from "@/shared/ui/Heading";
import { features } from "./AboutPlatform.data";
import styles from "./AboutPlatform.module.scss";

export default function AboutPlatform() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Heading
          size="text-5xl"
          title="My Skills"
          font="font-bold"
        />
        <p className={styles.subtitle}>
          Платформа, створена для ефективного представлення та просування ваших
          професійних навичок у цифровому світі.
        </p>

        <div className={styles["feature-wrap"]}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.feature} ${
                index % 2 === 0 ? styles["feature--even"] : ""
              }`}>
              <h2 className={styles["feature-title"]}>{feature.title}</h2>
              <p className={styles["feature-text"]}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
