import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { useSidebar } from "../../hooks/useSidebar"
import { useInView } from "../../hooks/useInView"
import ReportsHeader from "./ReportsHeader"
import ReportsIntro from "./ReportsIntro"
import ReportsConversation from "./ReportsConversation"
import ReportsTable, { type GeneFinding } from "./ReportsTable"
import ReportsMedication from "./ReportsMedication"

const mockReportData = {
    sampleInfo: {
        id: "GX-DEMO-001",
        type: "Synthetic sample",
        purpose: "For interface demonstration",
    },
    stats: {
        genesShown: "03",
        resultsAvailable: "02",
        needsMoreData: "01",
    },
    geneFindings: [
        {
            id: "1",
            gene: "CYP2C19",
            genotype: "*1 / *2",
            phenotype: "Intermediate metabolizer",
            phenotypeType: "warning",
            dataStatus: "Result available",
        },
        {
            id: "2",
            gene: "CYP2C9",
            genotype: "*1 / *1",
            phenotype: "Normal metabolizer",
            phenotypeType: "success",
            dataStatus: "Result available",
        },
        {
            id: "3",
            gene: "CYP2D6",
            genotype: "Not determined",
            phenotype: "More data needed",
            phenotypeType: "neutral",
            dataStatus: "Coverage limitation",
        },
    ] as GeneFinding[],
    medicationInsights: [
        {
            id: "1",
            name: "Clopidogrel",
            category: "Antiplatelet",
        },
        {
            id: "2",
            name: "Omeprazole",
            category: "Proton pump inhibitor",
        },
    ],
}

const Reports = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useSidebar()
    const [activeTab, setActiveTab] = useState<"findings" | "insights" | "evidence">("findings")

    const { sampleInfo, stats, geneFindings, medicationInsights } = mockReportData

    const { ref: statsRef, isInView: statsInView } = useInView()
    const { ref: tabsRef, isInView: tabsInView } = useInView()
    const { ref: disclaimerRef, isInView: disclaimerInView } = useInView()

    const statCardsList = [
        {
            id: "genesShown",
            value: stats.genesShown,
            label: "Genes shown",
            bgClass: "bg-[#EAF5F2] text-[#28766F]",
            icon: (
                <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.814697 0.814575C0.814697 9.9029 14.0078 9.9029 14.0078 18.9912M14.0078 0.814575C14.0078 9.9029 0.814697 9.9029 0.814697 18.9912M3.01354 3.84402H11.8089M1.91412 15.9618H12.9083M5.21238 6.87346H9.61007M5.21238 12.9323H9.61007" stroke="#358783" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: "resultsAvailable",
            value: stats.resultsAvailable,
            label: "Results available",
            bgClass: "bg-[#EAF5F2] text-[#28766F]",
            icon: (
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.814697 6.87346L5.21238 10.9127L16.2066 0.814575" stroke="#358783" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: "needsMoreData",
            value: stats.needsMoreData,
            label: "Needs more data",
            bgClass: "bg-[#FFF8E6] text-[#B78103]",
            icon: (
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7092 5.86365V5.96463M10.7092 8.89309V14.952M10.7092 0.814575C9.40984 0.814575 8.12316 1.04965 6.92267 1.50638C5.72218 1.96311 4.63139 2.63256 3.71257 3.47648C2.79375 4.32041 2.06491 5.3223 1.56765 6.42495C1.07039 7.5276 0.814453 8.70941 0.814453 9.9029C0.814453 11.0964 1.07039 12.2782 1.56765 13.3809C2.06491 14.4835 2.79375 15.4854 3.71257 16.3293C4.63139 17.1732 5.72218 17.8427 6.92267 18.2994C8.12316 18.7562 9.40984 18.9912 10.7092 18.9912C13.3335 18.9912 15.8503 18.0337 17.7059 16.3293C19.5616 14.6249 20.604 12.3133 20.604 9.9029C20.604 7.49253 19.5616 5.18088 17.7059 3.47648C15.8503 1.77209 13.3335 0.814575 10.7092 0.814575Z" stroke="#91601B" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ]

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F4F8FA]">

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1 flex-col h-full min-w-0">

                <ReportsHeader setIsSidebarOpen={setIsSidebarOpen} />

                <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
                    <div className="mx-auto w-full max-w-300 min-w-0 space-y-5 sm:space-y-6">

                        <ReportsIntro sampleInfo={sampleInfo} />

                        

                        <div
                            ref={statsRef}
                            className={`grid gap-4 grid-cols-1 sm:grid-cols-3 transition-all duration-1000 ease-out
                                ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                            `}>
                            {statCardsList.map((card) => (
                                <div key={card.id} className="flex items-center justify-between rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 shadow-2xs">
                                    <div>
                                        <div className="text-[24px] sm:text-[28px] font-bold text-[#0B2535]">{card.value}</div>
                                        <div className="text-[11px] sm:text-[12px] text-[#617887]">{card.label}</div>
                                    </div>
                                    <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl ${card.bgClass}`}>
                                        {card.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            ref={tabsRef}
                            className={`w-full min-w-0 border-b border-[#E1E9EC] transition-all duration-1000 ease-out
                                ${tabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                            `}>
                            <nav className="-mb-px flex gap-6 sm:gap-8 overflow-x-auto">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("findings")}
                                    className={`pb-3 text-[13px] sm:text-[14px] font-bold transition-colors cursor-pointer whitespace-nowrap ${activeTab === "findings"
                                        ? "border-b-2 border-[#2867A8] text-[#2867A8]"
                                        : "text-[#526A79] hover:text-[#0B2535]"
                                        }`}
                                >
                                    Gene findings
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("insights")}
                                    className={`pb-3 text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${activeTab === "insights"
                                        ? "border-b-2 border-[#2867A8] text-[#2867A8]"
                                        : "text-[#526A79] hover:text-[#0B2535]"
                                        }`}
                                >
                                    Medication insights
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("evidence")}
                                    className={`pb-3 text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${activeTab === "evidence"
                                        ? "border-b-2 border-[#2867A8] text-[#2867A8]"
                                        : "text-[#526A79] hover:text-[#0B2535]"
                                        }`}
                                >
                                    Evidence & methods
                                </button>
                            </nav>
                        </div>

                        <ReportsTable geneFindings={geneFindings} />

                        <div className="grid gap-5 sm:gap-6 grid-cols-1 xl:grid-cols-[1fr_320px]">

                            <ReportsMedication medicationInsights={medicationInsights} />

                            <ReportsConversation />

                        </div>

                        <div
                            ref={disclaimerRef}
                            className={`space-y-1 text-[11px] text-[#617887] transition-all duration-1000 ease-out
                                ${disclaimerInView ? "opacity-100 translate-y-0 sm:translate-x-0" : "opacity-0 translate-y-5 sm:translate-y-0 sm:-translate-x-5"}
                            `}>
                            <p>Coverage limitations are shown for each gene. Missing data does not imply normal function.</p>
                            <p>Reference: CPIC guideline publications · View evidence and methods for interpretation details.</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Reports