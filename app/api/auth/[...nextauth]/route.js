import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';
export const maxDuration = 60; // This function can run for a maximum of 60 seconds
export const dynamic = 'force-dynamic';

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'github' || account.provider === 'google') {
                await connectDB();
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    await User.create({
                        email: user.email,
                        username: user.name,
                    });
                }
                return true;
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email });
            session.user.name = dbUser.username;
            return session;
        },
    },
});

export { handler as GET, handler as POST }
