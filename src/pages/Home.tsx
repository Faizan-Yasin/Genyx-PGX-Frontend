import BenefitStrip from "../components/BenefitStrip"
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar"
import PlatformFeatures from "../components/PlatformFeatures"
import HowItWorks from "../components/HowItWorks"
import FaqSection from "../components/FaqSection"
import ClosingCta from "../components/ClosingCta"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <BenefitStrip />
                <PlatformFeatures />
                <HowItWorks />
                <FaqSection />
                <ClosingCta />
                <Footer />
            </main>
        </div>
    )
}

export default Home
