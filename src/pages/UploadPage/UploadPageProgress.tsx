import { useInView } from "../../hooks/useInView"

const UploadPageProgress = () => {

    const { ref: progressRef, isInView: progressInView } = useInView()

    return (
        <div
            ref={progressRef}
            className={`mb-6 flex h-12 w-full items-center justify-between rounded-xl border border-[#DDE7EA] bg-white px-2 sm:px-5 shadow-2xs transition-all duration-1000 ease-out
                                ${progressInView ? "opacity-100 translate-y-0 duration-1000" : "opacity-0 translate-y-5 duration-0"}
                            `}>
            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#2867A8] text-[10px] min-[371px]:text-[11px] font-bold text-white">
                    1
                </span>
                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] font-bold text-[#0B2535] whitespace-nowrap">
                    Upload data
                </span>
            </div>

            <div className="mx-1 min-[371px]:mx-2 sm:mx-6 h-px min-w-1.5 flex-1 bg-[#E1E9EC]" />

            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F7F8] text-[10px] min-[371px]:text-[11px] font-semibold text-[#526A79]">
                    2
                </span>
                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] text-[#526A79] whitespace-nowrap">
                    Analysis
                </span>
            </div>

            <div className="mx-1 min-[371px]:mx-2 sm:mx-6 h-px min-w-1.5 flex-1 bg-[#E1E9EC]" />

            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F7F8] text-[10px] min-[371px]:text-[11px] font-semibold text-[#526A79]">
                    3
                </span>
                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] text-[#526A79] whitespace-nowrap">
                    Your Report
                </span>
            </div>
        </div>
    )
}

export default UploadPageProgress
