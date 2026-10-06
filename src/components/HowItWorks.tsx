import { NavLink } from "react-router"
import { useInView } from "../hooks/useInView"

const steps = [
    {
        number: "01",
        title: "Upload your genetic data",
        description: "Add a supported VCF file and confirm its reference genome.",
    },
    {
        number: "02",
        title: "Review the analysis",
        description: "Follow file checks, coverage assessment, and interpretation.",
    },
    {
        number: "03",
        title: "Explore your PGx report",
        description: "Read the findings and download a report for clinician review.",
    },
]

const HowItWorks = () => {

    const { ref: contentRef, isInView: contentInView } = useInView()
    const { ref: stepsRef, isInView: stepsInView } = useInView()

    return (
        <section className="w-full bg-[#F4F8FA] py-8 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

                    <div
                        ref={contentRef}
                        className={`flex min-w-0 flex-col items-start lg:col-span-5 transition-all duration-1000 ease-out
                           ${contentInView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-10 lg:translate-y-0 lg:-translate-x-10"}
                        `}>
                        <span className="text-[10px] mx-auto font-bold lg:mx-0 tracking-[1.4px] text-[#246D69] uppercase sm:text-[11px]">
                            FROM FILE TO UNDERSTANDING
                        </span>

                        <h2 className="mt-3 text-[32px] font-bold mx-auto text-center lg:text-left lg:mx-0 leading-[1.12] tracking-[-0.8px] text-[#0B2535] sm:text-[39px] xl:tracking-[-1.2px]">
                            A simple start. A meaningful next step.
                        </h2>

                        <p className="mt-3 max-w-85 sm:max-w-110 md:max-w-125 lg::max-w-150 text-[15px] mx-auto text-center lg:text-left lg:mx-0 leading-[1.6] text-[#526A79] sm:text-[17px] lg:text-[18px]">
                            Bring your genetic data. Explore the findings. Take the next conversation to your clinician.
                        </p>

                        <NavLink
                            to="/analysis"
                            className="mt-8 inline-flex h-12 mx-auto lg:mx-0 items-center justify-center gap-3 rounded-xl bg-[#286096] px-6 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#1E4B77] hover:-translate-y-0.5 sm:h-13 sm:px-7 sm:text-[16px]"
                        >
                            <span>Start with your data</span>
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5 text-white"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0.708328 4.87501H12.375M8.20833 9.04168L12.375 4.87501L8.20833 0.708344"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavLink>
                    </div>

                    <div
                        ref={stepsRef}
                        className={`flex flex-col gap-4.5 lg:col-span-7 transition-all duration-1000 ease-outF
                            ${stepsInView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10"}
                        `}>
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex flex-col gap-4 rounded-2xl border border-[#E5ECEE]/80 bg-white p-5 transitio-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-1 sm:flex-row sm:items-center sm:p-6 sm:gap-6"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF5F2] text-[15px] font-bold text-[#246D69] sm:h-12 sm:w-12 sm:text-[16px]">
                                    {step.number}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-[18px] font-bold text-[#0B2535] sm:text-[20px]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1 text-[14px] leading-normal text-[#526A79] sm:text-[15px]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks