import Link from "next/link"
import React from "react"
import NavLink from "./NavLink"

const NavLinks =[
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact", 
    }
]


const Navbar = () => {
    return(
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div >

                </div>
            </div>
        </nav>
    )
}

export default Navbar