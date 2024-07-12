import "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    name?: string
    email?: string
    password?: string
    role?: string
    emailVerified?: string
    image?: string
    createdAt?: string
    updatedAt?: string
  }
  interface Session {
    user: User
  }
}
// declare module "next-auth/client" {
//   export interface Session {
//     user: User
//   }
// }
