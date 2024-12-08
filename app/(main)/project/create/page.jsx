'use client'
import { useOrganization, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import OrgSwitcher from '@/components/org-switcher'
const CreateProjectPage = () => {

    const {isLoaded : isOrgLoaded ,membership} = useOrganization();
    const {isLoaded: isUserLoaded} = useUser();
    const {isAdmin ,setIsAdmin} = useState(false);

    useEffect(()=>{
        if(isOrgLoaded && isUserLoaded && membership){
           setIsAdmin(membership.role === 'org:admin');
        }
    },[isOrgLoaded, isUserLoaded, membership])

    if(!isOrgLoaded || !isUserLoaded){
        return null;
    }
    if(!isAdmin){
        return <div>
            <span>"Only Admin can create Projects</span>\
            <OrgSwitcher/>
        </div>

    }


  return (
    <div>page</div>
  )
}

export default CreateProjectPage