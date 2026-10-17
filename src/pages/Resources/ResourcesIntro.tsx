import { useInView } from "../../hooks/useInView"

interface ResourcesIntroProps {
    search: string
    setSearch: (value: string) => void
}

const ResourcesIntro = ({ search, setSearch }: ResourcesIntroProps) => {

    const { ref: introRef, isInView: introInView } = useInView()

    return (
        <div
            ref={introRef}
            className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between transition-all duration-1000 ease-out ${introInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
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
    )
}

export default ResourcesIntro
