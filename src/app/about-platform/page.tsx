import { Metadata } from "next";
import AboutPlatform from "./AboutPlatform";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return <AboutPlatform />;
}
