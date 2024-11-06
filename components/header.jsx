import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div>
      <SignedOut>
         <SignInButton/>      
      </SignedOut>
      <SignedIn>
        <p>Hi, you are signed in!</p>
        <UserButton/>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default Header