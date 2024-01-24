import prisma from "@/app/config/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const authoptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          const user = await prisma.user.findFirst({
            where: {
              AND: [{ email: email }],
            },
          });
          if (user) {
            const decryptPassword = await bcrypt.compare(
              password,
              user.password
            );
            console.log("user by prisma", user);
            if (decryptPassword) {
              return user;
              console.log("your are loged in!");
            } else {
              console.log("password do not match");
              return null;
            }
          } else {
            console.log("user not found");
            return null;
          }
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    // signOut: "/auth",
  },
};
const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
