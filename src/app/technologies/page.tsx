import { Metadata } from "next";
import Technologies from "./Technologies";

export const metadata: Metadata = {
  title: "Technologies",
};

export default function Page() {
  return <Technologies />;
}
