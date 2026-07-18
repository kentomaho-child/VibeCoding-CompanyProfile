import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Join from './pages/Join'
import Zakat from './pages/Zakat'
import Donasi from './pages/Donasi'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/donasi" element={<Donasi />} />
      </Routes>
      <Footer />
    </div>
  )
}
