import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/assets/styles/globals.scss";
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants";
import { ReactQueryClientProviders } from "./ReactQueryClientProvider";
import Navbar from "@/shared/ui/navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(process.env.APP_URL as string),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>
        <ReactQueryClientProviders>
          <Navbar />
          {children}
        </ReactQueryClientProviders>
      </body>
    </html>
  );
}
