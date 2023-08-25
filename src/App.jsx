import Nav from "./components/Nav";
import { CustomerReview, Footer, Hero, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";


import { useState } from "react"

function App() {

  const [dark, setDark] = useState(false);

  return (

    <div className={`${dark && "dark"} space-y-10`}>
      <Nav />
     <section className="xl:padding-1 wide:padding-r padding-b"
     >  
        <Hero />
     </section>
     <section className="padding text-black dark-theme"><PopularProduct/></section>
     <section className="padding dark-theme"><SuperQuality /></section>
     <section className="padding"><Services /></section>
     <section className="padding"><SpecialOffer /></section>
     <section className="padding"><CustomerReview /></section>
     <section className="padding"><Subscribe /></section>
     <section className="padding"><Footer /></section>

     <div className='xl:padding-1 wide:padding-r padding-b'>
        <button className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 transition text-white px-4 py-2 font-semibold rounded-md block m-auto mt-5"
        onClick={() => setDark(!dark)}
        >Mode</button>
     </div>
    </div>
  )
}

export default App
