import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import FindJobs from "./pages/JobsPage/FindJob"
import CompaniesPage from "./pages/CompaniesPage/CompaniesPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

function App() {

const location = useLocation()

const hideLayout = location.pathname === '/' || 
location.pathname === '/register'

  return <>

{!hideLayout && <Navbar />}

<Routes>
  <Route index element={<LoginPage />} />
<Route path="/home" element={<HomePage />} />
<Route path='/jobs' element={<FindJobs />} />
<Route path="/companies" element={<CompaniesPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/register" element={<RegisterPage />} />
</Routes>

{!hideLayout && <Footer />}
  </>
}

export default App
