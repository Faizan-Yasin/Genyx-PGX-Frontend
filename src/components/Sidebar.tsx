import logo from "../assets/genyx-logo.png"
import { NavLink } from "react-router"

interface SidebarProps {
    isSidebarOpen: boolean
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <>
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/20 md:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-full flex-col justify-between bg-[#092838] text-white transition-all duration-300 ease-in-out shrink-0 md:static md:translate-x-0 ${isSidebarOpen
                        ? "translate-x-0 w-60"
                        : "-translate-x-full md:translate-x-0 md:w-16"
                    }`}
            >
                <div className="flex flex-col overflow-hidden">
                    <div className="flex h-16 items-center justify-between px-3.5">
                        <NavLink
                            to="/"
                            onClick={(e) => {
                                if (!isSidebarOpen) {
                                    e.preventDefault()
                                    setIsSidebarOpen(true)
                                }
                            }}
                            className={`flex items-center gap-1 text-left cursor-pointer shrink-0 ${!isSidebarOpen ? "w-full justify-center" : ""
                                }`}
                            aria-label="Genyx PGx Home"
                            title={!isSidebarOpen ? "Open Sidebar" : "Genyx PGx Home"}
                        >
                            <img
                                src={logo}
                                alt="Genyx Logo"
                                className="h-8 w-auto shrink-0"
                            />
                            {isSidebarOpen && (
                                <div className="flex items-baseline gap-1 overflow-hidden whitespace-nowrap">
                                    <span className="text-xl font-bold text-white">
                                        Genyx
                                    </span>
                                    <span className="text-[13px] font-medium text-[#A8E0D4]">
                                        <sup>PGx</sup>
                                    </span>
                                </div>
                            )}
                        </NavLink>

                        {isSidebarOpen && (
                            <button
                                type="button"
                                onClick={toggleSidebar}
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#B9CDD7] hover:bg-[#184657] hover:text-white transition-colors shrink-0"
                                aria-label="Close Sidebar"
                                title="Close Sidebar"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 18L9 12L15 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="px-3 pt-4">
                        {isSidebarOpen && (
                            <p className="mb-4 px-3 text-[10px] font-bold tracking-wider text-[#B9CDD7] uppercase whitespace-nowrap">
                                WORKSPACE
                            </p>
                        )}

                        <nav className="space-y-1.5">
                            <button
                                type="button"
                                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-[#B9CDD7] transition-colors hover:bg-[#184657] hover:text-white cursor-pointer ${!isSidebarOpen ? "justify-center" : ""
                                    }`}
                                title="Overview"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                >
                                    <path
                                        d="M0.743774 0.743774H5.99377V5.99377H0.743774V0.743774ZM9.49377 0.743774H14.7438V5.99377H9.49377V0.743774ZM0.743774 9.49377H5.99377V14.7438H0.743774V9.49377ZM9.49377 9.49377H14.7438V14.7438H9.49377V9.49377Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {isSidebarOpen && <span className="truncate">Overview</span>}
                            </button>

                            <button
                                type="button"
                                className={`flex w-full items-center gap-3 rounded-xl bg-[#184657] px-3 py-2.5 text-[14px] font-bold text-white cursor-pointer ${!isSidebarOpen ? "justify-center" : ""
                                    }`}
                                title="New analysis"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                >
                                    <path
                                        d="M7.74377 11.2438V0.743774M12.1188 5.11877L7.74377 0.743774L3.36877 5.11877M0.743774 11.2438V14.7438H14.7438V11.2438"
                                        stroke="#A8E0D4"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {isSidebarOpen && <span className="truncate">New analysis</span>}
                            </button>

                            <button
                                type="button"
                                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-[#B9CDD7] transition-colors hover:bg-[#184657] hover:text-white cursor-pointer ${!isSidebarOpen ? "justify-center" : ""
                                    }`}
                                title="Reports"
                            >
                                <svg
                                    width="16"
                                    height="18"
                                    viewBox="0 0 14 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                >
                                    <path
                                        d="M12.9938 5.11877L8.61877 0.743774H1.61877C1.38671 0.743774 1.16415 0.835962 1.00006 1.00006C0.835962 1.16415 0.743774 1.38671 0.743774 1.61877V15.6188C0.743774 15.8508 0.835962 16.0734 1.00006 16.2375C1.16415 16.4016 1.38671 16.4938 1.61877 16.4938H12.1188C12.3508 16.4938 12.5734 16.4016 12.7375 16.2375C12.9016 16.0734 12.9938 15.8508 12.9938 15.6188V5.11877ZM8.61877 0.743774V5.11877H12.9938M3.36877 8.61877H10.3688M3.36877 12.1188H8.61877"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {isSidebarOpen && <span className="truncate">Reports</span>}
                            </button>

                            <button
                                type="button"
                                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-[#B9CDD7] transition-colors hover:bg-[#184657] hover:text-white cursor-pointer ${!isSidebarOpen ? "justify-center" : ""
                                    }`}
                                title="Resources"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                >
                                    <path
                                        d="M8.61877 15.3184C11.2438 13.5684 13.8688 13.5684 16.4938 14.4434V1.3184C14.7438 0.4434 11.2438 0.4434 8.61877 2.1934C5.99377 0.4434 2.49377 0.4434 0.743774 1.3184V14.4434C3.36877 13.5684 5.99377 13.5684 8.61877 15.3184ZM8.61877 2.1934V15.3184"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {isSidebarOpen && <span className="truncate">Resources</span>}
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="p-3">
                    {isSidebarOpen ? (
                        <div className="rounded-xl border border-[#245363] bg-[#123B4C] p-3">
                            <div className="mb-1.5 flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0"
                                >
                                    <path
                                        d="M7.79791 4.63125V4.71041M7.79791 7.00625V11.7562M7.79791 0.672913C6.86224 0.672913 5.93574 0.857206 5.07129 1.21527C4.20685 1.57334 3.42139 2.09816 2.75978 2.75978C2.09816 3.42139 1.57334 4.20685 1.21527 5.07129C0.857206 5.93574 0.672913 6.86224 0.672913 7.79791C0.672913 8.73358 0.857206 9.66009 1.21527 10.5245C1.57334 11.389 2.09816 12.1744 2.75978 12.836C3.42139 13.4977 4.20685 14.0225 5.07129 14.3806C5.93574 14.7386 6.86224 14.9229 7.79791 14.9229C9.68758 14.9229 11.4999 14.1722 12.836 12.836C14.1722 11.4999 14.9229 9.68758 14.9229 7.79791C14.9229 5.90825 14.1722 4.09597 12.836 2.75978C11.4999 1.42358 9.68758 0.672913 7.79791 0.672913Z"
                                        stroke="#A8E0D4"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-[12px] font-semibold text-white">
                                    Need a starting point?
                                </span>
                            </div>
                            <NavLink
                                to="/sample-report"
                                className="group flex items-center gap-1.5 text-[12px] font-medium text-[#B9CDD7] transition-colors duration-100 hover:text-[#A8E0D4]"
                            >
                                <span>Explore sample report</span>
                                <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.56665 3.89998H9.89998M6.56665 7.23332L9.89998 3.89998L6.56665 0.56665"
                                        stroke="#A8E0D4"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </NavLink>
                        </div>
                    ) : (
                        <NavLink
                            to="/sample-report"
                            className="flex h-10 w-full items-center justify-center rounded-xl bg-[#123B4C] text-[#A8E0D4] hover:bg-[#184657]"
                            title="Explore sample report"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.79791 4.63125V4.71041M7.79791 7.00625V11.7562M7.79791 0.672913C6.86224 0.672913 5.93574 0.857206 5.07129 1.21527C4.20685 1.57334 3.42139 2.09816 2.75978 2.75978C2.09816 3.42139 1.57334 4.20685 1.21527 5.07129C0.857206 5.93574 0.672913 6.86224 0.672913 7.79791C0.672913 8.73358 0.857206 9.66009 1.21527 10.5245C1.57334 11.389 2.09816 12.1744 2.75978 12.836C3.42139 13.4977 4.20685 14.0225 5.07129 14.3806C5.93574 14.7386 6.86224 14.9229 7.79791 14.9229C9.68758 14.9229 11.4999 14.1722 12.836 12.836C14.1722 11.4999 14.9229 9.68758 14.9229 7.79791C14.9229 5.90825 14.1722 4.09597 12.836 2.75978C11.4999 1.42358 9.68758 0.672913 7.79791 0.672913Z"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavLink>
                    )}

                    <button
                        type="button"
                        className={`mt-2 flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-[13px] text-[#B9CDD7] hover:bg-[#184657] hover:text-white transition-colors cursor-pointer ${!isSidebarOpen ? "justify-center" : ""
                            }`}
                        title="Workspace settings"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                        >
                            <path
                                d="M9.04165 0.708344V3.20834M9.04165 14.875V17.375M0.708313 9.04168H3.20831M14.875 9.04168H17.375M3.20831 3.20834L4.87498 4.87501M13.2083 13.2083L14.875 14.875M3.20831 14.875L4.87498 13.2083M13.2083 4.87501L14.875 3.20834M9.04165 5.70834C8.15759 5.70834 7.30974 6.05953 6.68462 6.68465C6.0595 7.30978 5.70831 8.15762 5.70831 9.04168C5.70831 9.92573 6.0595 10.7736 6.68462 11.3987C7.30974 12.0238 8.15759 12.375 9.04165 12.375C9.9257 12.375 10.7735 12.0238 11.3987 11.3987C12.0238 10.7736 12.375 9.92573 12.375 9.04168C12.375 8.15762 12.0238 7.30978 11.3987 6.68465C10.7735 6.05953 9.9257 5.70834 9.04165 5.70834Z"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {isSidebarOpen && <span className="truncate">Settings</span>}
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Sidebar