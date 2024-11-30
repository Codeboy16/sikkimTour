import "../index.css";
import Typed from "typed.js";
import React from "react";
import { Link } from "react-router-dom";

let Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Tour Packages!^1000",
        "Rich Heritage",
        "Tasty Food",
        "Unique Culture",
        "Peaceful Retreats",
      ],
      typeSpeed: 120,
      smartBackspace: true,
      loop: true,
      backSpeed: 60,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Container for the background and centering */}
      <div
        className="flex flex-col justify-center items-center h-screen text-center px-4">
        <div className="max-w-4xl w-full">
          {/* Main Heading with Typing Effect */}
          <h1 className="text-xl md:text-4xl py-1 font-medium">
            Get up to <span className="text-red-500">40% OFF* </span>on
          </h1>
          <h1 className="text-2xl md:text-6xl py-2 md:py-4 font-bold">
            <span className="text-yellow-400">Sikkim </span>
            <span ref={el}></span>
          </h1>

          {/* Optional subheading visible on larger screens */}
          <h1 className="hidden md:block text-xl md:text-4xl py-2 font-medium">
            Mountainous, Vibrant, Peaceful, Rich Culture.
          </h1>

          {/* Paragraph text */}
          <p className="text-lg md:text-2xl px-2 md:px-10 py-3 text-pretty mx-auto">
            Sikkim a hidden gem in the Himalayas, where breathtaking landscapes,
            vibrant culture, and the warmth of its people create a serene retreat
            for every adventurer.
          </p>

          {/* Action buttons */}
          <div className="flex justify-center flex-wrap space-x-4 mt-6">
            <Link to="/explore">
              <button className="btn btn-primary w-40 md:w-44 mx-2 my-2 md:my-9 font-semibold md:h-12 hidden md:block">
                Explore More &#8594;
              </button>
            </Link>
            <Link to="/package">
              <button className="btn btn-danger w-40 md:w-44 mx-2 my-2 md:my-9 font-semibold md:h-12">
                Book Now &#8594;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
