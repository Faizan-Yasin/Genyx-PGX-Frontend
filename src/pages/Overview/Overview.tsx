import { Link } from "react-router"
import Sidebar from "../../components/Sidebar"
import { useSidebar } from "../../hooks/useSidebar"
import { useInView } from "../../hooks/useInView"
import OverviewHeader from "./OverviewHeader"
import OverviewIntro from "./OverviewIntro"

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

    const { ref: statsRef, isInView: statsInView } = useInView()
    const { ref: activityRef, isInView: activityInView } = useInView()

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F4F8FA]">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1 flex-col h-full min-w-0">

                <OverviewHeader setIsSidebarOpen={setIsSidebarOpen} />

                <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
                    <div className="mx-auto w-full max-w-300 min-w-0 space-y-5 sm:space-y-6">

                        <OverviewIntro />

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