import { createTranslation } from "@/app/i18n/server"

const ContactPage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  const { t } = await createTranslation(locale, "contact")

  return (
    <div className="container">
      <h1>{t("about-this-page")}</h1>
    </div>
  )
}

export default ContactPage
