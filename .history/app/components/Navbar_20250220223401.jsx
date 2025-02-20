import Link from "next/link"
import React from "react"
import NavLink from "./NavLink"

const NavLinks =[
    
]


const Navbar = () => {
    return(
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-5xl text-white font-semibold">
                    LOGO
                </Link>
            </div>
        </nav>
    )
}

export default Navbar