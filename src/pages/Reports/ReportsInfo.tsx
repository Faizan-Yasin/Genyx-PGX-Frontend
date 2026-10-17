import { useInView } from "../../hooks/useInView"

const ReportsInfo = () => {

    const { ref: infoRef, isInView: infoInView } = useInView()

    return (
        <div
            ref={infoRef}
            className={`flex items-start gap-3 rounded-2xl border border-[#D0E2EB] bg-[#EDF6FA] p-4 text-[#0B2535] transition-all duration-1000 ease-out
                                ${infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                            `}>
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#2867A8] text-[11px] font-bold text-[#2867A8] mt-0.5">
                i
            </div>
            <div className="text-[12px] sm:text-[13px]">
                <span className="font-bold">Genetics is one part of the picture.</span>{" "}
                <span className="text-[#526A79]">Discuss results with your clinician before changing any medication.</span>
            </div>
        </div>
    )
}

export default ReportsInfo
