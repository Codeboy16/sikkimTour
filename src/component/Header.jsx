import React, { useState } from "react";
import img from "../../public/img/logo.png";

let Header = () => {
    // State to manage menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="p-3 md:p-4">
                <div className="flex justify-between items-center md:justify-around">
                    <span className="p-2 cursor-pointer">
                        <img src={img} className="w-24 md:w-40" alt="Logo" />
                    </span>
                    <span className="hidden pt-6 md:flex justify-items-center">
                        <a href="" className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500">Home</a>
                        <a href="" className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500">Explore</a>
                        <a href="" className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500">Package</a>
                        <a href="" className="px-4 font-medium text-sm md:text-xl hover:underline hover:decoration-red-500">Contact</a>
                    </span>
                    <span className="material-symbols-outlined text-3xl md:hidden" onClick={toggleMenu}>
                        menu
                    </span>
                </div>

                {/* Conditional rendering of the mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white text-black shadow-md mt-2 p-2 rounded">
                    <a href="" className="flex items-center block px-4 py-2 text-sm font-medium ">
                             <span className="material-symbols-outlined px-1">home</span> Home</a>
                    <a href="" className="flex items-center block px-4 py-2 text-sm font-mediumr">
                             <span className="material-symbols-outlined px-1"><span class="material-symbols-outlined">image</span></span>Explore</a>  
                    <a href="" className="flex items-center block px-4 py-2 text-sm font-medium ">
                            <span className="material-symbols-outlined px-1">person</span>Package</a> 
                    <a href="" className="flex items-center block px-4 py-2 text-sm font-medium">
                    <span className="material-symbols-outlined px-1"><span class="material-symbols-outlined">
phone_in_talk
</span></span>Contact</a>                       
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
