import BenefitStrip from "../components/BenefitStrip"
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar"
import PlatformFeatures from "../components/PlatformFeatures"
import HowItWorks from "../components/HowItWorks"

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <BenefitStrip />
                <PlatformFeatures />
                <HowItWorks/>
            </main>
        </div>
    )
}

export default Home
