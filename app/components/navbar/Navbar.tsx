import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

export default function Navbar() {
    return (
        <nav className="sticky bg-white z-10 shadow-sm top-0 box-border py-4 border-b">
            <Container>
                <div className=" flex items-center justify-between gap-3 
                md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </nav>
    )
}