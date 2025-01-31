import { useEffect, useRef, useState } from 'react'

const Skill = () => {
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
    <section className="md:py-12 max-md:py-2" id="skills" ref={elementRef}>
      <h2 className="text-center py-6 mb-6 md:text-4xl font-bold sm:text-3xl text-2xl font-sans">What skills do I have?</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        {/* Info */}
        <div className={`flex flex-col gap-3 ${isVisible ? "mega-fadein" : ""}`}>
          <h2 className="md:text-2xl text-xl text-[#00ccff] font-bold">My Skills</h2>
          <p className="md:text-xl text-[16px] text-justify">I want to share my skills with you. You can also see and learn about my skills on the right side. I mainly use React technology in my real projects. I can also add interactivity to a web application using JavaScript. I can also do dynamic apps and auto RWD thanks to my good knowledge of Tailwind css. I can also do version control through Git hub and that allows you to keep track of your project. Because I have worked with backend before, I can write a dynamic frontend that is understandable and easy for the backend user. All my work will be in React js technology and I think you will like allbat the projects I make!</p>
        </div>
        {/* Image */}
        <div className={`flex flex-col gap-4 ${isVisible ? "mega-fadein" : ""}`}>
          <div className="w-full flex flex-col gap-2">
            <p>HTML (Intermediate)</p>
            <span className="relative w-full bg-gray-300 py-2 rounded-md">
              <span className="absolute left-0 top-0 h-full rounded-md w-[70%] bg-[#00ccff]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p>Tailwind Css (Advanced)</p>
            <span className="relative w-full bg-gray-300 py-2 rounded-md">
              <span className="absolute left-0 top-0 h-full rounded-md w-[87%] bg-[#00ccff]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p>JavaScript (Intermediate)</p>
            <span className="relative w-full bg-gray-300 py-2 rounded-md">
              <span className="absolute left-0 top-0 h-full rounded-md w-[74%] bg-[#00ccff]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p>React js (Expert)</p>
            <span className="relative w-full bg-gray-300 py-2 rounded-md">
              <span className="absolute left-0 top-0 h-full rounded-md w-[86%] bg-[#00ccff]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p>Git / Git Hub (Advanced)</p>
            <span className="relative w-full bg-gray-300 py-2 rounded-md">
              <span className="absolute left-0 top-0 h-full rounded-md w-[90%] bg-[#00ccff]"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill

// Boshlang'ich (Beginner)
// O'rtacha (Intermediate)
// Yuqori daraja (Advanced)
// Mutaxassis (Expert)