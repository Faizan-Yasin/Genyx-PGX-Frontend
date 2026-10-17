import { useInView } from "../../hooks/useInView"

interface ReportsMedicationProps {
    medicationInsights: {
        id: string
        name: string
        category: string
    }[]
}

const ReportsMedication = ({ medicationInsights }: ReportsMedicationProps) => {

    const { ref: medicationInsightsRef, isInView: medicationInsightsInView } = useInView()

    return (
        <div
            ref={medicationInsightsRef}
            className={`rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-6 shadow-2xs transition-all duration-1000 ease-out
                                    ${medicationInsightsInView ? "opacity-100 translate-y-0 xl:translate-x-0" : "opacity-0 translate-y-5 xl:translate-y-0 xl:-translate-x-5"}
                                `}>
            <h2 className="text-[15px] sm:text-[17px] font-bold text-[#0B2535]">Medication insights</h2>
            <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#617887]">Examples connected to the CYP2C19 finding</p>

            <div className="mt-4 sm:mt-5 divide-y divide-[#E1E9EC]">
                {medicationInsights.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                        <div>
                            <div className="font-bold text-[#0B2535] text-[13px] sm:text-[14px]">{item.name}</div>
                            <div className="text-[11px] sm:text-[12px] text-[#617887]">{item.category}</div>
                        </div>
                        <button type="button" className="text-[12px] font-bold text-[#2867A8] hover:underline cursor-pointer">
                            View evidence
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReportsMedication
