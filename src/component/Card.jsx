import React from 'react'
import logo from '../../public/img/gtk_img.jpg';
const Card = (props) => {
  return (
       <>
       <div class="card w-[18rem] md:my-5 md:mx-2">
           <img src={props.img} class="card-img-top img-fluid" alt="..."/>
           <div class="card-body">
           <h5 class="card-title text-2xl font-bold">{props.title}</h5>
             <p class="card-text">{props.des}</p>
             <a href="#" class="btn btn-primary mt-2">{props.price}</a>
          </div>
       </div>
       </>
  )
}

export default Card