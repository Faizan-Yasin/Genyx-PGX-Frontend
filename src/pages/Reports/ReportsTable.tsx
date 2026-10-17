import { useInView } from "../../hooks/useInView"

export interface GeneFinding {
    id: string
    gene: string
    genotype: string
    phenotype: string
    phenotypeType: "warning" | "success" | "neutral"
    dataStatus: string
}

interface ReportsTableProps {
    geneFindings: GeneFinding[]
}

const ReportsTable = ({ geneFindings }: ReportsTableProps) => {

    const { ref: geneFindingsRef, isInView: geneFindingsInView } = useInView()

    return (
        <div
            ref={geneFindingsRef}
            className={`w-full min-w-0 rounded-2xl border border-[#DDE7EA] bg-white shadow-2xs overflow-hidden transition-all duration-1000 ease-out
                            ${geneFindingsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                            `}>
            <div className="hidden md:grid md:grid-cols-5 bg-[#F4F8FA] px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-[#617887]">
                <div>GENE</div>
                <div>GENOTYPE</div>
                <div>PHENOTYPE</div>
                <div>DATA STATUS</div>
                <div className="text-right"><span className="sr-only">Action</span></div>
            </div>

            <div className="divide-y divide-[#E1E9EC]">
                {geneFindings.map((row) => (
                    <div
                        key={row.id}
                        className="flex flex-col gap-2 p-4 md:grid md:grid-cols-5 md:items-center md:gap-4 md:px-5 md:py-4 hover:bg-[#F9FCFD] transition-colors cursor-pointer"
                    >
                        <div className="flex items-center justify-between md:block">
                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">GENE</span>
                            <span className="font-bold text-[#0B2535] text-[13px] sm:text-[14px]">{row.gene}</span>
                        </div>

                        <div className="flex items-center justify-between md:block">
                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">GENOTYPE</span>
                            <span className="text-[#526A79] font-mono text-[12px]">{row.genotype}</span>
                        </div>

                        <div className="flex items-center justify-between md:block">
                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">PHENOTYPE</span>
                            <div>
                                {row.phenotypeType === "warning" && (
                                    <span className="inline-flex rounded-md bg-[#FFF3E0] px-2.5 py-1 text-[11px] font-bold text-[#B76E00]">
                                        {row.phenotype}
                                    </span>
                                )}
                                {row.phenotypeType === "success" && (
                                    <span className="inline-flex rounded-md bg-[#E8F5E9] px-2.5 py-1 text-[11px] font-bold text-[#2E7D32]">
                                        {row.phenotype}
                                    </span>
                                )}
                                {row.phenotypeType === "neutral" && (
                                    <span className="inline-flex rounded-md bg-[#F1F4F6] px-2.5 py-1 text-[11px] font-medium text-[#617887]">
                                        {row.phenotype}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between md:block">
                            <span className="text-[10px] font-bold uppercase text-[#617887] md:hidden">DATA STATUS</span>
                            <span className="text-[#526A79] text-[12px]">{row.dataStatus}</span>
                        </div>

                        <div className="hidden md:flex justify-end">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#9CB9C9]">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReportsTable
