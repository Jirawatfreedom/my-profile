import SkeletonLoading from "@/app/components/SkeletonLoading"
import { createTranslation } from "@/app/i18n/server"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const LoginForm = dynamic(
  () =>
    import("@/app/components/login/LoginForm").then((module) => module.default),
  {
    loading: () => <SkeletonLoading />,
    ssr: false,
  }
)
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
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
            <Suspense fallback={<SkeletonLoading />}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage
