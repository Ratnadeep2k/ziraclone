import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const Header =()=>{
    return <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <SignOutButton/>
        </SignedIn>
    </div>
}
export default Header