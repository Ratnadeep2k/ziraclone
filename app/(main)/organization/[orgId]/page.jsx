import { getOrganization } from '@/actions/organization'
import React from 'react'

const Organization = async ({params}) => {
const {orgId} = params
const organization = await getOrganization(orgId)
if (!organization){
  return <div>Organization not found</div>
}

  return (
      <div className="container mx-auto px-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-title pb-2">
          {organization.name}&rsquo;s Projects
        </h1>
      </div>
    
    </div>
  )
}

export default Organization