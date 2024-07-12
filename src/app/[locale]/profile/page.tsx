import HeroSection from "@/app/components/HeroSection"
import { createTranslation } from "@/app/i18n/server"

const ProfilePage = async ({
  params: { locale },
}: {
  params: { locale: any }
}) => {
  if (!locale) {
    return null
  }
  const { t } = await createTranslation(locale, "profile")
  return (
    <div className="container">
      <h1>{t("about-this-page")}</h1>
      <HeroSection />
    </div>
  )
}

export default ProfilePage
