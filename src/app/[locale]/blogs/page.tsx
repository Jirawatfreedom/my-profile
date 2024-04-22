import TestComponent from "@/app/components/TestComponent"
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
      <TestComponent />
    </div>
  )
}

export default AboutPage
