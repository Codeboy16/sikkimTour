import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Exploremore from "./component/Exploremore";

function App() {
  // Define background images
  const backgroundImages = [
    "/img/south_one.jpg",
    "/img/gtk_one.jpg",
    "/img/gtk_sunset.jpg",
    "/img/kanchenjunga.jpg",
    "/img/nathula_four.jpg",
    "/img/nathula_one.jpg",
    "/img/nathula_three.jpg",
    "/img/nathula_two.jpg",
    "/img/north_one.jpg",
    "/img/north_three.jpg",
    "/img/north_two.jpg",
    "/img/one.jpg",
    "/img/temi_tea_garden.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  return (
    <>
      {/* Background Image Container */}
      <div
        className="bd"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`, // Dynamically set background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Make sure the container height takes up the full viewport height
        }}
      >
        <div className="root">
          <Header color="none" />
          <Home />
        </div>
      </div>

      {/* Explore More Section */}
      <div className="text-center my-2">
        <h1 className="py-5 text-2xl md:text-4xl font-bold underline my-2">
          Explore More
        </h1>
        <div className="flex justify-center flex-wrap">
          <Exploremore
            photo="/img/gtk_img.jpg"
            name="Gangtok"
            des="Gangtok District is one of the six administrative districts of the Indian state of Sikkim. Geographically, Gangtok features MG Road, a lively shopping area; Tsomgo Lake, a beautiful glacial lake; Nathula Pass, a scenic border crossing; and Rumtek Monastery, a spiritual site."
          />
          <Exploremore
            photo="/img/buddha_park_2.jpg"
            name="Namchi"
            des="Namchi or Namtse is the capital of the district of South Sikkim in the Indian state of Sikkim. Namchi offers stunning attractions like Samdruptse, a towering statue of Padmasambhava; Char Dham, a spiritual park with replicas of famous temples."
          />
          <Exploremore
            photo="/img/nathula_two.jpg"
            name="North Sikkim"
            des="With the richness in magnificent mountain ranges, serene lakes, orchards, and beautiful ancient Monasteries, the fascination of North Sikkim is such that no tour to Sikkim can be complete without exploring the regions of North Sikkim."
          />
          <Exploremore
            photo="/img/north_three.jpg"
            name="West Sikkim"
            des="West Sikkim is a district in the Indian state of Sikkim, known for its natural beauty and a variety of tourism activities. West Sikkim is known for its breathtaking landscapes, Khecheopalri Lake as a sacred site, and Yuksom, the first capital and trekking gateway."
          />
          <Exploremore
            photo="/img/kanchenjunga.jpg"
            name="Kanchenjunga"
            des="Kanchenjunga: The third highest mountain in the world, Kanchenjunga stands at 8,586 meters (28,169 feet) on the India-Nepal border. Known for its breathtaking beauty and challenging climbs, it is revered as a sacred peak by local communities."
          />
          <Exploremore
            photo="/img/north_one.jpg"
            name="Yuksom"
            des="Yuksom is a historical town, just 40 km north of Gyalshing city in the Gyalshing district in the Northeast Indian state of Sikkim. It was the first capital of the Kingdom of Sikkim established in 1642 AD by Phuntsog Namgyal, the first Chogyal of Sikkim."
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
