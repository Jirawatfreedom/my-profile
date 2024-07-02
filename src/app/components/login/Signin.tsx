"use client"
import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/dist/client/components/navigation"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [hasMounted, setHasMounted] = useState(false) // New state to track mounting
  const router = useRouter()

  useEffect(() => {
    setHasMounted(true) // Set to true once the component mounts
  }, [])

  useEffect(() => {
    // Only perform actions dependent on isAuthenticated if the component has mounted
    if (hasMounted && isAuthenticated) {
      router.push("/profile")
    }
  }, [isAuthenticated, router, hasMounted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const result = (await signIn("credentials", {
        redirect: false,
        email,
        password,
      })) as { error?: string }
      console.log("email:", email)
      console.log("password", password)
      if (result.error) {
        console.log("Error")
        setError(result.error)
      } else {
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error("SignIn error:", error)
      setError("An unexpected error occurred.")
    }
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="email" className="text-red-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-red-500">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={4}
              className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mb-4"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  )
}
