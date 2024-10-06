import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Exploremore from "./component/Exploremore";
import gangtok from "../public/img/gtk_img.jpg";
import namchi from "../public/img/buddha_park_2.jpg";
import north from "../public/img/nathula_two.webp";
import west from "../public/img/north_three.webp";
import khanchan from "../public/img/kanchenjunga.jpg";
import north_one from "../public/img/north_one.webp";


function App() {
    const backgroundImages = [
        "url('/img/south_one.webp')",
        "url('/img/gtk_one.webp')",
        "url('/img/gtk_sunset.jpeg')",
        "url('/img/kanchenjunga.jpg')",
        "url('/img/nathula_four.webp')",
        "url('/img/nathula_one.webp')",
        "url('/img/nathula_three.webp')",
        "url('/img/nathula_two.webp')",
        "url('/img/north_one.webp')",
        "url('/img/north_three.webp')",
        "url('/img/north_two.webp')",
        "url('/img/one.webp')",
        "url('/img/temi_tea_garden.jpeg')",
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
                    <Exploremore photo={gangtok} name="Gangtok" des="Gangtok District is one of the six administrative districts of the Indian state of Sikkim. Geographically,Gangtok features MG Road, a lively shopping area; Tsomgo Lake, a beautiful glacial lake; Nathula Pass, a scenic border crossing; and Rumtek Monastery, a spiritual site." />
                    <Exploremore photo={namchi} name="Namchi" des="Namchi or Namtse is the capital of the district of South Sikkim in the Indian state of Sikkim.Namchi offers stunning attractions like Samdruptse, a towering statue of Padmasambhava; Char Dham, a spiritual park with replicas of famous temples." />
                    <Exploremore photo={west} name="North Sikkim" des="With the richness in magnificent mountain ranges, serene lakes,orchards, and beautiful ancient Monasteries, the fascination of the North Sikkim is such that no any tour to the Sikkim can be complete without exploring the regions of the North Sikkim." />
                    <Exploremore photo={north} name="West Sikkim" des="West Sikkim is a district in the Indian state of Sikkim, known for its natural beauty,and a variety of tourism activities.West Sikkim is known for its breathtaking landscapes,Khecheopalri Lake as a sacred site, and Yuksom, the first capital and trekking gateway." />

                    <Exploremore photo={khanchan} name="Kanchenjunga" des="Kanchenjunga: The third highest mountain in the world, Kanchenjunga stands at 8,586 meters (28,169 feet) on the India-Nepal border. Known for its breathtaking beauty and challenging climbs, it is revered as a sacred peak by local communities." />
                    <Exploremore photo={north_one} name="Yuksom" des="Yuksom is a historical town,
                     just 40 km north of Gyalshing city in the Gyalshing district in the Northeast Indian state of Sikkim. It was the first capital of Kingdom of Sikkim established in 1642 AD by Phuntsog Namgyal who was the first Chogyal of Sikkim" />
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    );
}

export default App;

