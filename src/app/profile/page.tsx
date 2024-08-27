import { Metadata } from "next";
import ProfilePage from "./Profile";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";

export const metadata: Metadata = {
  title: "Profile",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <ProfilePage />;
}
