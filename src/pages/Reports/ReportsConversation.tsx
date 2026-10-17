import { useInView } from "../../hooks/useInView"

const ReportsConversation = () => {

    const { ref: conversationRef, isInView: conversationInView } = useInView()

    return (
        <div
            ref={conversationRef}
            className={`flex flex-col justify-between rounded-2xl bg-[#092838] p-4 sm:p-6 text-white shadow-2xs transition-all duration-1000 ease-out
                                    ${conversationInView ? "opacity-100 translate-y-0 xl:translate-x-0" : "opacity-0 translate-y-5 xl:translate-y-0 xl:translate-x-5"}
                             `}>
            <div>
                <div className="mb-3 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8E0D4" strokeWidth="1.8">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-white">Your next conversation</h3>
                </div>
                <p className="text-[11px] sm:text-[12px] leading-relaxed text-[#B9CDD7]">
                    Take these results to your clinician. Your health, other medications, and the quality of your data also matter.
                </p>
            </div>

            <div className="mt-5 sm:mt-6 border-t border-[#184657] pt-4">
                <button type="button" className="group flex w-full items-center justify-between text-[12px] font-bold text-[#A8E0D4] hover:text-white transition-colors cursor-pointer">
                    <span>Prepare questions</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ReportsConversation
