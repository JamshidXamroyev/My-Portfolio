import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'


const Service = () => {
    const items = [
        {icon: "fa-solid fa-code", name: "Create Web-App", description: "Creating websites using HTML, Tailwind Css, JavaScript and frontend framework React. Add interactivity to your web application using these technologies and provide flexibility to all devices using Tailwind css."},
        {icon: "fa-solid fa-gear", name: "UI/UX design", description: "Creating user interface and experience design. Nowadays, almost 90% of web application development focuses mainly on improving UI and UI, i.e. user interface and design. Among them, I think this is important."},
        {icon: "fa-solid fa-microchip", name: "API integration", description: "Working with REST Full API to communicate with backend services and secure communication. At the moment, working with APIs, which is considered one of the main tasks of front-end developers, is as necessary as water and air in large projects."}
    ]
    const {darkMode} = useSelector(state => state.mode)

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
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
          { threshold: 0.6 } // Elementning yarmini ko'rsatganda animatsiya boshlanadi
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
    <section className={`md:py-12 py-6 ${darkMode ? "border-y" : ""}`} id='service' ref={elementRef}>
        <h2 className="text-center py-6 mb-6 md:text-4xl font-bold sm:text-3xl text-2xl font-sans">My Services</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-5'>
            {/* Cards */}
            {items.map((item, i) => (
                <div className={`border ${darkMode ? "" : "border-[#00ccff] pt-2"} ${isVisible ? "mega-fadein" : ""}`}>
                    <div className={`w-full flex justify-center items-center border-b ${darkMode ? "" : "border-[#00ccff]"}`}>
                        <i className={`${item.icon} lg:text-5xl md:text-4xl text-3xl py-3`}></i>
                    </div>
                    <div className='p-2 text-center'>
                        <h3 className='md:text-3xl text-2xl font-bold py-3'>{item.name}</h3>
                        <p className='md:text-xl text-[16px] mb-3'>{item.description}</p>
                        <a href="/" className='text-[#00ccff] text-xl underline text-center'>Secret</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Service