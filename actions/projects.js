import { auth } from "@clerk/nextjs/dist/types/server";

export async function createProject(data){
    const {userId, orgId} = auth();
    if(!userId){
        throw new Error('Unauthorized')
    }
    if(!orgId){
        throw new Error('Organization not found')
    }
}