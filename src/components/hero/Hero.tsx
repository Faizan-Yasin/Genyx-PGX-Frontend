import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(to_right,#092838,#113F51)]">

            <div className="pointer-events-none z-0 absolute -right-45 -top-45 h-110 w-110 rounded-full border-[1.5px] border-[#D6E9E6]/30 lg:hidden" />

            <div className="pointer-events-none z-0 absolute -right-35 -top-35 h-90 w-90 rounded-full border-[1.5px] border-[#D6E9E6]/30 lg:hidden" />

            <div className="relative mx-auto max-w-360 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14">

                <div className="grid items-start gap-10 lg:grid-cols-2 xl:gap-16">

                    <HeroLeft />

                    <HeroRight />

                </div>

            </div>
        </section>
    )
}

export default Hero