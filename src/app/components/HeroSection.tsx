"use client"
import { useSession, signIn, signOut } from "next-auth/react"

import React from "react"
import Image from "next/image"
type Props = {}

const HeroSection = (props: Props) => {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    // rendering components for logged in users
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
          <Image
            src={session.user?.image as string}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-2xl mb-2">
          Welcome <span className="font-bold">{session.user?.name}</span>.
          Signed In As
        </p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <button
          className="bg-red-600 py-2 px-6 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <section id="hero" className="relative">
      <div className="absolute -top-[98px] -z-10">
        <div className="relative  h-[795px] w-[1572px]">
          <Image
            src="/images/common/hero.svg"
            alt="Hero"
            fill
            className="absolute w-full min-h-full object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="relative left-0 top-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-500">xxx</div>
          <div className="bg-orange-500"></div>
        </div>
      </div>
      <p>Not Signed In</p>
      <button
        className="bg-green-400 rounded-full px-4 py-2"
        onClick={() => signIn("google")}
      >
        Sign in with google
      </button>
      <button
        className="bg-green-400 rounded-full px-4 py-2"
        onClick={() => signIn("github")}
      >
        Sign in with github
      </button>
    </section>
  )
}
export default HeroSection
