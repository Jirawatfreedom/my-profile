"use client"
import { Fragment } from "react"
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  Transition,
} from "@headlessui/react"
import { FaTimes, FaBars, FaBell } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { LocaleTypes } from "../i18n/settings"
import { useTranslation } from "../i18n/client"
import ChangeLocale from "./ChangeLocale"
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]

const Navigation = () => {
  const pathName = usePathname()
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, "common")
  return (
    <header>
      <Disclosure
        as="nav"
        className="fixed top-0 z-50 w-full backdrop-blur-3xl bg-transparent"
      >
        {({ open }) => (
          <div className="container w-full">
            <div className="">
              <div className="relative flex items-center justify-between h-16 md:h-20 lg:h-24 ">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
                    {open ? (
                      <FaTimes
                        className="block h-6 w-6 text-gray-600"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaBars
                        className="block h-6 w-6 text-gray-600"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-row justify-between h-full space-x-4 w-full">
                  <div className="flex space-x-7 w-3/5">
                    <Link
                      href={`/${locale}`}
                      className="flex items-center py-4 px-2 space-x-4"
                    >
                      <div className="w-[30px] h-[30px] relative flex items-center justify-center">
                        <Image
                          src="/images/common/logo.png"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt="Logo"
                          fill
                          className="absolute w-full min-h-full object-cover object-center"
                        />
                      </div>
                      <span className=" text-[#16f2b3] text-3xl font-bold  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        {t("jirawat")}
                      </span>
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center space-x-1 w-full ">
                    <div className="flex flex-row justify-between w-full">
                      <div>
                        <a
                          className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                            pathName === `/${locale}/about` ||
                            pathName === "/about"
                              ? "text-green-500 border-b-4 border-green-500"
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
                              ? "text-green-500 border-b-4 border-green-500"
                              : "text-gray-500"
                          }`}
                          href={`/${locale}/experiences`}
                        >
                          {t("experiences")}
                        </a>
                        <a
                          className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                            pathName === `/${locale}/skills` ||
                            pathName === "/skills"
                              ? "text-green-500 border-b-4 border-green-500"
                              : "text-gray-500"
                          }`}
                          href={`/${locale}/skills`}
                        >
                          {t("skills")}
                        </a>
                        <a
                          className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                            pathName === `/${locale}/education` ||
                            pathName === "/education"
                              ? "text-green-500 border-b-4 border-green-500"
                              : "text-gray-500"
                          }`}
                          href={`/${locale}/education`}
                        >
                          Education
                        </a>
                        <a
                          className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                            pathName === `/${locale}/blogs` ||
                            pathName === "/blogs"
                              ? "text-green-500 border-b-4 border-green-500"
                              : "text-gray-500"
                          }`}
                          href={`/${locale}/blogs`}
                        >
                          Blogs
                        </a>
                        <a
                          className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                            pathName === `/${locale}/projects` ||
                            pathName === "/projects"
                              ? "text-green-500 border-b-4 border-green-500"
                              : "text-gray-500"
                          }`}
                          href={`/${locale}/projects`}
                        >
                          Projects
                        </a>
                      </div>
                      <div>
                        <ChangeLocale />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DisclosurePanel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </header>
  )
}
export default Navigation
