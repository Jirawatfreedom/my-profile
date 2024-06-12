import { NextResponse, NextRequest } from "next/server"
import { fallbackLng, locales } from "./app/i18n/settings"
// import { getSession, useSession } from "next-auth/react"

export async function middleware(request: NextRequest) {
  // const session = await getSession({ req: request })
  // const session = await getSession({ req: request })
  // const { data: session } = useSession()

  // if (!session) {
  //   return NextResponse.redirect("/api/auth/signin")
  // }

  const pathname = request.nextUrl.pathname

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
