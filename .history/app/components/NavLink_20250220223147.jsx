import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link 
            href={href}
            className="block py-2 pl-3 pr-4  text-[#ADB7BE] sm:text-xl rounded md:pd-0"
    )
}

export default NavLink