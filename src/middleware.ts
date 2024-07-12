import { NextResponse, NextRequest } from "next/server"
import { fallbackLng, locales } from "./app/i18n/settings"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const user = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET as string,
  })
  if (pathname.startsWith("/profile") && !user) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }
  if (pathname.startsWith("/protected") && (!user || user.role !== "admin")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

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
