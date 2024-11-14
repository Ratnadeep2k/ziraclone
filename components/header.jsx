import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import Usermenu from './user-menu'
import { checkUser } from '@/lib/checkUser'
import UserLoading from './user-loading'

const Header = async() => {
  await checkUser();
  return (
    <header className="container mx-auto px-4 md:px-8 lg:px-12">

      <nav className="py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/jira-logo.svg"
            alt="Logo"
            width={150}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation and User Options */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/project/create">
            <Button variant="destructive" size="sm" className="flex items-center gap-1 sm:gap-2">
              <PenBox size={16} className="hidden sm:block" />
              <span className="text-xs sm:text-sm">Create Project</span>
            </Button>
          </Link>

          {/* Authentication Buttons */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            {/* User menu with SignOut option for larger screens */}
            <div className="hidden sm:flex items-center gap-3">
              <Usermenu />
              <SignOutButton />
            </div>

            {/* User button for smaller screens */}
            <div className="sm:hidden">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>
      <UserLoading/>
    </header>
  )
}

export default Header
