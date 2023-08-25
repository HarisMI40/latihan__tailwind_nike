import Button from "../components/Button"
import { arrowRight, star } from "../assets/icons"
import { shoes, statistics } from "../constant"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
const Hero = () => {


  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">  Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>

          <Button label="Shop Now" iconURL={arrowRight}/>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={stat.label} className="flex flex-col justify-center items-center">
                <p className="text-4xl font-palanquin font-bold">{stat.label}</p>
                <p className="font-monsterrat leading-7 text-slate-gray">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-200 relative flex-1 flex justify-center items-center bg-primary xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
          <img 
          src={bigShoe1}
          width={500}
          height={500}
          className="object-contain relative z-10"
          />

          <div>
            {shoes.map((shoe, index) => (
              <div key={index}>
                {/* <ShoeCard imgUrl={shoe} changeBigShoeImage={() => {}} bigShoeImg={bigShoe1} /> */}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Hero