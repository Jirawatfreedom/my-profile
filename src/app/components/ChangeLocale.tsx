"use client"
import React from "react"
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation"

const ChangeLocale = () => {
  const router = useRouter()
  const params = useParams()
  const urlSegments = useSelectedLayoutSegments()
  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}/${urlSegments.join("/")}`)
  }

  return (
    <div className="flex flex-row justify-between">
      <button onClick={() => handleLocaleChange("en")}>
        <span
          className={`${
            params.locale === "en"
              ? "underline decoration-2 text-green-500 font-bold"
              : ""
          }`}
        >
          EN
        </span>
      </button>
      <div className="text-white px-2">|</div>
      <button onClick={() => handleLocaleChange("th")}>
        <span
          className={`${
            params.locale === "th"
              ? "underline decoration-2 text-green-500 font-bold"
              : ""
          }`}
        >
          TH
        </span>
      </button>
    </div>
  )
}

export default ChangeLocale
