import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {useState, useEffect} from "react";
import Exploremore from "./component/Exploremore";
import gangtok from "../public/img/gtk_sunset.jpeg";
import namchi from "../public/img/buddha_park_2.jpg";
import north from "../public/img/nathula_two.webp";
import west from "../public/img/north_three.webp";


function App() {
  const backgroundImages = [
    "url('/public/img/buddha_park_2.jpg')",
    "url('/public/img/gtk_one.webp')",
    "url('/public/img/gtk_sunset.jpeg')",
    "url('/public/img/kanchenjunga.jpg')",
    "url('/public/img/mg_one.webp')",
    "url('/public/img/nathula_four.webp')",
    "url('/public/img/nathula_one.webp')",
    "url('/public/img/nathula_three.webp')",
    "url('/public/img/nathula_two.webp')",
    "url('/public/img/north_four.webp')",
    "url('/public/img/north_one.webp')",
    "url('/public/img/north_three.webp')",
    "url('/public/img/north_two.webp')",
    "url('/public/img/one.webp')",
    "url('/public/img/siddheshwar_dham.jpg')",
    "url('/public/img/temi_tea_garden.jpeg')",
    "url('/public/img/tsomgo_lake.jpg')",
    "url('/public/img/tsongmo.jpg')",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 15000); // 5000 milliseconds = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);
  //Main Code Here
  return (
    <>
    <div className="bd" style={{ backgroundImage: backgroundImages[currentImageIndex] }}>
    <div className="root">
    <Header/>
    <Home/>
    </div>
    </div>
    {/* Explore More */}
    <div className="text-center my-2 border">
      <h1 className="py-5 text-2xl md:text-4xl font-bold underline my-2">Explore More</h1>
      <div className="flex justify-center flex-wrap">
      <Exploremore photo={gangtok} name="Gangtok" des="Gangtok features MG Road, a lively shopping area; Tsomgo Lake, a beautiful glacial lake; Nathula Pass, a scenic border crossing; and Rumtek Monastery, a spiritual site.."/>
      <Exploremore photo={namchi} name="Namchi" des="Namchi offers stunning attractions like Samdruptse, a towering statue of Padmasambhava; Char Dham, a spiritual park with replicas of famous temples; and breathtaking views of the mountains."/>
      <Exploremore photo={west} name="North Sikkim" des="North Sikkim is renowned for Lachung and Lachen, picturesque towns; Yumthang Valley, known for its rhododendrons; and Gurudongmar Lake, one of the highest lakes in the world."/>
      <Exploremore photo={north} name="West Sikkim" des="West Sikkim is known for its breathtaking landscapes, featuring Pelling with views of Kanchenjunga, Khecheopalri Lake as a sacred site, and Yuksom, the first capital and trekking gateway."/>
      </div>
    </div>
    {/* Photo Section */}
    <Footer/>
    </>
  )
}

export default App
