const BenefitStrip = () => {
    
    const benefits = [
        {
            title: "Gene-level clarity",
            description: "Understand your genetic findings",
            icon: (
                <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M0.849998 0.849976C0.849998 9.84998 12.85 9.84998 12.85 18.85M12.85 0.849976C12.85 9.84998 0.849998 9.84998 0.849998 18.85M2.85 3.84998H10.85M1.85 15.85H11.85M4.85 6.84998H8.85M4.85 12.85H8.85"
                        stroke="#358783"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            title: "Evidence in context",
            description: "Connect results with their sources",
            icon: (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M0.850159 9.84998L9.85016 14.85L18.8502 9.84998M0.850159 13.85L9.85016 18.85L18.8502 13.85M9.85016 0.849976L18.8502 5.84998L9.85016 10.85L0.850159 5.84998L9.85016 0.849976Z"
                        stroke="#358783"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            title: "Reports that make sense",
            description: "Prepare for a better conversation",
            icon: (
                <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M14.85 5.84998L9.84998 0.849976H1.84998C1.58476 0.849976 1.33041 0.955332 1.14287 1.14287C0.955333 1.33041 0.849976 1.58476 0.849976 1.84998V17.85C0.849976 18.1152 0.955333 18.3695 1.14287 18.5571C1.33041 18.7446 1.58476 18.85 1.84998 18.85H13.85C14.1152 18.85 14.3695 18.7446 14.5571 18.5571C14.7446 18.3695 14.85 18.1152 14.85 17.85V5.84998ZM9.84998 0.849976V5.84998H14.85M3.84998 9.84998H11.85M3.84998 13.85H9.84998"
                        stroke="#358783"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ]

    return (
        <section className="w-full border-b border-[#E5ECEE] py-6 sm:py-8">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {benefits.map((item) => (
                        <div
                            key={item.title}
                            className="flex items-center gap-4 rounded-2xl border border-[#E5ECEE]/60 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5F2]">
                                {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-[16px] font-bold text-[#0B2535] sm:text-[17px]">
                                    {item.title}
                                </h3>
                                <p className="mt-0.5 text-[13px] leading-snug text-[#526A79] sm:text-[14px]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitStrip