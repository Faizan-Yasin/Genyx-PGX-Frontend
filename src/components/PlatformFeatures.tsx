
const PlatformFeatures = () => {

    const featureCards = [
        {
            title: "A report you can explore",
            description: "Move from a concise overview to gene findings, medication insights, and supporting evidence.",
            linkText: "Explore the sample",
            bgColor: "bg-[#F4F8FA]",
            icon: (
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.85 5.84998L9.85 0.849976H1.85C1.58478 0.849976 1.33043 0.955332 1.14289 1.14287C0.955356 1.33041 0.849998 1.58476 0.849998 1.84998V17.85C0.849998 18.1152 0.955356 18.3695 1.14289 18.5571C1.33043 18.7446 1.58478 18.85 1.85 18.85H13.85C14.1152 18.85 14.3696 18.7446 14.5571 18.5571C14.7446 18.3695 14.85 18.1152 14.85 17.85V5.84998ZM9.85 0.849976V5.84998H14.85M3.85 9.84998H11.85M3.85 13.85H9.85" stroke="#265D9E" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
        {
            title: "Clarity about coverage",
            description: "See what your data can support. Missing or uncertain results stay visible in the report.",
            linkText: "Understand your data",
            bgColor: "bg-[#EAF5F2]",
            icon: (
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.849976 0.849976C0.849976 9.84998 12.85 9.84998 12.85 18.85M12.85 0.849976C12.85 9.84998 0.849976 9.84998 0.849976 18.85M2.84998 3.84998H10.85M1.84998 15.85H11.85M4.84998 6.84998H8.84998M4.84998 12.85H8.84998" stroke="#358783" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
        {
            title: "The evidence, connected",
            description: "Keep the source, context, and limitations alongside each gene–drug insight.",
            linkText: "Explore the evidence",
            bgColor: "bg-[#F4F8FA]",
            icon: (
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0926 9.20422L15.0926 5.20422M9.09262 11.2042L8.09262 12.2042C7.29697 12.9999 6.21783 13.4469 5.09262 13.4469C3.9674 13.4469 2.88827 12.9999 2.09262 12.2042C1.29697 11.4086 0.849976 10.3294 0.849976 9.20422C0.849976 8.07901 1.29697 6.99987 2.09262 6.20422L6.09262 2.20422C6.46798 1.7786 6.92962 1.43772 7.44686 1.20422C7.96411 0.970732 8.52511 0.849976 9.09262 0.849976C9.66012 0.849976 10.2211 0.970732 10.7384 1.20422C11.2556 1.43772 11.7172 1.7786 12.0926 2.20422M14.0926 3.20422L15.0926 2.20422C15.8883 1.40857 16.9674 0.961584 18.0926 0.961584C19.2178 0.961584 20.297 1.40857 21.0926 2.20422C21.8883 2.99987 22.3353 4.07901 22.3353 5.20422C22.3353 6.32944 21.8883 7.40857 21.0926 8.20422L17.0926 12.2042C16.7172 12.6299 16.2556 12.9707 15.7384 13.2042C15.2211 13.4377 14.6601 13.5585 14.0926 13.5585C13.5251 13.5585 12.9641 13.4377 12.4469 13.2042C11.9296 12.9707 11.468 12.6299 11.0926 12.2042" stroke="#265D9E" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
        },
    ]

    return (
        <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">

                <div className="max-w-240">
                    <span className="text-[11px] font-bold text-center block lg:inline lg:text-left tracking-[1.4px] text-[#246D69] uppercase sm:text-[12px]">
                        THE PLATFORM
                    </span>

                    <h2 className="mt-2.5 text-[32px] leading-tight font-bold text-center lg:text-left tracking-[-0.8px] text-[#0B2535] sm:text-[39px] sm:leading-[1.1] lg:text-[46px] xl:tracking-[-1.2px]">
                        Complex genetics. Clearer insights.
                    </h2>

                    <p className="mt-3 max-w-85 sm:max-w-110 md:max-w-125 lg::max-w-150 mx-auto lg:mx-0 text-[16px] leading-normal text-center lg:text-left text-[#526A79] sm:text-[17px] lg:text-[18px]">
                        A thoughtful workspace for understanding pharmacogenomic data, from upload to interpretation.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:mt-10">
                    {featureCards.map((card) => (
                        <div
                            key={card.title}
                            className={`group flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-1 ${card.bgColor}`}
                        >
                            <div>
                                <div
                                    className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-xs bg-white"
                                >
                                    {card.icon}
                                </div>

                                <h3 className="mt-6 text-[20px] font-bold leading-tight text-[#0B2535] sm:text-[22px]">
                                    {card.title}
                                </h3>

                                <p className="mt-2.5 text-[14px] leading-[1.55] text-[#526A79] sm:text-[15px]">
                                    {card.description}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-[13px] font-bold text-[#265D9E] sm:text-[14px]">
                                    {card.linkText}
                                </span>

                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.672913 4.63131H11.7562M7.79791 8.58964L11.7562 4.63131L7.79791 0.672974" stroke="#265D9E" stroke-width="1.34583" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PlatformFeatures