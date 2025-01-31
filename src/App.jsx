import About from "./components/about"
import Home from "./components/home"
import Navbar from "./components/navbar"
import Statistika from './components/statistika'
import Skill from './components/skill'
import Contact from './components/contact'
import Footer from './components/footer'
import {useSelector} from 'react-redux'
import { useEffect } from "react"
import Service from "./components/service"

const App = () => {
  
  const {darkMode} = useSelector(state => state.mode)
  return (
    <div className={`w-[100vw] ${darkMode ? "navy" : "nav"}`}>
      <main className={`lg:w-[90vw] md:w-[95vw] sm:w-[98vw] w-[96vw] mx-auto `}>
        <Navbar />
        <Home />
        <Statistika />
        <About />
        <Skill />
        <Service />
        <Contact />
        <Footer />
    </main>
    </div>
  )
}

export default App