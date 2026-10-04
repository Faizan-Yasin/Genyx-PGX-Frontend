import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useSidebar } from "../hooks/useSidebar"

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
    ],
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

                <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
                    <div className="mx-auto w-full max-w-300 min-w-0 space-y-5 sm:space-y-6">

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <span className="inline-flex rounded-md bg-[#EAF5F2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28766F] uppercase">
                                    SAMPLE REPORT - ILLUSTRATIVE DATA
                                </span>
                                <h1 className="mt-2 text-[22px] leading-tight font-bold tracking-[-0.5px] text-[#0B2535] sm:text-[32px]">
                                    Your pharmacogenomic overview
                                </h1>
                                <p className="mt-1 text-[13px] sm:text-[14px] text-[#526A79]">
                                    {sampleInfo.id} / {sampleInfo.type} / {sampleInfo.purpose}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2867A8] px-5 py-2.5 text-[13px] font-bold text-white shadow-2xs hover:bg-[#1E5288] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 sm:mt-2"
                            >
                                <span>Download PDF</span>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V10M8 10L4.5 6.5M8 10L11.5 6.5M1.5 13.5H14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl border border-[#D0E2EB] bg-[#EDF6FA] p-4 text-[#0B2535]">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#2867A8] text-[11px] font-bold text-[#2867A8] mt-0.5">
                                i
                            </div>
                            <div className="text-[12px] sm:text-[13px]">
                                <span className="font-bold">Genetics is one part of the picture.</span>{" "}
                                <span className="text-[#526A79]">Discuss results with your clinician before changing any medication.</span>
                            </div>
                        </div>

                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                            <div className="flex items-center justify-between rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 shadow-2xs">
                                <div>
                                    <div className="text-[24px] sm:text-[28px] font-bold text-[#0B2535]">{stats.genesShown}</div>
                                    <div className="text-[11px] sm:text-[12px] text-[#617887]">Genes shown</div>
                                </div>
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#EAF5F2] text-[#28766F]">
                                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.814697 0.814575C0.814697 9.9029 14.0078 9.9029 14.0078 18.9912M14.0078 0.814575C14.0078 9.9029 0.814697 9.9029 0.814697 18.9912M3.01354 3.84402H11.8089M1.91412 15.9618H12.9083M5.21238 6.87346H9.61007M5.21238 12.9323H9.61007" stroke="#358783" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center justify-between rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 shadow-2xs">
                                <div>
                                    <div className="text-[24px] sm:text-[28px] font-bold text-[#0B2535]">{stats.resultsAvailable}</div>
                                    <div className="text-[11px] sm:text-[12px] text-[#617887]">Results available</div>
                                </div>
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#EAF5F2] text-[#28766F]">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.814697 6.87346L5.21238 10.9127L16.2066 0.814575" stroke="#358783" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center justify-between rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 shadow-2xs">
                                <div>
                                    <div className="text-[24px] sm:text-[28px] font-bold text-[#0B2535]">{stats.needsMoreData}</div>
                                    <div className="text-[11px] sm:text-[12px] text-[#617887]">Needs more data</div>
                                </div>
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#FFF8E6] text-[#B78103]">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7092 5.86365V5.96463M10.7092 8.89309V14.952M10.7092 0.814575C9.40984 0.814575 8.12316 1.04965 6.92267 1.50638C5.72218 1.96311 4.63139 2.63256 3.71257 3.47648C2.79375 4.32041 2.06491 5.3223 1.56765 6.42495C1.07039 7.5276 0.814453 8.70941 0.814453 9.9029C0.814453 11.0964 1.07039 12.2782 1.56765 13.3809C2.06491 14.4835 2.79375 15.4854 3.71257 16.3293C4.63139 17.1732 5.72218 17.8427 6.92267 18.2994C8.12316 18.7562 9.40984 18.9912 10.7092 18.9912C13.3335 18.9912 15.8503 18.0337 17.7059 16.3293C19.5616 14.6249 20.604 12.3133 20.604 9.9029C20.604 7.49253 19.5616 5.18088 17.7059 3.47648C15.8503 1.77209 13.3335 0.814575 10.7092 0.814575Z" stroke="#91601B" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-full min-w-0 border-b border-[#E1E9EC]">
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

                        <div className="w-full min-w-0 rounded-2xl border border-[#DDE7EA] bg-white shadow-2xs overflow-hidden">
                            <div className="hidden md:grid md:grid-cols-5 bg-[#F4F8FA] px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-[#617887]">
                                <div>GENE</div>
                                <div>GENOTYPE</div>
                                <div>PHENOTYPE</div>
                                <div>DATA STATUS</div>
                                <div className="text-right"><span className="sr-only">Action</span></div>
                            </div>

                            <div className="divide-y divide-[#E1E9EC]">
                                {geneFindings.map((row) => (
                                    <div 
                                        key={row.id} 
                                        className="flex flex-col gap-2 p-4 md:grid md:grid-cols-5 md:items-center md:gap-4 md:px-5 md:py-4 hover:bg-[#F9FCFD] transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between md:block">
                                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">GENE</span>
                                            <span className="font-bold text-[#0B2535] text-[13px] sm:text-[14px]">{row.gene}</span>
                                        </div>

                                        <div className="flex items-center justify-between md:block">
                                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">GENOTYPE</span>
                                            <span className="text-[#526A79] font-mono text-[12px]">{row.genotype}</span>
                                        </div>

                                        <div className="flex items-center justify-between md:block">
                                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">PHENOTYPE</span>
                                            <div>
                                                {row.phenotypeType === "warning" && (
                                                    <span className="inline-flex rounded-md bg-[#FFF3E0] px-2.5 py-1 text-[11px] font-bold text-[#B76E00]">
                                                        {row.phenotype}
                                                    </span>
                                                )}
                                                {row.phenotypeType === "success" && (
                                                    <span className="inline-flex rounded-md bg-[#E8F5E9] px-2.5 py-1 text-[11px] font-bold text-[#2E7D32]">
                                                        {row.phenotype}
                                                    </span>
                                                )}
                                                {row.phenotypeType === "neutral" && (
                                                    <span className="inline-flex rounded-md bg-[#F1F4F6] px-2.5 py-1 text-[11px] font-medium text-[#617887]">
                                                        {row.phenotype}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between md:block">
                                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">DATA STATUS</span>
                                            <span className="text-[#526A79] text-[12px]">{row.dataStatus}</span>
                                        </div>

                                        <div className="hidden md:flex justify-end">
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#9CB9C9]">
                                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-5 sm:gap-6 grid-cols-1 xl:grid-cols-[1fr_320px]">

                            <div className="rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-6 shadow-2xs">
                                <h2 className="text-[15px] sm:text-[17px] font-bold text-[#0B2535]">Medication insights</h2>
                                <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#617887]">Examples connected to the CYP2C19 finding</p>

                                <div className="mt-4 sm:mt-5 divide-y divide-[#E1E9EC]">
                                    {medicationInsights.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                                            <div>
                                                <div className="font-bold text-[#0B2535] text-[13px] sm:text-[14px]">{item.name}</div>
                                                <div className="text-[11px] sm:text-[12px] text-[#617887]">{item.category}</div>
                                            </div>
                                            <button type="button" className="text-[12px] font-bold text-[#2867A8] hover:underline cursor-pointer">
                                                View evidence
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-between rounded-2xl bg-[#092838] p-4 sm:p-6 text-white shadow-2xs">
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8E0D4" strokeWidth="1.8">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h3 className="text-[14px] sm:text-[15px] font-bold text-white">Your next conversation</h3>
                                    </div>
                                    <p className="text-[11px] sm:text-[12px] leading-relaxed text-[#B9CDD7]">
                                        Take these results to your clinician. Your health, other medications, and the quality of your data also matter.
                                    </p>
                                </div>

                                <div className="mt-5 sm:mt-6 border-t border-[#184657] pt-4">
                                    <button type="button" className="group flex w-full items-center justify-between text-[12px] font-bold text-[#A8E0D4] hover:text-white transition-colors cursor-pointer">
                                        <span>Prepare questions</span>
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="space-y-1 text-[11px] text-[#617887]">
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