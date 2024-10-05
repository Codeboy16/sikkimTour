let Exploremore = (props)=>{
    return(
        <>
        <div className="border-2 shadow-md w-80 h-[26rem] m-4 rounded-lg overflow-scroll">
          <img src={props.photo} className="rounded-lg h-48 w-full"/>
          <h1 className="text-center font-bold text-xl py-2">{props.name}</h1>
          <p className="text-pretty px-2">{props.des}</p>
          <a href="#" className="border btn btn-primary mt-2"><button>Book Now</button></a>
        </div>
        </>
    )
}
export default Exploremore;