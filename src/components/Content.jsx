import React from "react";
import contpic from '../Assets/images/Group 121.png'
function Content() {
    return(

    

//     <div class="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
//   <div class="w-full h-auto md:w-1/2 text-center md:text-left mb-4 md:mb-0">
//     <h5>At Odissey, our mission is to inspire, educate, and ignite your passion for the cosmos.
//       <br />We are your premier destination for all things related to space exploration,
//       <br />astronomy, and the mysteries of the universe.
//       <br />Whether you're a seasoned astronomer or a curious novice,
//       <br />join us on a journey to the furthest reaches of the cosmos.
//     </h5>
//     <div class="flex flex-col md:flex-row items-center mt-4">
//       <button class="bg-black text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-4">Get Started</button>
//       <h1 class="mt-2 md:mt-0 font-semibold text-center md:text-left">Watch the Video </h1>
//       <span class="material-symbols-outlined mt-2 md:mt-0 ml-2">play_circle</span>
//     </div>
//   </div>

//   <div class="w-full md:w-1/2 ml-0 md:ml-4">
//     <img class="w-full h-auto" src={contpic} alt="Hero" />
//   </div>
// </div>
<div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
<div className="w-full h-auto md:w-1/2 text-center md:text-left mb-4 md:mb-0">
  <h5 className="text-sm md:text-base">
    At Odissey, our mission is to inspire, educate, and ignite your passion
    for the cosmos.
    <br />
    We are your premier destination for all things related to space
    exploration,
    <br />
    astronomy, and the mysteries of the universe.
    <br />
    Whether you're a seasoned astronomer or a curious novice,
    <br />
    join us on a journey to the furthest reaches of the cosmos.
  </h5>
  <div className="flex flex-col md:flex-row items-center mt-4">
    <button className="bg-black text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-4">
      Get Started
    </button>
    <h1 className="mt-2 md:mt-0 font-semibold text-center md:text-left">
      Watch the Video
    </h1>
    <span className="material-symbols-outlined mt-2 md:mt-0 ml-2">
      play_circle
    </span>
  </div>
</div>

<div className="w-full md:w-1/2 mt-4 md:mt-0">
  <img className="w-full h-auto" src={contpic} alt="Hero" />
</div>
</div>

    )
}
export default Content;