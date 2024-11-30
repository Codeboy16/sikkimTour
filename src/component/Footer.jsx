import logo from "../../public/img/logo.png";
let Footer = ()=>{
    return(
        <>
        <div className="bg-slate-800 h-56 py-14 text-white flex justify-evenly flex-warp">
            <span>
            <img src={logo} className="img-fluid"/>
            <h1 className="text-xl font-semibold py-3">©2024 Sikkim Tour Pvt. Ltd</h1> 
            </span>
            <span className="hidden md:block">
              <h1 className="text-xl font-bold ">Destination</h1>
              <h3>Gangtok</h3>
              <h3>Namchi</h3>
              <h3>Nathula</h3>
            </span>

            <span className="hidden md:block">
              <h1 className="text-xl font-bold">Destination</h1>
              <h3>Gangtok</h3>
              <h3>Namchi</h3>
              <h3>Nathula</h3>
            </span>

            <span className="hidden md:block">
              <h1 className="text-xl font-bold ">Destination</h1>
              <h3>Gangtok</h3>
              <h3>Namchi</h3>
              <h3>Nathula</h3>
            </span>
        </div>
        </>
    )
}
export default Footer;