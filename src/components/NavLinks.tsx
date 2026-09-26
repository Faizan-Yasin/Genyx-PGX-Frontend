import { NavLink } from "react-router"

interface NavLinksProps {
    mobile?: boolean
    closeMenu?: () => void
}

const navItems = [
    {
        label: "Platform",
        path: "/",
    },
    {
        label: "How it works",
        path: "/how-it-works",
    },
    {
        label: "For clinicians",
        path: "/for-clinicians",
    },
    {
        label: "Resources",
        path: "/resources",
    },
]

const NavLinks = ({ mobile = false, closeMenu }: NavLinksProps) => {
    const handleClick = () => {
        if (mobile) {
            closeMenu?.()
        }
    }

    return (
        <>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleClick}
                    className={({ isActive }) =>
                        `text-[15px] transition-colors duration-200 ${
                            isActive
                                ? "font-bold text-[#0B2535]"
                                : "font-normal text-[#526A79]"
                        }`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </>
    )
}

export default NavLinks