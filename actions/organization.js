'use server'

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";


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

    const organization = await clerkClient().organizations.getOrganization({
        slug
    });
    if(!organization){
        throw new Error('Organization not exist');
    }

    const {data : membership } = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: organization.id
    });

    const userMembership = membership.find((memeber)=> memeber.publicUserData.userId === userId)
    if(!userMembership){
        throw new Error('User not a member of this organization');
    }
    return organization;

}