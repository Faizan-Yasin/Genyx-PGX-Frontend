import BenefitStrip from "../components/BenefitStrip"
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar"
import PlatformFeatures from "../components/PlatformFeatures"

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <BenefitStrip />
                <PlatformFeatures />
            </main>
        </div>
    )
}

export default Home
