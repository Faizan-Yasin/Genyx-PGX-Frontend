import { NavLink } from "react-router"
import { useInView } from "../../hooks/useInView"

const HeroLeft = () => {

    const { ref, isInView } = useInView()

    const trustItems = [
        {
            label: "VCF data",
            icon: (
                <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M11.7562 4.63125L7.79792 0.672913H1.46458C1.25462 0.672913 1.05326 0.75632 0.90479 0.904786C0.756324 1.05325 0.672916 1.25462 0.672916 1.46458V14.1312C0.672916 14.3412 0.756324 14.5426 0.90479 14.691C1.05326 14.8395 1.25462 14.9229 1.46458 14.9229H10.9646C11.1745 14.9229 11.3759 14.8395 11.5244 14.691C11.6728 14.5426 11.7562 14.3412 11.7562 14.1312V4.63125ZM7.79792 0.672913V4.63125H11.7562M3.04792 7.79791H9.38125M3.04792 10.9646H7.79792"
                        stroke="#A8E0D4"
                        strokeWidth="1.34583"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Evidence references",
            icon: (
                <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M8.78167 7.28669L11.9483 4.12003M7.19834 8.87003L6.40667 9.66169C5.77678 10.2916 4.92247 10.6455 4.03167 10.6455C3.14087 10.6455 2.28656 10.2916 1.65667 9.66169C1.02678 9.0318 0.672913 8.17749 0.672913 7.28669C0.672913 6.39589 1.02678 5.54158 1.65667 4.91169L4.82334 1.74503C5.1205 1.40807 5.48597 1.13821 5.89545 0.953359C6.30493 0.768512 6.74906 0.672913 7.19834 0.672913C7.64761 0.672913 8.09174 0.768512 8.50122 0.953359C8.91071 1.13821 9.27617 1.40807 9.57334 1.74503M11.1567 2.53669L11.9483 1.74503C12.5782 1.11514 13.4325 0.761269 14.3233 0.761269C15.2141 0.761269 16.0684 1.11514 16.6983 1.74503C17.3282 2.37492 17.6821 3.22923 17.6821 4.12003C17.6821 5.01082 17.3282 5.86514 16.6983 6.49503L13.5317 9.66169C13.2345 9.99865 12.869 10.2685 12.4596 10.4534C12.0501 10.6382 11.6059 10.7338 11.1567 10.7338C10.7074 10.6382 10.2633 10.6382 9.85378 10.4534C9.4443 10.2685 9.07884 9.99865 8.78167 9.66169"
                        stroke="#A8E0D4"
                        strokeWidth="1.34583"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Clinician review",
            icon: (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M0.672913 14.1312V12.5479C0.672913 10.1729 3.83958 8.58958 7.00625 8.58958C10.1729 8.58958 13.3396 10.1729 13.3396 12.5479V14.1312M7.00625 7.00625C7.8461 7.00625 8.65155 6.67262 9.24542 6.07875C9.83928 5.48489 10.1729 4.67943 10.1729 3.83958C10.1729 2.99973 9.83928 2.19427 9.24542 1.60041C8.65155 1.00654 7.8461 0.672913 7.00625 0.672913C6.16639 0.672913 5.36094 1.00654 4.76707 1.60041C4.17321 2.19427 3.83958 2.99973 3.83958 3.83958C3.83958 4.67943 4.17321 5.48489 4.76707 6.07875C5.36094 6.67262 6.16639 7.00625 7.00625 7.00625Z"
                        stroke="#A8E0D4"
                        strokeWidth="1.34583"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ]

    const ArrowIcon = () => (
        <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M0.708328 4.87501H12.375M8.20833 9.04168L12.375 4.87501L8.20833 0.708344"
                stroke="#0B2535"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

    const ReportIcon = () => (
        <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M12.375 4.87501L8.20834 0.708344H1.54168C1.32066 0.708344 1.1087 0.796141 0.952421 0.952421C0.796141 1.1087 0.708344 1.32066 0.708344 1.54168V14.875C0.708344 15.096 0.796141 15.308 0.952421 15.4643C1.1087 15.6205 1.32066 15.7083 1.54168 15.7083H11.5417C11.7627 15.7083 11.9747 15.6205 12.1309 15.4643C12.2872 15.308 12.375 15.096 12.375 14.875V4.87501ZM8.20834 0.708344V4.87501H12.375M3.20834 8.20834H9.87501M3.20834 11.5417H8.20834"
                stroke="#0B2535"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

    return (
        <div
            ref={ref}
            className={`flex min-w-0 flex-col lg:items-start items-center transition-all duration-1000 ease-out
                    ${isInView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-10 lg:translate-y-0 lg:-translate-x-10"}
            `}>

            <p className="mb-6 inline-flex items-center rounded-lg bg-[#173E50] px-4 py-2 text-[10px] font-bold tracking-[1.4px] text-[#A8E0D4] sm:text-[11px]">
                <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8E0D4]" />
                GENYX PHARMACOGENOMICS
            </p>

            <h1 className="lg:max-w-150 text-center md:text-left text-[38px] lg:flex lg:flex-col font-semibold leading-[1.08] tracking-[-1px] text-white sm:text-[46px] lg:text-[50px] xl:text-[54px] xl:tracking-[-1.5px]">
                <span className="block sm:inline">Pharmacogenomics,</span>
                <span className="text-[#A8E0D4]">
                    made personal.
                </span>
            </h1>

            <p className="mt-6 max-w-85 sm:max-w-110 md:max-w-125 lg::max-w-150 text-center lg:text-left lg:max-w-125 text-[16px] leading-[1.55] text-[#B9CDD7] sm:text-[17px] lg:text-[18px]">
                Turn genetic data into a clearer understanding of how your genes
                may affect medication response.
            </p>

            <div className="mt-8 flex w-[85%] flex-col gap-3.5 sm:w-auto sm:flex-row">

                <NavLink
                    to="/analysis"
                    className="flex h-13.5 w-full items-center justify-center rounded-xl bg-[#A8E0D4] hover:bg-[#96D8CA] px-6 text-[15px] font-bold text-[#0B2535] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:text-[16px]"
                >
                    Explore your PGx

                    <span className="ml-4">
                        <ArrowIcon />
                    </span>
                </NavLink>


                <NavLink
                    to="/sample-report"
                    className="flex h-13.5 w-full items-center justify-center rounded-xl border border-[#B9CDD7] bg-white hover:bg-gray-100 px-6 text-[15px] font-bold text-[#0B2535] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:text-[16px]"
                >
                    View sample report

                    <span className="ml-4">
                        <ReportIcon />
                    </span>
                </NavLink>

            </div>

            <div className="mt-8 ml-1 flex w-full flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 sm:gap-x-7.5">

                {trustItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-2.25"
                    >
                        {item.icon}

                        <span className="text-[12px] font-medium text-[#B9CDD7] sm:text-[13px]">
                            {item.label}
                        </span>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default HeroLeft
