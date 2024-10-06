import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Exploremore from "./component/Exploremore";
import gangtok from "../public/img/gtk_sunset.jpeg";
import namchi from "../public/img/buddha_park_2.jpg";
import north from "../public/img/nathula_two.webp";
import west from "../public/img/north_three.webp";

function App() {
    const backgroundImages = [
        "url('/img/buddha_park_2.jpg')",
        "url('/img/gtk_one.webp')",
        "url('/img/gtk_sunset.jpeg')",
        "url('/img/kanchenjunga.jpg')",
        "url('/img/mg_one.webp')",
        "url('/img/nathula_four.webp')",
        "url('/img/nathula_one.webp')",
        "url('/img/nathula_three.webp')",
        "url('/img/nathula_two.webp')",
        "url('/img/north_four.webp')",
        "url('/img/north_one.webp')",
        "url('/img/north_three.webp')",
        "url('/img/north_two.webp')",
        "url('/img/one.webp')",
        "url('/img/siddheshwar_dham.jpg')",
        "url('/img/temi_tea_garden.jpeg')",
        "url('/img/tsomgo_lake.jpg')",
        "url('/img/tsongmo.jpg')",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Start from the first image

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [backgroundImages.length]);

    return (
        <>
            <div className="bd" style={{ backgroundImage: backgroundImages[currentImageIndex], backgroundSize: 'cover', height: '100vh' }}>
                <div className="root">
                    <Header />
                    <Home />
                </div>
            </div>

            {/* Explore More */}
            <div className="text-center my-2">
                <h1 className="py-5 text-2xl md:text-4xl font-bold underline my-2">Explore More</h1>
                <div className="flex justify-center flex-wrap">
                    <Exploremore photo={gangtok} name="Gangtok" des="Gangtok features MG Road, a lively shopping area; Tsomgo Lake, a beautiful glacial lake; Nathula Pass, a scenic border crossing; and Rumtek Monastery, a spiritual site." />
                    <Exploremore photo={namchi} name="Namchi" des="Namchi offers stunning attractions like Samdruptse, a towering statue of Padmasambhava; Char Dham, a spiritual park with replicas of famous temples; and breathtaking views of the mountains." />
                    <Exploremore photo={west} name="North Sikkim" des="North Sikkim is renowned for Lachung and Lachen, picturesque towns; Yumthang Valley, known for its rhododendrons; and Gurudongmar Lake, one of the highest lakes in the world." />
                    <Exploremore photo={north} name="West Sikkim" des="West Sikkim is known for its breathtaking landscapes, featuring Pelling with views of Kanchenjunga, Khecheopalri Lake as a sacred site, and Yuksom, the first capital and trekking gateway." />

                    <Exploremore photo={west} name="North Sikkim" des="North Sikkim is renowned for Lachung and Lachen, picturesque towns; Yumthang Valley, known for its rhododendrons; and Gurudongmar Lake, one of the highest lakes in the world." />
                    <Exploremore photo={north} name="West Sikkim" des="West Sikkim is known for its breathtaking landscapes, featuring Pelling with views of Kanchenjunga, Khecheopalri Lake as a sacred site, and Yuksom, the first capital and trekking gateway." />
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    );
}

export default App;

