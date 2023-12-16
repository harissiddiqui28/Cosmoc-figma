import React from "react";
import Heropic from '../Assets/images/Child.png'
function Hero() {
    return(



<div className="container hero mx-auto p-8 flex flex-col md:flex-row justify-between items-center md:items-start">
<div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
  <h1 className="text-3xl md:text-6xl font-semibold text-white">
    Unveiling the <br />Wonders of the <br />the Universe
  </h1>
</div>

<div className="w-full md:w-1/2 mt-4 md:mt-0">
  <img className="w-full h-auto" src={Heropic} alt="Hero" />
</div>
</div>


    )
}
export default Hero;