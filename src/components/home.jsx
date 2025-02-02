import { useSelector } from "react-redux"
import HomeImage from '../assets/home.png'
import FiverIcon from '../assets/fiverr.png'

const Home = () => {
  const {darkMode} = useSelector(state => state.mode)
  return (
    <section className={`md:py-24 max-md:pt-24 max-md:h-[80vh] flex justify-between items-center gap-3 w-full`} id="home">
      {/* My info */}
      <div className="w-full flex flex-col items-start gap-3 mega-fadein">
        <h2 className="md:text-2xl opacity-80">Hello There!</h2>
        <h1 className="lg:text-5xl md:text-4xl font-bold text-3xl ">I'm Jamshid Xamroyev!</h1>
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Junior Frontend Developer</h3>
        {/* Icons */}
        <div className="flex items-center md:gap-4 gap-2 lg:text-3xl text-2xl py-3 w-full">
          <a target="_ablank" href="https://t.me/murodali1" className={`fa-brands fa-telegram cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
          <a target="_ablank" href="https://www.instagram.com/jamshidxamroyev_web" className={`fa-brands fa-square-instagram cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
          <a target="_ablank" href="https://www.fiverr.com/takhir_radjabiy?public_mode=true" className={`cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}>
            <img src={FiverIcon} alt={FiverIcon} className="w-[40px] h-[40px] rounded-full border"/>
          </a>
          <a target="_ablank" href="https://github.com/JamshidXamroyev" className={`fa-brands fa-github cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
          <a target="_ablank" href="mailto:frontend.dev0811@gmail.com" className={`fa-solid fa-envelope cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
        </div>
        <button className={`border max-md:w-full px-12 py-2 rounded-sm font-semibold duration-300 ${darkMode ? "shadow-[#00CED1] border-[#00CED1] hover:shadow-md hover:bg-[#00CED1]" : "hover:bg-[#010131] hover:text-white"} active:opacity-70`}>See My Work</button>
      </div>

      {/* My image */}
      <div className="w-full md:flex hidden items-center justify-center py-2 mega-fadein">
        <img src={HomeImage} alt={HomeImage} />
      </div>
    </section>
  )
}

export default Home