import { useState } from "react"
import { useSelector } from "react-redux"
import contactImage from '../assets/contact.png'
import FiverIcon from '../assets/fiverr.png'
import { useEffect, useRef } from 'react'


const Contact = () => {
  const {darkMode} = useSelector(state => state.mode)
  const [load, setLoad] = useState(false)
  const [data, setData] = useState({name: "", email: "", text: ""})
  const [error, setError] = useState(null)
  const [msg, setMsg] = useState(null)

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]: value}))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const submitHandler = async(event) => {
    event.preventDefault()
    setLoad(true)
    const {name, email, text} = data
    if(!name || !email || !text){
      setError(`You did not enter your ${!name ? "name" : ""} ${!email ? "email" : ""} ${!text ? "message" : ""}`)
      setLoad(false)
      setTimeout(() => {
        setData({name: "", email: "", text: ""})
        setError(null), 
        setMsg(null)
      }, 2300);
      return
    }
    const token = "7728480683:AAGdA9e6XzWX0VM8G438WcWYKXB_RZODptk"
    const chatId = "6581009051"
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: `
Foydalanuvchining Ismi:  ${name}  
Foydalanuvchining emaili:  ${email}
Foydalanuvchining xabari: 
${text}
          `,
			}),
    }).then(() => setMsg("Your message has been sent!")).catch(err => setError(err.message)).finally(() => setLoad(false))

    setTimeout(() => {
      setData({name: "", email: "", text: ""})
      setError(null), 
      setMsg(null)
    }, 2300);
  } 
  return (
    <section className="md:py-12 py-3" id="contact" ref={elementRef}>
      <h2 className="text-center py-6 mb-6 md:text-4xl font-bold sm:text-3xl text-2xl font-sans">Contact Me</h2>
      <div className="w-full flex justify-between items-start max-md:flex-col gap-8">
        {/* Info */}
        <div className={`md:w-1/2 w-full my-2 ${isVisible ? "mega-fadein" : ""}`}>
          <h2 className="md:text-2xl text-xl font-bold mb-4">Write to me if there is any service!</h2>
          <p className="md:text-xl text-[17px] text-justify">If you are interested in me or have a service for me, feel free to send me a message on the right side and I will definitely look into it and get back to you via email!</p>
          <div className="h-[20vh] my-4">
           <img src={contactImage} alt={contactImage} className="h-full md:w-1/2 w-full" />
          </div>
          <div className="flex items-center md:gap-4 gap-2 lg:text-3xl text-2xl py-3 w-full">
            <a target="_ablank" href="https://t.me/murodali1" className={`fa-brands fa-telegram cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
            <a target="_ablank" href="https://www.instagram.com/jamshidxamroyev_web" className={`fa-brands fa-square-instagram cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
            <a target="_ablank" href="https://www.fiverr.com/takhir_radjabiy?public_mode=true" className={`cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}>
              <img src={FiverIcon} alt={FiverIcon} className="w-[40px] h-[40px] rounded-full border"/>
            </a>
            <a target="_ablank" href="https://github.com/JamshidXamroyev" className={`fa-brands fa-github cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
            <a target="_ablank" href="mailto:frontend.dev0811@gmail.com" className={`fa-solid fa-envelope cursor-pointer hover:bg-[#00CED1] hover:shadow-[#00CED1] hover:shadow-lg hover:text-white p-3 rounded-full ${darkMode ? "shadow-md duration-200 hover:shadow-[#00ccff] hover:scale-110" : "duration-100 hover:scale-110"}`}></a>
        </div>
        </div>

        {/* Contact */}
        <form className={`md:w-1/2 w-full text-center flex flex-col gap-3 md:px-8 ${isVisible ? "mega-fadein" : ""}`} onSubmit={submitHandler}>
          <h2 className="md:text-2xl text-xl font-bold mb-4">Send Message</h2>
          {error && <p className="w-full py-2 rounded-md text-center text-white font-semibold bg-red-600">{error}</p>}
          {msg && <p className="w-full py-2 rounded-md text-center text-white font-semibold bg-green-600">{msg}</p>}
          <div className="flex flex-col gap-1 items-start">
            <label>Enter your Name</label>
            <input type="text"  placeholder="Enter your Name..." className={`w-full rounded-sm py-2 px-4 border outline-none focus:border-2 font-semibold border-[#00ccff] ${darkMode ? "bg-transparent" : "nav"}`} value={data.name} name="name" onChange={onChangeHandler}/>
          </div>

          <div className="flex flex-col gap-1 items-start">
            <label>Enter your email</label>
            <input type="email"  placeholder="Enter your Email..." className={`w-full rounded-sm py-2 px-4 border outline-none focus:border-2 font-semibold border-[#00ccff] ${darkMode ? "navy" : "nav"}`} value={data.email} name="email" onChange={onChangeHandler}/>
          </div>

          <div className="flex flex-col gap-1 items-start">
            <label>Enter your email</label>
            <textarea rows={5} placeholder="Enter Your Message..." className={`w-full rounded-sm py-2 px-2 border outline-none focus:border-2 font-semibold border-[#00ccff] ${darkMode ? "navy" : "nav"}`} value={data.text} name="text" onChange={onChangeHandler}></textarea>
          </div>
          <button type="submit" className={`border px-12 py-2 rounded-sm text-center font-semibold duration-300 ${darkMode ? "shadow-[#00CED1] border-[#00CED1] hover:shadow-md hover:bg-[#00CED1]" : "hover:bg-[#010131] hover:text-white"} active:opacity-70 flex justify-center items-center gap-4`}>Send Message {load && <span className="loader-min"></span>}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact