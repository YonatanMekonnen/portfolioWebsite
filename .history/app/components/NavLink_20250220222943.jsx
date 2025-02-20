import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link 
            href={href}
            className="block py-2 "
    )
}

export default NavLink