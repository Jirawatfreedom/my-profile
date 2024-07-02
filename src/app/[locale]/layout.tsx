import React from "react"
import Header from "../components/Header"
import { GoogleTagManager } from "@next/third-parties/google"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <Navigation />
      <main className="min-h-screen relative mx-auto text-white overflow-hidden mt-16 md:mt-20 lg:mt-24">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
