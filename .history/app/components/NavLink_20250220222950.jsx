import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link 
            href={href}
            className="block py-2 pl-3 "
    )
}

export default NavLink