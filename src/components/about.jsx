import {useSelector} from 'react-redux'
import aboutImage from '../assets/about.jpg'
import MyResume from '../assets/Jamshid Xamroyev - Junior Front-End Developer.pdf'
import { useEffect, useRef, useState } from 'react'

const About = () => {
  const {darkMode} = useSelector(state => state.mode)

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);  // Elementga havola olish uchun ref

  useEffect(() => {
    // Intersection Observer yaratilmoqda
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Agar element ko'rinayotgan bo'lsa, animatsiyani ishga tushiramiz
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Elementning yarmini ko'rsatganda animatsiya boshlanadi
    );

    // Observerni elementga o'rnatamiz
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Component unmount bo'lganda observerni to'xtatish
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <section className={`md:py-12 max-md:py-2 ${darkMode ? "border-y" : ""} w-full max-md:px-2`} id='about' ref={elementRef}>
      <h2 className="text-center py-6 mb-6 md:text-4xl font-bold sm:text-3xl text-2xl font-sans">About Me</h2>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-8'>
        <div className={`cursor-pointer group relative md:block hidden ${isVisible ? "mega-fadein" : ""}`}>
          <img src={aboutImage} alt={aboutImage} className='md:rounded-lg'/>
          <div className='absolute md:bottom-0 bottom-0 left-0 h-1 w-full duration-500 z-[12] group-hover:h-4/5 text-transparent group-hover:text-white md:rounded-lg group-hover:bg-[#00ccffb3] flex justify-center items-center text-8xl'>🫡</div>
        </div>

        {/* Info */}
        <div className={`flex flex-col gap-3 ${isVisible ? "mega-fadein" : ""}`}>
          <h2 className='md:text-5xl text-2xl font-bold text-wrap'>UI/UX designer & Frontend developer</h2>
          <p className='md:text-xl space-x-1.5 text-justify md:leading-8'>I am Khamroyev Jamshid, a frontend developer. I have been working in this field for 1-2 years. When I make a web application, I try to make it dynamic as well as design. I mainly work with <span className='text-[#00ccff]'>React</span> technology and am always ready for challenges. Before that I have developed more than 10 web applications and fully delivered them to my Clients! I am very interested in this field and will continue to work to gain experience. My main goal is to become a <span className='text-[#00ccff]'>Senior Full-Stack</span> developer!</p>
          <a href={MyResume} download={"Jamshid (Frontend Developer)"} className={`border px-12 py-2 rounded-sm text-center font-semibold duration-300 ${darkMode ? "shadow-[#00CED1] border-[#00CED1] hover:shadow-md hover:bg-[#00CED1]" : "hover:bg-[#010131] hover:text-white"} active:opacity-70`}>Dowload CV</a>
        </div>
      </div>
    </section>
  )
}

export default About