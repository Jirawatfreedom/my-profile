import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { NextRequest } from "next/server"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, image } = await request.json()
    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        image,
      },
    })
    return new Response(JSON.stringify({ message: "User created", user }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    let errorMessage = "An unknown error occurred"
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
