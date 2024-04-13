import { createTranslation } from "@/app/i18n/server"

const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "about")

  return (
    <div>
      <h1>{t("aboutThisPage")}</h1>
    </div>
  )
}

export default AboutPage
