import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center ">
                <Link href='/'>
                    <Image src={'/logo.svg'} alt="ziraclone Logo" width={200} height={56}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
            <div>
                <Link href='/project/create'>
                    <a className="text-gray-800 hover:text-gray-600">Home</a>
                </Link>
                <SignedIn>
                    <UserButton />
                    <SignOutButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
            </nav>
        </header>
    )
}
export default Header