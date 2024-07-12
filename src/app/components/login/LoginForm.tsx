"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { LoginUserInput, loginUserSchema } from "@/app/lib/user-schema"
import { toast } from "react-toastify"
import { LocaleTypes } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"

const LoginForm = () => {
  const pathName = usePathname()
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, "common")
  const { t: tError } = useTranslation(locale, "error")

  const router = useRouter()
  // const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") ?? "/profile"

  // const methods = useForm<LoginUserInput>({
  //   resolver: zodResolver(loginUserSchema),
  // })

  // const {
  //   reset,
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = methods
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  })

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    console.log("values", values)
    try {
      setSubmitting(true)

      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      })

      console.log("SignIn response", res)

      if (res?.error) {
        if (res.error === "credentials-signin") {
          toast.error(tError("credentials-signin"))
        } else {
          setError("root", {
            type: "manual",
            message: tError("credentials-signin"),
          })
        }
      }
      if (res?.ok) {
        toast.success("Successfully logged in")
        router.push(callbackUrl)
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      )
    } finally {
      setSubmitting(false)
    }
  }

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {errors?.root && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">
          {errors?.root?.message}
        </p>
      )}
      <div className="mb-6">
        <input
          type="email"
          {...register("email")}
          placeholder="Email address"
          className={`${input_style}`}
        />
        {errors["email"] && (
          <span className="text-red-500 text-xs pt-1 block">
            {errors["email"]?.message as string}
          </span>
        )}
      </div>
      <div className="mb-6">
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className={`${input_style}`}
        />
        {errors["password"] && (
          <span className="text-red-500 text-xs pt-1 block">
            {errors["password"]?.message as string}
          </span>
        )}
      </div>
      <button
        type="submit"
        style={{ backgroundColor: `${submitting ? "#ccc" : "#3446eb"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={submitting}
      >
        {submitting ? t("loading") : t("sign-in")}
      </button>

      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <a
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#3b5998" }}
        onClick={() => signIn("google", { callbackUrl })}
        role="button"
      >
        <Image
          className="pr-2"
          src="/images/google.svg"
          alt=""
          style={{ height: "2rem" }}
          width={35}
          height={35}
        />
        Continue with Google
      </a>
      <a
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
        onClick={() => signIn("github", { callbackUrl })}
        role="button"
      >
        <Image
          className="pr-2"
          src="/images/github.svg"
          alt=""
          width={40}
          height={40}
        />
        Continue with GitHub
      </a>
    </form>
  )
}
export default LoginForm
