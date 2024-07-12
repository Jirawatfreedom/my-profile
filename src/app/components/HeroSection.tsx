"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Session } from "next-auth"
import { FaGithub, FaGoogle } from "react-icons/fa"
import SkeletonLoading from "./SkeletonLoading"

type SignedInSectionProps = {
  session: Session
}

const SignedInSection = ({ session }: SignedInSectionProps) => (
  <div className="w-full h-screen flex flex-col justify-center items-center">
    <div className="w-44 h-44 relative mb-4">
      <Image
        src={session.user?.image as string}
        fill
        alt=""
        className="object-cover rounded-full"
      />
    </div>
    <div className="flex flex-row">
      <p className="text-2xl mb-2">
        Welcome <span className="font-bold">{session.user?.name}</span>
      </p>
    </div>

    <div className="flex ">
      EMAIL:<p className="font-bold mb-4">{session.user?.email}</p>
    </div>
    <div className="flex ">
      ROLE:<p className="font-bold mb-4">{session.user?.role}</p>
    </div>
    <button
      className="bg-red-600 py-2 px-6 rounded-md"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  </div>
)

const NotSignedInSection = () => (
  <section
    id="hero"
    className="flex flex-col items-center justify-center h-screen bg-gray-900"
  >
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
        <p className="mb-8">Sign in to access exclusive content</p>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            onClick={() => signIn("google")}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <div>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            onClick={() => signIn("github")}
          >
            <FaGithub className="mr-2" />
            Sign in with GitHub
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            onClick={() => signIn("credentials")}
          >
            {/* You can replace the text and styling as needed */}
            Sign in with Credentials
          </button>
        </div>
      </div>
    </div>
  </section>
)

const HeroSection = () => {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (status === "loading") {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [status])
  if (loading === true) {
    return <SkeletonLoading />
  }
  if (session) {
    return <SignedInSection session={session} />
  }
  return <NotSignedInSection />
}

export default HeroSection
