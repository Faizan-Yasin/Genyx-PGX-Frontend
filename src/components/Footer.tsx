import { NavLink } from "react-router"
import logo from "../assets/genyx-logo.png"

const navLinks = [
    { label: "Platform", to: "/platform" },
    { label: "For clinicians", to: "/clinicians" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
]

const legalLinks = [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Accessibility", to: "/accessibility" },
]

const Footer = () => {
    return (
        <footer className="w-full bg-white text-[#526A79]">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">

                <div className="flex flex-col py-8 sm:py-10 lg:py-12 gap-8 md:flex-row md:items-start md:justify-between">

                    <div className="flex flex-col items-start">

                        <NavLink
                            to="/"
                            className="flex mx-auto md:mx-0 shrink-0 items-center gap-1"
                            aria-label="Genyx PGx"
                        >
                            <img
                                src={logo}
                                alt="Genyx Logo"
                                className="h-10 w-auto"
                            />

                            <span className="text-2xl font-bold text-[#0B2535]">
                                Genyx
                            </span>

                            <span className="text-[13px] font-medium text-[#246D69]">
                                PGx
                            </span>
                        </NavLink>

                        <p className="mt-3 mx-auto text-center md:text-left md:mx-0 text-[14px] text-[#526A79] sm:text-[15px]">
                            Genetic insights for more informed conversations.
                        </p>
                    </div>

                    <nav aria-label="Footer Navigation">
                        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-3 text-[14px] font-medium sm:gap-x-8 sm:text-[15px]">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-[#526A79] transition-colors duration-200 hover:text-[#0B2535]"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>

                <div className="h-px w-full bg-[#E5ECEE]" />

                <div className="flex flex-col gap-4 text-center sm:text-left py-6 text-[13px] text-[#526A79] sm:flex-row sm:items-center sm:justify-between sm:text-[14px]">

                    <p>© 2026 Genyx LLC</p>

                    <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
                        {legalLinks.map((link) => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    className="text-[#526A79] transition-colors duration-200 hover:text-[#0B2535]"
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </footer>
    )
}

export default Footer