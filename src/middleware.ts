import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { EnumTokens } from "./shared/services/auth-token.service";
import { PAGES } from "./shared/config/routes";

export function middleware(request: NextRequest) {
  console.log("RUNNING");
  const res = NextResponse.next();
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
  const isAuthPage = request.url.includes(PAGES.AUTH);
  const isProfilePage = request.url.includes(PAGES.PROFILE);
  const isQuestionnairePage = request.url.includes(PAGES.QUESTIONNAIRE);

  if (isAuthPage) {
    console.log("accessToken1:", accessToken);
    if (!!accessToken) {
      return NextResponse.redirect(new URL(PAGES.HOME, request.url));
    }
    return res;
  }

  if (!accessToken && isProfilePage) {
    return NextResponse.redirect(new URL(PAGES.HOME, request.url));
  }

  //if (isQuestionnairePage) {
  //  console.log("accessToken2:", accessToken);
  //  if (!Boolean(accessToken)) {
  //    return NextResponse.redirect(new URL(PAGES.AUTH, request.url));
  //  }
  //  return res;
  //}

  return res;
}

export const config = {
  matcher: ["/auth", "/profile", "/questionnaire"],
};
