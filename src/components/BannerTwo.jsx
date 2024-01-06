import React from "react";




function BannerTwo(params) {
    return(

        


<div class=" text-white  flex flex-col h-[450px] bg-cover bg-center items-center justify-center bg-herothree bg-no-repeat ">
    <h1 class="text-4xl font-bold mb-6 text-center">Join our community</h1>
    <p class="mb-4 text-center">of stargazers, explorers, and cosmic enthusiasts as we embark on a journey <br />through the cosmos like never before.</p>
    <form class="flex flex-col items-center">

        <div class="mb-4">
            <input type="text"
                   placeholder="Enter Your E-mail............."
                   class="bg-white p-3 text-gray-500 rounded-2xl w-64 focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>

        <button class="bg-blue-500 text-white py-3 px-6 rounded-2xl">
            Subscribe
        </button>
    </form>
</div>


    )
}

export default BannerTwo;