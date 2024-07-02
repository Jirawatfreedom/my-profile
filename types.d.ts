import "next-auth"

declare module "next-auth" {
  /**
   * Extends the built-in session.user type
   * Add the id property to the user object in the session
   */
  interface User {
    id?: string
  }

  interface Token {
    id?: string
  }

  /**
   * Extends the built-in session type
   * This is not strictly necessary if you're only extending the user object,
   * but it's useful if you want to add more properties to the session object itself.
   */
  interface Session {
    user?: User & Partial<Token> // Combines User and Token types, making Token properties optional for the user
  }
}
