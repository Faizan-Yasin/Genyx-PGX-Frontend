import { useState } from "react"
import { NavLink } from "react-router"
import logo from "../assets/genyx-logo.png"
import NavLinks from "./NavLinks"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 z-40 h-16 w-full bg-white">
            <div className="mx-auto flex h-full max-w-360 items-center justify-between px-6">

                <NavLink
                    to="/"
                    className="flex shrink-0 items-center gap-1"
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


                <div className="hidden lg:flex items-center gap-8">
                    <NavLinks />
                </div>


                <div className="hidden lg:flex items-center gap-6">

                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            `text-[15px] transition-colors duration-200 ${
                                isActive
                                    ? "font-bold text-[#0B2535]"
                                    : "font-normal text-[#526A79]"
                            }`
                        }
                    >
                        Sign in
                    </NavLink>


                    <NavLink
                        to="/start-analysis"
                        className="flex h-10 w-38 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#246D69] text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1d5b58]"
                    >
                        <span>Start Analysis</span>

                        <svg
                            width="14"
                            height="10"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M0.708374 4.875H12.375M8.20837 9.04167L12.375 4.875L8.20837 0.708334"
                                stroke="white"
                                strokeWidth="1.41667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>

                </div>


                <button
                    onClick={() => setMenuOpen(true)}
                    className="flex items-center justify-center lg:hidden"
                    aria-label="Open Navigation Menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M0.850006 0.85H16.85M0.850006 6.85H16.85M0.850006 12.85H16.85"
                            stroke="#0B2535"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>

            <div
                id="mobile-navigation"
                className={`fixed inset-0 z-50 lg:hidden ${
                    menuOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >

                <div
                    className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                        menuOpen
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    onClick={closeMenu}
                    aria-hidden="true"
                />

                <div
                    className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
                        menuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >

                    <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">

                        <h2 className="text-xl font-bold text-[#0B2535]">
                            Menu
                        </h2>

                        <button
                            onClick={closeMenu}
                            className="flex h-5 w-12 items-center justify-center text-xl text-[#0B2535]"
                            aria-label="Close Navigation Menu"
                        >
                            X
                        </button>

                    </div>

                    <div className="flex flex-col gap-5 px-6 py-6">

                        <NavLinks
                            mobile
                            closeMenu={closeMenu}
                        />

                        <NavLink
                            to="/sign-in"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `text-[15px] ${
                                    isActive
                                        ? "font-bold text-[#0B2535]"
                                        : "font-normal text-[#526A79]"
                                }`
                            }
                        >
                            Sign in
                        </NavLink>

                        <NavLink
                            to="/start-analysis"
                            onClick={closeMenu}
                            className="mt-2 flex h-11 w-full items-center justify-center gap-3 rounded-lg bg-[#246D69] text-sm font-bold text-white"
                        >
                            <span>Start Analysis</span>

                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0.708374 4.875H12.375M8.20837 9.04167L12.375 4.875L8.20837 0.708334"
                                    stroke="white"
                                    strokeWidth="1.41667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavLink>

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar