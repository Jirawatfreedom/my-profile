import HeroSection from "../components/HeroSection"
import { createTranslation } from "../i18n/server"
import { LocaleType } from "../i18n/settings"

const IndexPage = async ({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) => {
  const { t } = await createTranslation(locale, "home")
  // const notify = () => toast("Wow so easy!")
  return (
    <div className="container ">
      <HeroSection />
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <ToastContainer /> */}
      {/* <Marquee /> */}
      {/* <h1>{t("greeting")}</h1>
      <hr className="my-4" />
      <BuiltInFormatsDemo />
      <hr className="my-4" />
      <SubscribeForm locale={locale} /> */}
    </div>
  )
}

export default IndexPage
