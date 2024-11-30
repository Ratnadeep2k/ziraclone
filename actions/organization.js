'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server";

export async function  getOrganization(slug){
    const {userId} =auth();
    if(!userId){
        throw new Error('Unauthorized');
    }

    const user =await db.user.findUnique({
        where:{
           clerkUserId: userId
        }
    })

    if(!user){
        throw new Error('User not exist');
    }

    

}