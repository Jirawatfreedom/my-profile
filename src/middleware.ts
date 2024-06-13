import { NextResponse, NextRequest } from "next/server"
import { fallbackLng, locales } from "./app/i18n/settings"
// import { getServerSession } from "next-auth/next"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // const session = await getServerSession(request)

  // if (!session) {
  //   return NextResponse.redirect("/login")
  // }
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      )
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico|images|fonts|sitemap.xml|robots.txt).*)",
}
