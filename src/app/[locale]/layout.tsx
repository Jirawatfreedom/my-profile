import React from "react"
import Header from "../components/Header"
import { GoogleTagManager } from "@next/third-parties/google"
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <Header />
      {children}
    </>
  )
}

export default Layout
