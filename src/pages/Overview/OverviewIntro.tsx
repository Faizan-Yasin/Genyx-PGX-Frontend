import { Link } from "react-router"
import { useInView } from "../../hooks/useInView"

const OverviewIntro = () => {

    const { ref: introRef, isInView: introInView } = useInView()
    const { ref: analysisRef, isInView: analysisInView } = useInView()

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div
                ref={introRef}
                className={`transition-all duration-1000 ease-out ${introInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
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
    )
}

export default OverviewIntro
