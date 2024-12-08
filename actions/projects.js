import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server";

export async function createProject(data){
    const {userId, orgId} = auth();
    if(!userId){
        throw new Error('Unauthorized')
    }
    if(!orgId){
        throw new Error('Organization not found')
    }
    const {data : membership } = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: organization.id
    });

    const userMembership = membership.find((memeber)=> memeber.publicUserData.userId === userId)
    if(!userMembership){
        throw new Error('User not a member of this organization');
    }

    if(!userMembership || !userMembership.role || userMembership.role !== 'org:admin'){
        throw new Error('User not authorized to create project');
    }
    try{
        const project = await db.project.createProject({
            data:{
               name : data.name,
               key :data.key,
               description : data.description,
               organizationId : orgId,
            }
        })
        return project;
    }
    catch(e){
        throw new Error('Failed to create project');
    }
}