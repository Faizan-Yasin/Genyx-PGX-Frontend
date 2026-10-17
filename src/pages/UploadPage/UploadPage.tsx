import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { useSidebar } from "../../hooks/useSidebar"
import { useInView } from "../../hooks/useInView"
import UploadPageHeader from "./UploadPageHeader"
import UploadPageInto from "./UploadPageInto"
import UploadPageProgress from "./UploadPageProgress"
import UploadPageUpload from "./UploadPageUpload"
import UploadPageInfo from "./UploadPageInfo"

const UploadPage = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

    const { ref: firstfieldRef, isInView: firstfieldInView } = useInView()
    const { ref: secondfieldRef, isInView: secondfieldInView } = useInView()
    const { ref: authorizationRef, isInView: authorizationInView } = useInView()

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [genome, setGenome] = useState("")
    const [sampleId, setSampleId] = useState("")
    const [authorized, setAuthorized] = useState(false)


    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F4F8FA]">

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1 flex-col h-full min-w-0">

                <UploadPageHeader setIsSidebarOpen={setIsSidebarOpen} />

                <main className="flex-1 overflow-y-auto p-3.5 sm:p-6">
                    <div className="mx-auto max-w-300">

                        <UploadPageInto />

                        <UploadPageProgress />

                        <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
                            <div className="flex flex-col gap-4 sm:gap-5">

                                <UploadPageUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div ref={firstfieldRef}
                                        className={`transition-all duration-1000 ease-out
                                        ${firstfieldInView ? "opacity-100 translate-y-0 sm:translate-x-0" : "opacity-0 translate-y-5 sm:translate-y-0 sm:-translate-x-5"}
                                        `}
                                    >
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

                                    <div
                                        ref={secondfieldRef}
                                        className={`transition-all duration-1000 ease-out
                                        ${secondfieldInView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-5 lg:translate-y-0 lg:translate-x-5"}
                                    `}
                                    >
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

                                <div
                                    ref={authorizationRef}
                                    className={`flex flex-col gap-4 rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-5 transition-all duration-1000 ease-out
                                            ${authorizationInView ? "opacity-100 translate-y-0 duration-1000" : "opacity-0 translate-y-5 duration-0"}
                                    `}>
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

                            <UploadPageInfo />

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UploadPage