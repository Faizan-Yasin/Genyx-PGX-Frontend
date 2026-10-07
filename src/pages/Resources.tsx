import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useSidebar } from "../hooks/useSidebar"
import { useInView } from "../hooks/useInView"

const resourcesList = [
  {
    category: "Clinical Guidelines",
    title: "CPIC Guidelines for CYP2C19 & Clopidogrel",
    description: "Official dosing recommendations based on CYP2C19 metabolizer phenotypes for antiplatelet therapy.",
    link: "https://cpicpgx.org",
    tag: "CPIC Standard"
  },
  {
    category: "Gene Database",
    title: "PharmGKB Clinical Annotations",
    description: "Comprehensive gene-drug relationship summaries and level of evidence mappings.",
    link: "https://www.pharmgkb.org",
    tag: "Database"
  },
  {
    category: "Methodology",
    title: "VCF File Variant Calling & Callability Limits",
    description: "Technical overview of how quality scores and coverage limitations affect phenotype calls.",
    link: "#",
    tag: "Documentation"
  },
  {
    category: "Clinical Guidelines",
    title: "CPIC Guidelines for CYP2C9 & Warfarin / NSAIDs",
    description: "Phenotype-based dosing algorithms for anticoagulant management.",
    link: "https://cpicpgx.org",
    tag: "CPIC Standard"
  }
]

const Resources = () => {

  const { isSidebarOpen, setIsSidebarOpen } = useSidebar()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Clinical Guidelines", "Gene Database", "Methodology"]

  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: filterRef, isInView: filterInView } = useInView()
  const { ref: cardsRef, isInView: cardsInView } = useInView()

  const filteredResources = resourcesList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <span className="font-semibold text-[#0B2535] truncate">Resources</span>
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

            <div
              ref={headerRef}
              className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between transition-all duration-1000 ease-out ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
            >
              <div>
                <span className="inline-flex rounded-md bg-[#EAF5F2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28766F] uppercase">
                  KNOWLEDGE BASE
                </span>
                <h1 className="mt-2 text-[22px] sm:text-[32px] font-bold tracking-[-0.5px] text-[#0B2535] leading-tight">
                  Evidence & Clinical Resources
                </h1>
                <p className="mt-1 text-[13px] sm:text-[14px] text-[#526A79]">
                  Browse guidelines, database references, and technical documentation.
                </p>
              </div>

              <div className="relative w-full sm:w-72 shrink-0 sm:mt-2">
                <input
                  type="text"
                  placeholder="Search guidelines or genes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-10 rounded-xl border border-[#DDE7EA] bg-white pl-9 pr-3.5 text-[13px] text-[#0B2535] placeholder-[#8BA2B0] focus:outline-none focus:border-[#2867A8] shadow-2xs transition-all"
                />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8BA2B0]"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L11.1 11.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div
              ref={filterRef}
              className={`flex gap-2 overflow-x-auto pb-1 transition-all duration-1000 ease-out ${
                filterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-[12px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#2867A8] text-white shadow-2xs"
                      : "bg-white border border-[#DDE7EA] text-[#526A79] hover:bg-[#F0F4F6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div
              ref={cardsRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 ease-out ${
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {filteredResources.map((res) => (
                <div key={res.title} className="flex flex-col justify-between rounded-2xl border border-[#DDE7EA] bg-white p-5 shadow-2xs hover:border-[#2867A8]/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex rounded-md bg-[#EDF6FA] px-2.5 py-0.5 text-[10px] font-bold text-[#2867A8]">
                        {res.tag}
                      </span>
                      <span className="text-[11px] text-[#617887]">{res.category}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0B2535] leading-snug">
                      {res.title}
                    </h3>
                    <p className="mt-2 text-[12px] sm:text-[13px] text-[#526A79] leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F0F4F6] flex items-center justify-between">
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12px] font-bold text-[#2867A8] hover:underline inline-flex items-center gap-1"
                    >
                      View Guideline Reference →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Resources