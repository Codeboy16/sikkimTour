import img from "../../public/img/logo.png";
let Header = ()=>{
    return(
        <>
        <div className="p-3 md:p-4">
            <div className="flex justify-between justify-items-center md:justify-around">
                <span className="p-2">
                  <img src={img} className="w-24 md:w-40"/>
                </span>
                <span className="hidden pt-6 md:flex justify-items-center">
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Home</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Menu</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Gallery</a>
                    <a href="" className="px-4 font-medium text-sm md:text-xl">Contact</a>
                </span>
                <span className="material-symbols-outlined text-3xl md:hidden">menu</span>
            </div>
        </div>
        </>
    )
}
export default Header;