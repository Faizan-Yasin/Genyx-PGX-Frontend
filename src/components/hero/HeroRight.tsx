
const HeroRight = () => {
    return (
        <div className="relative flex min-w-0 flex-col items-center lg:items-center">

            <div className="pointer-events-none z-10 absolute -right-37 -top-37 hidden h-110 w-110 rounded-full border-[1.5px] border-[#D6E9E6]/30 lg:block" />

            <div className="pointer-events-none z-10 absolute -right-27 -top-27 hidden h-90 w-90 rounded-full border-[1.5px] border-[#D6E9E6]/30 lg:block" />

            <div className="w-full z-20 max-w-130 md:max-w-160 lg:max-w-140 rounded-3xl border border-[#D6E4E6] bg-white p-5 shadow-[0_20px_60px_rgba(11,37,53,0.08)] sm:p-7">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">

                        <p className="text-[9px] font-bold tracking-[1.3px] text-[#526A79] sm:text-[10px]">
                            GENYX / PGx REPORT
                        </p>

                        <h2 className="mt-1 text-[21px] font-bold text-[#0B2535] sm:text-[25px]">
                            Your Genetic Overview
                        </h2>

                        <p className="mt-1 text-[13px] text-[#526A79] sm:text-[15px]">
                            A clearer view of your gene–drug insights.
                        </p>

                    </div>

                    <span className="w-fit shrink-0 rounded-lg bg-[#EAF5F2] px-3 py-1 text-[12px] font-bold text-[#246D69] sm:text-[14px]">
                        Sample report
                    </span>

                </div>

                <div className="my-4 h-px w-full bg-[#E5ECEE]" />

                <div className="py-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                        <div className="flex items-center gap-4">

                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#91601B]" />

                            <span className="text-[14px] font-bold text-[#0B2535] sm:text-[15px]">
                                CYP2C19
                            </span>

                        </div>

                        <span className="rounded-lg bg-[#FFF4DD] px-2.5 py-2 text-[10px] font-bold text-[#91601B] sm:text-[11px]">
                            Intermediate metabolizer
                        </span>

                    </div>

                    <div className="my-4 h-px w-full bg-[#E5ECEE]" />

                </div>

                <div className="py-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                        <div className="flex items-center gap-4">

                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#358783]" />

                            <span className="text-[14px] font-bold text-[#0B2535] sm:text-[15px]">
                                CYP2C9
                            </span>

                        </div>

                        <span className="rounded-lg bg-[#EAF5F2] px-2.5 py-2 text-[10px] font-bold text-[#246D69] sm:text-[11px]">
                            Normal metabolizer
                        </span>

                    </div>

                    <div className="my-4 h-px w-full bg-[#E5ECEE]" />

                </div>

                <div className="py-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                        <div className="flex items-center gap-4">

                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#526A79]" />

                            <span className="text-[14px] font-bold text-[#0B2535] sm:text-[15px]">
                                CYP2D6
                            </span>

                        </div>

                        <span className="rounded-lg bg-[#F1F4F5] px-2.5 py-2 text-[10px] font-bold text-[#526A79] sm:text-[11px]">
                            More data needed
                        </span>

                    </div>

                    <div className="my-4 h-px w-full bg-[#E5ECEE]" />

                </div>

                <p className="rounded-lg bg-[#F4F8FA] px-3 py-2 text-[11px] italic text-[#526A79] sm:text-[12px]">
                    Illustrative results. Review with your clinician.
                </p>

            </div>

            <div className="mt-5 mx-auto w-full max-w-109 rounded-xl border-[1.5px] border-[#356373] bg-[#1B4A5C]">

                <div className="flex min-h-14 items-center gap-4 px-4">

                    <svg
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M0.885437 0.885437C0.885437 10.2604 13.3854 10.2604 13.3854 19.6354M13.3854 0.885437C13.3854 10.2604 0.885437 10.2604 0.885437 19.6354M2.96877 4.01044H11.3021M1.9271 16.5104H12.3438M5.0521 7.13544H9.21877M5.0521 13.3854H9.21877"
                            stroke="#A8E0D4"
                            strokeWidth="1.77083"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="min-w-0">
                        <p className="text-[13px] font-bold text-white sm:text-[14px]">
                            Built around your biology.
                        </p>

                        <p className="text-[9px] text-[#B9CDD7] sm:text-[10px]">
                            Understand the evidence. See the limitations.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default HeroRight
