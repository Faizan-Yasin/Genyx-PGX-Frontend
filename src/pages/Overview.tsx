import { Link } from "react-router"
import Sidebar from "../components/Sidebar"
import { useSidebar } from "../hooks/useSidebar"
import { useInView } from "../hooks/useInView"

const mockStats = [
    { title: "Total Samples Analyzed", value: "24", change: "+4 this month", type: "neutral" },
    { title: "Actionable Gene Findings", value: "18", change: "75% of total", type: "success" },
    { title: "Pending Extra Data", value: "03", change: "Requires review", type: "warning" },
]

const recentActivity = [
    { id: "GX-DEMO-001", type: "VCF Analysis", date: "Oct 04, 2026", status: "Completed", gene: "CYP2C19 (*1/*2)" },
    { id: "GX-DEMO-002", type: "PGX Screening", date: "Oct 01, 2026", status: "Completed", gene: "CYP2C9 (*1/*1)" },
    { id: "GX-DEMO-003", type: "Full Genome VCF", date: "Sep 28, 2026", status: "In Limitation", gene: "CYP2D6 (Pending)" },
]

const Overview = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

    const { ref: headerRef, isInView: headerInView } = useInView()
    const { ref: statsRef, isInView: statsInView } = useInView()
    const { ref: activityRef, isInView: activityInView } = useInView()
    const { ref: analysisRef, isInView: analysisInView } = useInView()

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F4F8FA]">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1 flex-col h-full min-w-0">
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#E1E9EC] bg-white px-3 sm:px-6">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen((prev) => !prev)}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-[#F0F4F6] md:hidden cursor-pointer"
                            aria-label="Toggle Sidebar"
                        >
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M0.85 0.85H16.85M0.85 6.85H16.85M0.85 12.85H16.85" stroke="#0B2535" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] truncate">
                            <span className="text-[#526A79] truncate">Workspace</span>
                            <svg width="6" height="10" viewBox="0 0 6 11" fill="none" className="shrink-0">
                                <path d="M0.566681 0.56665L5.23335 5.23332L0.566681 9.89998" stroke="#526A79" strokeWidth="1.13333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-[#0B2535] truncate">Overview</span>
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

                <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
                    <div className="mx-auto w-full max-w-300 min-w-0 space-y-5 sm:space-y-6">

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div
                                ref={headerRef}
                                className={`transition-all duration-1000 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                                    }`}
                            >
                                <span className="inline-flex rounded-md bg-[#EAF5F2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28766F] uppercase">
                                    DASHBOARD OVERVIEW
                                </span>
                                <h1 className="mt-2 text-[22px] leading-tight font-bold tracking-[-0.5px] text-[#0B2535] sm:text-[32px]">
                                    Pharmacogenomics Workspace
                                </h1>
                                <p className="mt-1 text-[13px] sm:text-[14px] text-[#526A79]">
                                    Manage sample analyses, view PGX reports, and monitor drug-gene insights.
                                </p>
                            </div>

                            <div
                                ref={analysisRef}
                                className={`shrink-0 sm:mt-2 transition-all ease-out duration-1000 ${analysisInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                            >
                                <Link
                                    to="/analysis"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2867A8] px-5 py-2.5 text-[13px] font-bold text-white shadow-2xs transition-all hover:bg-[#1E5288] hover:duration-200 hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <span>Start Analysis</span>
                                    <svg
                                        width="13"
                                        height="9"
                                        viewBox="0 0 14 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="shrink-0"
                                    >
                                        <path
                                            d="M0.708374 4.875H12.375M8.20837 9.04167L12.375 4.875L8.20837 0.708334"
                                            stroke="currentColor"
                                            strokeWidth="1.41667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div
                            ref={statsRef}
                            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 ease-out ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                                }`}
                        >
                            {mockStats.map((stat) => (
                                <div key={stat.title} className="rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 shadow-2xs">
                                    <span className="text-[12px] font-medium text-[#617887]">{stat.title}</span>
                                    <div className="mt-2 flex items-baseline justify-between">
                                        <span className="text-[24px] sm:text-[28px] font-bold text-[#0B2535]">{stat.value}</span>
                                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${stat.type === 'success' ? 'bg-[#E8F5E9] text-[#2E7D32]' :
                                            stat.type === 'warning' ? 'bg-[#FFF8E6] text-[#B78103]' :
                                                'bg-[#F1F4F6] text-[#617887]'
                                            }`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            ref={activityRef}
                            className={`rounded-2xl border border-[#DDE7EA] bg-white shadow-2xs overflow-hidden transition-all duration-1000 ease-out ${activityInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                                }`}
                        >
                            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E1E9EC]">
                                <div>
                                    <h2 className="text-[15px] sm:text-[16px] font-bold text-[#0B2535]">Recent Sample Reports</h2>
                                    <p className="text-[11px] sm:text-[12px] text-[#617887]">Latest genetic interpretation results</p>
                                </div>
                                <Link to="/reports" className="text-[12px] font-bold text-[#2867A8] hover:underline">
                                    View all
                                </Link>
                            </div>

                            <div className="divide-y divide-[#E1E9EC]">
                                {recentActivity.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 hover:bg-[#F9FCFD] transition-colors gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF6FA] text-[#2867A8] font-bold text-[12px]">
                                                DNA
                                            </div>
                                            <div>
                                                <div className="text-[13px] sm:text-[14px] font-bold text-[#0B2535]">{item.id}</div>
                                                <div className="text-[11px] text-[#617887]">{item.type} • {item.date}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-4 text-[12px]">
                                            <span className="font-mono text-[#526A79]">{item.gene}</span>
                                            <span className="inline-flex rounded-md bg-[#EAF5F2] px-2.5 py-1 text-[11px] font-bold text-[#28766F]">
                                                {item.status}
                                            </span>
                                            <Link to="/reports" className="font-bold text-[#2867A8] hover:underline">
                                                Open Report →
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>
            </div >
        </div >
    )
}

export default Overview