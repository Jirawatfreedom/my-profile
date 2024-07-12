import TestComponent from "@/app/components/TestComponent"
import { createTranslation } from "@/app/i18n/server"

const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  if (!locale) {
    return null
  }
  const { t } = await createTranslation(locale, "about")
  return (
    <div className="container">
      <h1>{t("about-this-page")}</h1>
      <TestComponent />
    </div>
  )
}

export default AboutPage
