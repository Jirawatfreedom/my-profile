import { createTranslation } from "@/app/i18n/server"

const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  const { t } = await createTranslation(locale, "about")

  return (
    <div className="container">
      <h1>{t("aboutThisPage")}</h1>
    </div>
  )
}

export default AboutPage
