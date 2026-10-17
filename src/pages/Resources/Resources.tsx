import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { useSidebar } from "../../hooks/useSidebar"
import { useInView } from "../../hooks/useInView"
import ResourcesHeader from "./ResourcesHeader"
import ResourcesIntro from "./ResourcesIntro"

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
        
        <ResourcesHeader setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
          <div className="mx-auto w-full max-w-300 min-w-0 space-y-5 sm:space-y-6">

            <ResourcesIntro search={search} setSearch={setSearch} />

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