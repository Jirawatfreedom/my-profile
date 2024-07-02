import Profile from "@/app/components/profile/Profile"
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
      <h1>{t("aboutThisPage")}</h1>
      <Profile />
    </div>
  )
}

export default ProfilePage
