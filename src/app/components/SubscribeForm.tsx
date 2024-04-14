import React from "react"
import { createTranslation } from "../i18n/server"
import { LocaleType } from "../i18n/settings"

const SubscribeForm = async ({ locale }: { locale: string }) => {
  const { t } = await createTranslation(
    locale as LocaleType,
    "newsletter"
  )

  return (
    <section className="w-[350px]">
      <h3>{t("title")}</h3>
      <h4>{t("subtitle")}</h4>

      <form className="flex flex-col items-start">
        <input placeholder={t("form.firstName")} className="form-field" />
        <input placeholder={t("form.email")} className="form-field" />
        <button className="form-field">{t("form.action.signUp")}</button>
        <button className="form-field">{t("form.action.cancel")}</button>
      </form>
    </section>
  )
}

export default SubscribeForm
