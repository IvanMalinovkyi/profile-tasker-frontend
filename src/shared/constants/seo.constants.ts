export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };
export const SITE_NAME = "Profile tasker";
export const SITE_DESCRIPTION =
  "Сайт візитка з можливістю перегляду та редагування анкет";

export const OPEN_GRAPH = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_APP_URL,
  type: "website",
};

export const TWITTER = {
  card: "summary_large_image",
  site: process.env.NEXT_PUBLIC_APP_URL,
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export const AUTHORS = [
  {
    name: SITE_NAME,
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
];
