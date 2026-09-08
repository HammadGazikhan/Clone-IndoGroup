import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ConstructionPage from './pages/services/ConstructionPage'
import ElectricalsPage from './pages/services/ElectricalsPage'
import EnergySolutionsPage from './pages/services/EnergySolutionsPage'
import ManpowerPage from './pages/services/ManpowerPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/electricals" element={<ElectricalsPage />} />
        <Route
          path="/services/energy-solutions"
          element={<EnergySolutionsPage />}
        />
        <Route path="/services/manpower" element={<ManpowerPage />} />
        <Route path="/services/construction" element={<ConstructionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
