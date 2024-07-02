import Signin from "@/app/components/login/Signin"
import { createTranslation } from "@/app/i18n/server"

const LoginPage = async ({
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
      <h1>Welcome Login Page</h1>
      <Signin />
    </div>
  )
}

export default LoginPage
