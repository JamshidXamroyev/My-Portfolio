import LogoWhite from '../assets/logowhite.png'
import LogoBlack from '../assets/logoBlack.png'
import { useDispatch, useSelector } from 'react-redux'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
import { useEffect, useRef, useState } from 'react'
import { toggleMode } from '../reducers/mode'

const Navbar = () => {
  const dispatch = useDispatch()
  const header = useRef(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const {darkMode} = useSelector(state => state.mode)
  const link = document.querySelectorAll(".capitalize")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        header.current.classList.add("shadow-lg")
      } else{
        header.current.classList.remove("shadow-lg")
      }
    })
  }, [])

  useEffect(() => (
    link.forEach((item) => {
      item.addEventListener("click", () => {
        setOpen(false)
      })
  })
  ), [])


  const items = ["home", "about", "skills", "service", "contact"]
  return (
    <header className={`${darkMode ? "navy" : "nav bg-white"} w-full flex justify-between items-center gap-3 border-b py-3 fixed top-0 left-0 z-[342423423] md:px-20`} ref={header}>
      {/* Logo */}
      <div className="w-full cursor-pointer max-md:px-4">
        <img src={darkMode ? LogoWhite : LogoBlack} alt="logotip" className='md:w-1/3 w-[120px]'/>
      </div>

      {/* Navugation */}
      <ul className={`md:w-1/2 w-full flex md:justify-around justify-center items-center gap-4 max-md:py-6 max-md:bg-white max-md:text-black ${darkMode ? "text-white" : ""} duration-500 max-md:flex-col max-md:absolute left-0 ${open ? "top-0" : "-top-[600%]"}`}>
        {items.map((item, i) => (
          <a key={i} href={`#${item}`} ref={link} onClick={() => setActive(item)} className={`cursor-pointer md:text-xl ${item === active && "text-[#00ccff]"} capitalize font-semibold duration-100 hover:text-[#00ccff]`}>{item}</a>
        ))}
        {open && (
            <i class="fa-solid fa-xmark text-2xl text-black cursor-pointer max-md:absolute top-4 right-4 z-[2]" onClick={() => setOpen(false)}></i>
          )}
      </ul>


      {/* Settings */}
      <div className='w-full flex justify-end md:px-12 max-md:gap-2'>
        <div className='md:hidden flex justify-center items-center'>
          {!open && (
            <i class="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => setOpen(true)}></i>
          )}
        </div>
        {darkMode ? (
          <img src={sun} alt={sun} className='lg:w-[45px] md:w-[40px] w-[30px] cursor-pointer rounded-md'onClick={() => dispatch(toggleMode(false))}/> 
        ) : (
          <img src={moon} alt={moon} className='lg:w-[45px] md:w-[40px] w-[30px] cursor-pointer rounded-md'onClick={() => dispatch(toggleMode(true))}/> 
        )}
      </div>
    </header>
  )
}

export default Navbar