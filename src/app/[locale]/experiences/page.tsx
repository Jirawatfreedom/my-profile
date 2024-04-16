import { createTranslation } from "@/app/i18n/server"

const ContactPage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  const { t } = await createTranslation(locale, "experiences")

  return (
    <div className="container">
      <h1>{t("title")}</h1>
    </div>
  )
}

export default ContactPage
