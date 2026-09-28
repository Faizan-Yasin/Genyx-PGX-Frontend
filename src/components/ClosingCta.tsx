import { NavLink } from "react-router"

const ClosingCta = () => {
    return (
        <section className="w-full bg-white py-4 sm:py-6 lg:py-8">
            <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-10 xl:px-12">

                <div className="relative overflow-hidden rounded-3xl bg-[#092838] px-6 py-8 sm:p-10 md:p-12 lg:p-14">

                    <div className="pointer-events-none absolute sm:-right-35 sm:-top-35 -right-50 -top-50 h-110 w-110 rounded-full border-[1.5px] border-[#D6E9E6]/30" />

                    <div className="pointer-events-none absolute sm:-right-25 sm:-top-25 -right-40 -top-40 h-90 w-90 rounded-full border-[1.5px] border-[#D6E9E6]/30" />

                    <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                        <div className="max-w-160">
                            <h2 className="text-[32px] text-center md:text-left font-bold leading-[1.12] tracking-[-0.8px] text-white sm:text-[39px] xl:tracking-[-1.2px]">
                                Start with your genes.
                                Move forward with clarity.
                            </h2>

                            <p className="mt-3 text-[15px] text-center md:text-left text-[#B9CDD7] sm:text-[17px] lg:text-[18px]">
                                Explore the experience with a sample report.
                            </p>
                        </div>

                        <NavLink
                            to="/sample-report"
                            className="inline-flex mx-auto md:mx-0 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#A8E0D4] px-6 py-3.5 text-[15px] font-bold text-[#0B2535] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#96D8CA] sm:px-7 sm:py-4 sm:text-[16px]"
                        >
                            <span>View sample report</span>
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5 text-[#0B2535]"
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

                </div>

            </div>
        </section>
    )
}

export default ClosingCta