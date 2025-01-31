import LogoWhite from '../assets/logoWhite.png'
import LogoBlack from '../assets/logoBlack.png'
import { useSelector } from 'react-redux'

const Footer = () => {
  const {darkMode} = useSelector(state => state.mode)
  return (
    <footer className={`py-12 grid items-center max-md:text-center gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full border-t`}>
      <div className="w-full flex flex-col max-md:justify-center max-md:items-center gap-3">
        <img src={darkMode ? LogoWhite : LogoBlack} alt="logotip" className='md:w-1/3 w-[170px]'/>
        <p> I will create a high-quality, reliable and modern web application for you during my services. I am ready to bring your <span className={`font-bold capitalize ${darkMode ? "text-[#00ccff]" : "text-[#00cc]"}`}>ideas</span> to <span className={`font-bold capitalize ${darkMode ? "text-[#00ccff]" : "text-[#00cc]"}`}>life</span>.</p>
      </div>

      <ul className='flex flex-col gap-2'>
        <h2 className='font-semibold text-xl'>Details</h2>
        <li className='cursor-pointer linkAnimate'>React js</li>
        <li className='cursor-pointer linkAnimate'>React Redux</li>
        <li className='cursor-pointer linkAnimate'>Tailwind Css</li>
        <li className='cursor-pointer linkAnimate'>JavaScript</li>
      </ul>

      <ul className='flex flex-col gap-2'>
        <h2 className='font-semibold text-xl'>My profils</h2>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='https://github.com/JamshidXamroyev'>Git Hub</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='https://t.me/murodali1'>Telegramm</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='mailto:frontend.dev0811@gmail.com'>Email</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='https://www.fiverr.com/'>Fiver</a>
      </ul>

      <ul className='flex flex-col gap-2'>
        <h2 className='font-semibold text-xl'>Our comunity</h2>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='https://t.me/Uzun_tuman_IT'>Telegramm</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='https://www.instagram.com/jamshidxamroyev_web'>Instagramm</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='/'>Web-site</a>
        <a className='cursor-pointer linkAnimate' target='_ablank' href='tel:+998944632281'>Tel: number</a>
      </ul>
    </footer>
  )
}

export default Footer