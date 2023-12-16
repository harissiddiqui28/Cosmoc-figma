import React from "react";
import Art from '../Assets/images/ast.png'
import Art1 from '../Assets/images/nasa.png'
import Art2 from '../Assets/images/boe.png'
import Art3 from '../Assets/images/SpaceX.png'



function Stickers(params) {
    return(

<div class="container sm:mx-auto mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    <div class="mb-4 flex justify-center">
        <img class="w-24 h-auto mt-4" src={Art} alt="Image 1" />
    </div>

    <div class="mb-4  flex justify-center">
        <img class="w-24 h-auto mt-4" src={Art1} alt="Image 2" />
    </div>

    <div class="mb-4  flex justify-center">
        <img class="w-24 h-auto" src={Art2} alt="Image 3" />
    </div>

    <div class="mb-4  flex justify-center">
        <img class="w-24 h-auto" src={Art3} alt="Image 4" />
    </div>
</div>

    )
}
export default Stickers;