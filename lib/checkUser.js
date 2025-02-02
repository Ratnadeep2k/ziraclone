import { currentUser } from '@clerk/nextjs/server';
import { db } from './prisma';

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const loggedInUser = await db?.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        const name = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim();
        const email = user.emailAddresses?.[0]?.emailAddress || null;

        const newUser = await db?.user.create({
            data: {
                clerkUserId: user.id,
                name,
                email,
                image: user.profileImageUrl
            }
        });

        return newUser;
    } catch (error) { 
        console.error("Database error:", error);
        return null;
    }
};
