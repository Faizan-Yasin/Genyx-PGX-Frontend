import { Routes, Route } from "react-router"
import Home from '../pages/Home'
import HowItWorks from "../pages/HowItWorks"
import ForClinicians from "../pages/ForClinicians"
import Resources from "../pages/Resources"
import NotFound from "../pages/NotFound"
import UploadPage from "../pages/UploadPage"
import Reports from "../pages/Reports"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/for-clinicians" element={<ForClinicians />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/analysis" element={<UploadPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
