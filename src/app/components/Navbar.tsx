"use client"
import { usePathname, useParams } from "next/navigation"
import Link from "next/link"
import ChangeLocale from "./ChangeLocale"
import { LocaleTypes } from "../i18n/settings"
import { useTranslation } from "../i18n/client"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
const Navbar = () => {
  const pathName = usePathname()
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, "common")
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <nav className="fixed top-0 w-full bg-gray-400 shadow-lg h-16 md:h-20 lg:h-24 flex flex-row items-center">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="flex space-x-7">
              <Link
                href={`/${locale}`}
                className="flex items-center py-4 px-2 space-x-4"
              >
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src="/images/common/logo.png"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Logo"
                    fill
                    className="absolute w-full min-h-full object-cover object-center"
                  />
                </div>
                <span className=" text-[#16f2b3] text-3xl font-bold ">
                  {t("jirawat")}
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                  pathName === `/${locale}/about` || pathName === "/about"
                    ? "text-blue-700 border-b-4 border-purple-500"
                    : "text-gray-500"
                }`}
                href={`/${locale}/about`}
              >
                {t("about")}
              </a>
              <a
                className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                  pathName === `/${locale}/experiences` ||
                  pathName === "/experiences"
                    ? "text-blue-700 border-b-4 border-purple-500"
                    : "text-gray-500"
                }`}
                href={`/${locale}/experiences`}
              >
                {t("experiences")}
              </a>
              <a
                className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                  pathName === `/${locale}/skills` || pathName === "/skills"
                    ? "text-blue-700 border-b-4 border-purple-500"
                    : "text-gray-500"
                }`}
                href={`/${locale}/skills`}
              >
                {t("skills")}
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Education
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Blogs
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Projects
              </a>
              <ChangeLocale />
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none menu-button">
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href="nav.html"
                    className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact Us"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
