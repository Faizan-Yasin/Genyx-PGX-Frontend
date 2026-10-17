import { useInView } from "../../hooks/useInView"

interface UploadPageUploadProps {
    selectedFile: File | null
    setSelectedFile: (file: File) => void
}

const UploadPageUpload = ({ selectedFile, setSelectedFile }: UploadPageUploadProps) => {

    const { ref: uploadRef, isInView: uploadInView } = useInView()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    return (
        <section
            ref={uploadRef}
            className={`rounded-2xl border border-[#DDE7EA] bg-white p-4 sm:p-6 shadow-2xs transition-all duration-1000 ease-out
                                        ${uploadInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                    `}>
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
    )
}

export default UploadPageUpload
