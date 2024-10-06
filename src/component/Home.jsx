import "../index.css";
import Typed from 'typed.js';
import React from "react";
let Home = ()=>{
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Tour Packages!^1000', 'Rich Heritage','Tasty Food','Unique Culture','Peaceful Retreats'],
          typeSpeed: 120,
          smartBackspace: true,
          loop:true,
          backSpeed: 60,
          smartBackspace: true,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
    return(
        <>
        <div className="flex flex-col justify-center justify-items-center h-[40rem] md:h-[45em] text-center">
           <h1 className="text-lg md:text-4xl py-1 font-medium">Get up to 40% OFF on</h1>
           <h1 className="text-2xl md:text-6xl py-2 md:py-4 font-bold"><span className="text-yellow-400">Sikkim </span><span ref={el}></span></h1>
           <p className="text-lg md:text-2xl px-2 md:px-10 py-4 text-pretty">"Sikkim: a hidden gem in the Himalayas, where breathtaking landscapes, vibrant culture, and the warmth of its people create a serene retreat for every adventurer."</p>
           <button className="btn btn-primary w-40 md:w-44 mx-auto my-9 font-semibold md:h-12 ">Explore More &#8594;
           </button>
        </div>

        </>
    )

}
export default Home;