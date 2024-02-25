import GithubProvider from "@auth/core/providers/github"
import GoogleProvider from "@auth/core/providers/google"

import type { AuthConfig } from "@auth/core/types"
import { DrizzleAdapter } from "@auth/drizzle-adapter"

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  adapter: DrizzleAdapter(useDb()),
  secret: runtimeConfig.authJs.secret,
  providers: [
    GithubProvider({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret,
    }),
    GoogleProvider({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
}

declare module "@auth/core/types" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image: string | null
    }
  }
}
