import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

const UploadPage = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth >= 768 
        }
        return true
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false)
            } else {
                setIsSidebarOpen(true) 
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [genome, setGenome] = useState("")
    const [sampleId, setSampleId] = useState("")
    const [authorized, setAuthorized] = useState(false)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F4F8FA]">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1 flex-col overflow-y-auto min-w-0">

                <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#E1E9EC] bg-white px-3 sm:px-6">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen((prev) => !prev)}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-[#F0F4F6] md:hidden cursor-pointer"
                            aria-label="Toggle Sidebar"
                        >
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.850006 0.85H16.85M0.850006 6.85H16.85M0.850006 12.85H16.85" stroke="#0B2535" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] truncate">
                            <span className="text-[#526A79] truncate">Workspace</span>
                            <svg width="6" height="10" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                <path d="M0.566681 0.56665L5.23335 5.23332L0.566681 9.89998" stroke="#526A79" strokeWidth="1.13333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-[#0B2535] truncate">New analysis</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <span className="hidden rounded-md bg-[#F2F6F7] px-3 py-1 text-[11px] font-semibold text-[#526A79] sm:block">
                            Demo workspace
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5F2] text-[10px] font-bold text-[#28766F]">
                            GX
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-3.5 sm:p-6">
                    <div className="mx-auto max-w-300">
                        <div className="mb-5 sm:mb-6">
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

                        <div className="mb-6 flex h-12 w-full items-center justify-between rounded-xl border border-[#DDE7EA] bg-white px-2 sm:px-5 shadow-2xs">
                            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#2867A8] text-[10px] min-[371px]:text-[11px] font-bold text-white">
                                    1
                                </span>
                                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] font-bold text-[#0B2535] whitespace-nowrap">
                                    Upload data
                                </span>
                            </div>

                            <div className="mx-1 min-[371px]:mx-2 sm:mx-6 h-px min-w-1.5 flex-1 bg-[#E1E9EC]" />

                            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F7F8] text-[10px] min-[371px]:text-[11px] font-semibold text-[#526A79]">
                                    2
                                </span>
                                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] text-[#526A79] whitespace-nowrap">
                                    Analysis
                                </span>
                            </div>

                            <div className="mx-1 min-[371px]:mx-2 sm:mx-6 h-px min-w-1.5 flex-1 bg-[#E1E9EC]" />

                            <div className="flex items-center gap-1 max-[370px]:gap-1 min-[371px]:gap-1.5 sm:gap-2.5 shrink-0">
                                <span className="flex h-5 w-5 min-[371px]:h-6 min-[371px]:w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F7F8] text-[10px] min-[371px]:text-[11px] font-semibold text-[#526A79]">
                                    3
                                </span>
                                <span className="text-[10px] min-[371px]:text-[12px] sm:text-[13px] text-[#526A79] whitespace-nowrap">
                                    Your Report
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <section className="rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-6 shadow-2xs">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h2 className="text-[14px] sm:text-[15px] font-bold text-[#0B2535]">
                                            Genetic data file
                                        </h2>
                                        <span className="text-[11px] sm:text-[12px] font-medium text-[#617887]">
                                            Step 1 of 3
                                        </span>
                                    </div>

                                    <label
                                        htmlFor="file-upload"
                                        className="flex min-h-44 sm:min-h-50 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#9CB9C9] bg-[#F9FCFD] p-4 text-center transition-colors hover:bg-[#F3F9FB]"
                                    >
                                        <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#EAF3FA] text-[#2867A8]">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5875 13.9208V0.920837M15.0042 6.3375L9.5875 0.920837L4.17084 6.3375M0.920837 13.9208V18.2542H18.2542V13.9208" stroke="#265D9E" strokeWidth="1.84167" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>

                                        <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0B2535]">
                                            Drag your VCF file here
                                        </h3>
                                        <p className="mt-1 text-[12px] sm:text-[13px] text-[#617887]">
                                            or choose a file from your device
                                        </p>

                                        <span className="mt-4 rounded-xl bg-[#2867A8] px-5 py-2 text-[12px] sm:px-6 sm:py-2.5 sm:text-[13px] font-bold text-white shadow-2xs hover:bg-[#1E5288]">
                                            Choose file
                                        </span>

                                        <input
                                            id="file-upload"
                                            type="file"
                                            accept=".vcf,.vcf.gz"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>

                                    <div className="mt-4 flex flex-col justify-between gap-2 text-[12px] sm:flex-row sm:items-center">
                                        <span className="text-[#617887]">
                                            VCF or compressed VCF · .vcf / .vcf.gz
                                        </span>
                                        <button
                                            type="button"
                                            className="font-bold flex items-center gap-2 sm:gap-4 text-[#2867A8] hover:text-[#0e4d8b] cursor-pointer"
                                        >
                                            <span>Use a demo file</span>
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.637501 4.38751H11.1375M7.3875 8.13751L11.1375 4.38751L7.3875 0.637512" stroke="#265D9E" strokeWidth="1.275" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    {selectedFile && (
                                        <div className="mt-3 rounded-lg bg-[#F1F7F8] px-3.5 py-2 text-[12px] text-[#526A79] break-all">
                                            Selected file:{" "}
                                            <span className="font-semibold text-[#0B2535]">
                                                {selectedFile.name}
                                            </span>
                                        </div>
                                    )}
                                </section>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="genome"
                                            className="mb-1.5 block text-[12px] font-bold text-[#0B2535]"
                                        >
                                            Reference genome
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="genome"
                                                value={genome}
                                                onChange={(e) => setGenome(e.target.value)}
                                                className="h-10.5 w-full appearance-none rounded-xl border border-[#DDE7EA] bg-white px-3.5 text-[13px] text-[#0B2535] outline-none focus:border-[#2867A8]"
                                            >
                                                <option value="">Select genome build</option>
                                                <option value="GRCh37">GRCh37 / hg19</option>
                                                <option value="GRCh38">GRCh38 / hg38</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-[#526A79]">
                                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.672913 0.672913L5.42291 5.42291L10.1729 0.672913" stroke="#526A79" strokeWidth="1.34583" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="sample-id"
                                            className="mb-1.5 block text-[12px] font-bold text-[#0B2535]"
                                        >
                                            Sample ID (optional)
                                        </label>
                                        <input
                                            id="sample-id"
                                            type="text"
                                            value={sampleId}
                                            onChange={(e) => setSampleId(e.target.value)}
                                            placeholder="Enter a non-identifying label"
                                            className="h-10.5 w-full rounded-xl border border-[#DDE7EA] bg-white px-3.5 text-[13px] text-[#0B2535] outline-none placeholder:text-[#90A4AE] focus:border-[#2867A8]"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5">
                                    <label className="flex items-start gap-2.5 cursor-pointer text-[12px] text-[#526A79]">
                                        <input
                                            type="checkbox"
                                            checked={authorized}
                                            onChange={(e) => setAuthorized(e.target.checked)}
                                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#DDE7EA] accent-[#2867A8]"
                                        />
                                        <span>
                                            I am authorized to use this data and have read the data policy.
                                        </span>
                                    </label>

                                    <div className="flex flex-col gap-3 border-t border-[#E1E9EC] pt-4 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-[12px] text-[#617887]">
                                            Need help finding your VCF file? Read the data guide.
                                        </p>
                                        <button
                                            type="button"
                                            disabled={!selectedFile || !genome || !authorized}
                                            className="flex h-11 w-full sm:w-auto justify-center items-center gap-3 rounded-xl bg-[#2867A8] px-6 text-[13px] font-bold text-white transition-all hover:bg-[#1E5288] disabled:cursor-not-allowed disabled:bg-[#E7EEF1] disabled:text-[#91A5AF]"
                                        >
                                            <span>Review file</span>
                                            <svg width="10" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.708344 4.87501H12.375M8.20834 9.04168L12.375 4.87501L8.20834 0.708344" stroke="currentColor" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <aside className="h-fit rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5">
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
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UploadPage