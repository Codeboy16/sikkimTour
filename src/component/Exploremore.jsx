import React from "react";

let Exploremore = (props) => {
    return (
        <div className="border-2 shadow-md max-w-xs md:max-w-sm lg:max-w-md m-4 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img 
                src={props.photo} 
                className="rounded-t-lg h-48 w-full object-cover" 
                alt={props.name}
            />
            <h1 className="text-center font-bold text-lg md:text-xl py-2">{props.name}</h1>
            <p className="text-gray-600 px-2 md:px-4 text-sm mb-4 font-bold">{props.des}</p>
            <a href="#" className="block w-full my-4">
                <button className="w-60 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-blue-700">
                    Book Now
                </button>
            </a>
        </div>
    );
};

export default Exploremore;






