import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TechFeud from "./pages/TechFeud"
import Home from "./pages/Home"
import DevChef from "./pages/DevChef"
import ScrollToTop from "./components/ScrollToTop"
import LeaderBoard from "./components/LeaderBoard"
import Team from "./pages/Team"

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/techfeud" element={<TechFeud />} />
                <Route path="/devchef" element={<DevChef />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </Router>
    )
  }