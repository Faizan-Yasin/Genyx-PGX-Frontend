import { useState } from "react"

const FaqSection = () => {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggleFaq = (id: number): void => {
        setOpenId(openId === id ? null : id)
    }

    const faqData = [
        {
            id: 1,
            question: "What is pharmacogenomics?",
            answer: "Pharmacogenomics (PGx) explores how genetic variation may affect a person's response to medications.",
        },
        {
            id: 2,
            question: "Can I upload any genetic data file?",
            answer: "The platform primarily supports standard gzipped VCF (.vcf or .vcf.gz) files containing human genomic variant data.",
        },
        {
            id: 3,
            question: "Will a PGx report tell me what to take?",
            answer: "No. A PGx report provides informational insights based on established clinical guidelines and must always be reviewed with a qualified clinician.",
        },
    ]

    return (
        <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

                    <div className="flex min-w-0 flex-col items-start lg:col-span-5">
                        <span className="mx-auto lg:mx-0 text-[10px] font-bold tracking-[1.4px] text-[#246D69] uppercase sm:text-[11px]">
                            A LITTLE MORE CLARITY
                        </span>

                        <h2 className="mt-3 mx-auto lg:mx-0 text-center lg:text-left text-[32px] font-bold leading-[1.12] tracking-[-0.8px] text-[#0B2535] sm:text-[39px] xl:tracking-[-1.2px]">
                            Good questions. Straight answers.
                        </h2>

                        <p className="mt-3 mx-auto lg:mx-0 max-w-85 sm:max-w-110 md:max-w-125 lg:max-w-150 text-[15px] leading-[1.6] text-[#526A79] sm:text-[17px] lg:text-[18px]">
                            New to pharmacogenomics? Start here.
                        </p>
                    </div>

                    <div className="flex flex-col border-t border-[#E5ECEE] lg:col-span-7">
                        {faqData.map((item) => {
                            const isOpen = openId === item.id

                            return (
                                <div
                                    key={item.id}
                                    className="border-b border-[#E5ECEE] transition-colors duration-200"
                                >
                                    <button
                                        onClick={() => toggleFaq(item.id)}
                                        className="flex cursor-pointer w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#246D69] sm:py-6"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-[17px] font-bold text-[#0B2535] sm:text-[19px] lg:text-[20px]">
                                            {item.question}
                                        </span>

                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#246D69] transition-transform duration-300">
                                            {isOpen ? (
                                                <svg
                                                    width="16"
                                                    height="10"
                                                    viewBox="0 0 16 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M2 8L8 2L14 8"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M8 3.33331V12.6666M3.33334 8H12.6667"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-6 max-w-200 text-[14px] leading-[1.65] text-[#526A79] sm:text-[16px]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FaqSection