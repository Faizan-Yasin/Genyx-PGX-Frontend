import { useInView } from "../../hooks/useInView"

const UploadPageInto = () => {

    const { ref: introRef, isInView: introInView } = useInView()

    return (
        <div ref={introRef}
            className={`mb-5 sm:mb-6 transition-all duration-1000 ease-out
                    ${introInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
                `}>
            <span className="inline-flex rounded-md bg-[#EAF5F2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28766F] uppercase">
                NEW ANALYSIS
            </span>
            <h1 className="mt-2 text-[22px] leading-tight font-bold tracking-[-0.5px] text-[#0B2535] sm:text-[32px]">
                Start with your genetic data.
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-[#526A79]">
                Upload a VCF file to begin your pharmacogenomic analysis.
            </p>
        </div>
    )
}

export default UploadPageInto
