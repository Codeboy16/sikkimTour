import img from "../../public/img/logo.png";
let Header = ()=>{
    return(
        <>
        <div className="p-4">
            <div className="flex justify-between md:justify-around">
                <span className=" p-4">
                  <img src={img}/>
                </span>
                <span className="hidden pt-6 md:flex justify-items-center">
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Home</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Menu</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Gallery</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Contact</a>
                </span>
            </div>
        </div>
        </>
    )
}
export default Header;