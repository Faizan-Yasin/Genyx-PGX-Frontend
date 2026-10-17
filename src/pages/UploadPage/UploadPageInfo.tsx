import { useInView } from "../../hooks/useInView"

const UploadPageInfo = () => {

    const { ref: infoRef, isInView: infoInView } = useInView()

    return (
        <aside
            ref={infoRef}
            className={`h-fit rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 transition-all duration-1000 ease-out
                                    ${infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                `}>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF5F2] text-[#28766F]">
                <svg width="18" height="18" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2313 5.60624L9.43959 0.814575H1.77292C1.51876 0.814575 1.275 0.915542 1.09528 1.09526C0.915558 1.27499 0.81459 1.51874 0.81459 1.77291V17.1062C0.81459 17.3604 0.915558 17.6042 1.09528 17.7839C1.275 17.9636 1.51876 18.0646 1.77292 18.0646H13.2729C13.5271 18.0646 13.7708 17.9636 13.9506 17.7839C14.1303 17.6042 14.2313 17.3604 14.2313 17.1062V5.60624ZM9.43959 0.814575V5.60624H14.2313M3.68959 9.43958H11.3563M3.68959 13.2729H9.43959" stroke="#358783" strokeWidth="1.62917" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <h2 className="text-[15px] sm:text-[16px] font-bold text-[#0B2535]">
                Before you upload
            </h2>

            <div className="mt-4 space-y-3.5">
                <div className="flex gap-2.5">
                    <span className="text-[20px] leading-none text-[#358783]">•</span>
                    <div>
                        <h3 className="text-[12px] sm:text-[13px] font-bold text-[#0B2535]">
                            Confirm your file format
                        </h3>
                        <p className="mt-0.5 text-[11px] sm:text-[12px] leading-relaxed text-[#617887]">
                            A consumer raw-data text file is not automatically a VCF.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <span className="text-[20px] leading-none text-[#358783]">•</span>
                    <div>
                        <h3 className="text-[12px] sm:text-[13px] font-bold text-[#0B2535]">
                            Know the reference genome
                        </h3>
                        <p className="mt-0.5 text-[11px] sm:text-[12px] leading-relaxed text-[#617887]">
                            Check whether your file uses GRCh37 or GRCh38.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <span className="text-[20px] leading-none text-[#358783]">•</span>
                    <div>
                        <h3 className="text-[12px] sm:text-[13px] font-bold text-[#0B2535]">
                            Expect coverage checks
                        </h3>
                        <p className="mt-0.5 text-[11px] sm:text-[12px] leading-relaxed text-[#617887]">
                            Some genes may need data beyond the variants in your VCF.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default UploadPageInfo
