import React from "react";
import Nav from '../Assets/images/Odyssey.png'

function Footer () {
    return(

      


<nav class="bg-white p-4 flex flex-col md:flex-row items-center justify-between mb-6">
    <div class="mb-4 md:mb-0 md:mr-8">
        <img src={Nav} alt="Logo" class="h-4 w-auto"/>
    </div>

   <div class="text-center md:text-left">
    <div class="md:inline-block">
        <a href="#" class="text-black hover:text-gray-700 block px-4 py-2 my-2 md:my-0 md:inline-block">Connected</a>
        <a href="#" class="text-black hover:text-gray-700 block px-4 py-2 my-2 md:my-0 md:inline-block">Education</a>
        <a href="#" class="text-black hover:text-gray-700 block px-4 py-2 my-2 md:my-0 md:inline-block">Community</a>
        <a href="#" class="text-black hover:text-gray-700 block px-4 py-2 my-2 md:my-0 md:inline-block">About</a>
    </div>
</div>



    <div class="text-center md:text-left mt-4 md:mt-0">
        <a href="#" class="text-black hover:text-gray-700 px-4 py-2 block md:inline-block">Terms & Agreements</a>
        <a href="#" class="text-black hover:text-gray-700 px-4 py-2 block md:inline-block">Privacy & Policy</a>
    </div>
</nav>



    )
}
export default Footer;