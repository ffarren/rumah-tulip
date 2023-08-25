const Gallery = () =>{
    return(
        <div className="text-center p-10 sm:p-10 md:p-20 lg:p-40 bg-orange-50">
            <h1 className="font-petrona text-4xl sm:text-6xl text-blue-950 mb-10">Gallery</h1>
            <div className="grid grid-rows-5 sm:grid-rows-5 md:grid-rows-2 lg:grid-rows-2 p-0 md:p-10 lg:p-10 grid-flow-col gap-5 sm:gap-3 lg:gap-5 justify-items-center items-center"> 
                <div className="">
                    <img src="./pictures/1.png" alt="living room"/>
                </div>
                <div className="">
                    <img src="./pictures/2.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/3.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/4.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/5.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/6.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/7.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/8.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/9.png" alt="living room"/>
                </div>
                <div className="row-span-1">
                    <img src="./pictures/10.png" alt="living room"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery