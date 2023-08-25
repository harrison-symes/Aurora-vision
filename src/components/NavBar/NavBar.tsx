import * as React from "react"
import cn from "classnames"
import NavItem from "./NavItem"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [isActive, setIsActive] = React.useState<boolean>(false)

    return <div className="navbar__container">
        <div className="navbar__left">
            <Link to={"/"}>
                <img src="/images/logo.png" className="navbar__logo" />
            </Link>
        </div>
        <div className="navbar__right">
            {/* <div className="navbar__hamburger" onClick={() => setIsActive(state => !state)}>Hamburger</div> */}
            <div className={cn("navbar__items", {
                "is-active": isActive
            })}>
                <NavItem 
                    href="/about-us"
                    text="About us"
                />
                <NavItem 
                    href="/our-work"
                    text="Our work"
                />
                <NavItem 
                    href="/contact"
                    text="Get in touch"
                />
            </div>
        </div>
    </div>
}

export default NavBar