import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./shared/services/auth-token.service";
import { PAGES } from "./shared/config/routes";

export function middleware(request: NextRequest) {
  console.log("RUNNING");
  const { url, cookies } = request;

  const res = NextResponse.next();

  const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

  const isAuthPage = url.includes(PAGES.AUTH);
  const isProfilePage = url.includes(PAGES.PROFILE);
  const isQuestionnairePage = url.includes(PAGES.QUESTIONNAIRE);

  if (isAuthPage) {
    if (accessToken) {
      return NextResponse.redirect(new URL(PAGES.HOME, url));
    }
    return res;
  }

  if (!accessToken && isProfilePage) {
    return NextResponse.redirect(new URL(PAGES.HOME, url));
  }

  if (!accessToken && isQuestionnairePage) {
    return NextResponse.redirect(new URL(PAGES.AUTH, url));
  }

  return res;
}

export const config = {
  matcher: ["/auth", "/profile", "/questionnaire"],
};
