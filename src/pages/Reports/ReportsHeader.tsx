import type { Dispatch, SetStateAction } from 'react'

type ReportsHeaderProps = {
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const ReportsHeader = ({ setIsSidebarOpen }: ReportsHeaderProps) => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#E1E9EC] bg-white px-3 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <button
                    type="button"
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-[#F0F4F6] md:hidden cursor-pointer"
                    aria-label="Toggle Sidebar"
                >
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.850006 0.85H16.85M0.850006 6.85H16.85M0.850006 12.85H16.85" stroke="#0B2535" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] truncate">
                    <span className="text-[#526A79] truncate">Workspace</span>
                    <svg width="6" height="10" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M0.566681 0.56665L5.23335 5.23332L0.566681 9.89998" stroke="#526A79" strokeWidth="1.13333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-semibold text-[#0B2535] truncate">Reports</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <span className="hidden rounded-md bg-[#F2F6F7] px-3 py-1 text-[11px] font-semibold text-[#526A79] sm:block">
                    Demo workspace
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5F2] text-[10px] font-bold text-[#28766F]">
                    GX
                </div>
            </div>
        </header>
    )
}

export default ReportsHeader
