'use client'
import { useOrganization, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import OrgSwitcher from '@/components/org-switcher'
const CreateProjectPage = () => {

    const {isLoaded : isOrgLoaded ,membership } = useOrganization();
    const {isLoaded: isUserLoaded} = useUser();
    const [isAdmin ,setIsAdmin] = useState(false);

    useEffect(() => {
        if (isOrgLoaded && isUserLoaded && membership) {
          setIsAdmin(membership.role === "org:admin");
        }
      }, [isOrgLoaded, isUserLoaded, membership]);
    if(!isOrgLoaded || !isUserLoaded){
        return null;
    }
    if(!isAdmin){
        return <div className='flex flex-col gap-2 items-center'>
            <span text-2xl gradient-title>"Only Admin can create Projects</span>\
            <OrgSwitcher/>
        </div>

    }


  return (
    <div className="container mx-auto py-10">
        <h1 className="text-6xl text-center font-bold mb-8 gradient-title">
            Create Project for {membership.organization.name}
        </h1>
        <form>

        </form>
    </div>
  )
}

export default CreateProjectPage