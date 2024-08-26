import styles from "./SurveyCard.module.scss";
import { IQuestionnaire } from "@/shared/types/questionnaire.types";

interface ISurveyCardProps {
  questionnaire: IQuestionnaire;
  children: React.ReactNode;
}

export default function SurveyCard({
  questionnaire,
  children,
}: ISurveyCardProps) {
  return (
    <div className={styles["survey-card-wrapper"]}>
      <div className={styles["survey-card"]}>
        <h1 className={styles["survey-card-name"]}>{questionnaire.name}</h1>
        <h2 className={styles["survey-card-specialty"]}>
          {questionnaire.profession}
        </h2>
        <p className={styles["survey-card-description"]}>
          {questionnaire.description}
        </p>

        {children}
      </div>
    </div>
  );
}
