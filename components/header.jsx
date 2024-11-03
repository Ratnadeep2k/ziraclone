import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

const Header =()=>{
    return <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton />
            <SignOutButton/>
        </SignedIn>
    </div>
}
export default Header