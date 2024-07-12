import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions, RequestInternal, User } from "next-auth"
import { getServerSession } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()
const clientId = process.env.GITHUB_ID as string
const clientSecret = process.env.GITHUB_SECRET as string
export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
        })

        if (
          !user ||
          !(await bcrypt.compare(String(credentials.password), user.password!))
        ) {
          return null
        }
        const defaultImagePath = "/images/default.png"
        const image =
          user.image && user.image.length > 0 ? user.image : defaultImagePath
        return {
          id: user.id,
          email: user.email ?? undefined,
          name: user.name,
          image: image,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.image = user.image
      }
      return token
    },
    session: async ({ session, user, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          randomKey: token.randomKey,
          role: token.role,
        },
      }
    },
    // async signIn({ account, profile, email, credentials, user, url }) {
    //   // This is a placeholder. You might want to handle errors differently.
    //   // For example, you could log the error or redirect the user to a custom page.
    //   const urlObj = new URL(url, `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`);
    //   const error = urlObj.searchParams.get('error');

    //   if (error === 'OAuthAccountNotLinked') {
    //     // Redirect user to a custom page or handle the error as needed
    //     // This is just a placeholder redirect. Adjust according to your needs.
    //     throw new Error('OAuthAccountNotLinked');
    //   }

    //   return true; // Return true to proceed with the sign in
    // },
  },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}
