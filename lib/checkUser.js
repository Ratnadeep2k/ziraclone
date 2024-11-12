import {currentUser} from '@clerk/nextjs/server'
import { db } from './prisma';

export const checkUser =async()=>{
    const user = await currentUser();

    if(!user) {
        return null;
  }


  try {
    const loggedInUser =await db?.user.findUnique({
        where:{
            clerkUserId:user.id
        }
    });
    if(loggedInUser) {
        return loggedInUser;
    }
     const name = `${user.firstname} ${user.lastname}`;
     const newUser = await db?.user.create({
         data:{
             clerkUserId:user.id,
             name,
             email:user.emailAddresses[0].emailAddress,
             image:user.profileImageUrl
             
         }
     });
    return newUser;
  } catch (error) { 
    console.error(error);
  }
}