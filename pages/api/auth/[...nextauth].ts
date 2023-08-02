import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import bycrypt from "bcrypt"
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import prisma from "@/app/libs/prisma"
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string, 
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
      Credentials({
        name: "credentials",
        credentials: {
          email: {label: 'email', type: 'text'},
          password: {label: 'password', type: 'password'},
        }, 
        async authorize(credentials){
          if(!credentials?.email || !credentials?.password){
            throw new Error("Invalid accounts.")
          }
          const user = await prisma.user.findUnique({
            where : {
              email: credentials.email, 
            }
          })
          if(!user ||  !user?.hashedPassword){
            throw new Error("User not found")
          }
          const isCorrectPassword = await bycrypt.compare(credentials.password, user.hashedPassword)
          if(!isCorrectPassword){
            throw new Error("Invalid Password")
          }
          return user;
        }
      })
  ],
  pages: {
    signIn: '/'
  }, 
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  }, 
  secret: process.env.NEXTAUTH_SECRET,

}

export default NextAuth(authOptions)