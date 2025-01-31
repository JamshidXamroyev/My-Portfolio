import { useSelector } from "react-redux"

const Statistika = () => {
  const stats = [
    {num: "32+", name: "All my projects"},
    {num: "26+", name: "Completed projects"},
    {num: "20+", name: "Happy clients"},
    {num: "9/10", name: "Average rating"},
  ]
  const {darkMode} = useSelector(state => state.mode)
  return (
    <section className={`w-full md:py-12 max-md:pt-12 max-md:pb-6 max-md:px-2`}>
      <h2 className="text-center py-6 md:mb-6 md:text-4xl font-bold sm:text-3xl text-2xl">My stats</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:gap-8 gap-4">
        {stats.map((item, i) => (
          <div className="border flex flex-col items-center gap-3 py-3 cursor-pointer hover:scale-105 duration-300" key={i}>
            <h3 className="font-bold lg:text-3xl md:text-2xl text-xl">{item.num}</h3>
            <p className="md:text-xl text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Statistika