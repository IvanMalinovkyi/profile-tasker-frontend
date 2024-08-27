import { Metadata } from "next";
import QuestionnairePage from "./Questionnaire";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";

export const metadata: Metadata = {
  title: "Questionnaire",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <QuestionnairePage />;
}
