import { useInView } from "../../hooks/useInView"

interface ReportsIntroProps {
    sampleInfo: {
        id: string
        type: string
        purpose: string
    }
}

const ReportsIntro = ({ sampleInfo }: ReportsIntroProps) => {

    const { ref: introRef, isInView: introInView } = useInView()
    const { ref: downloadRef, isInView: downloadInView } = useInView<HTMLButtonElement>()

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div
                ref={introRef}
                className={`transition-all duration-1000 ease-out
                                    ${introInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
                                `}
            >
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
                ref={downloadRef}
                type="button"
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#2867A8] px-5 py-2.5 text-[13px] font-bold text-white shadow-2xs hover:bg-[#1E5288] transition-all hover:duration-200 ease-out hover:-translate-y-0.5 cursor-pointer shrink-0 sm:mt-2
                                        ${downloadInView ? "opacity-100 translate-y-0 duration-1000" : "opacity-0 -translate-y-5 duration-0"}`}
            >
                <span>Download PDF</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V10M8 10L4.5 6.5M8 10L11.5 6.5M1.5 13.5H14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ReportsIntro
