import React, { useEffect, useState } from 'react'
import './style.css';

function Fetch() {

let [data,setdata] = useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then((val)=>val.json())
    .then((val)=>setdata(val))
},[])

  return (
    <div className='product'>
        {
            data.map((item)=>
                <div className="fetch">
                    <img src={item.image} alt='' height={"200ppx"} width={"200px"}/>
                    <h2>{item.title}</h2>
                    <button className='fetchbtn'>Buy Now</button>
                </div>
            )
        }
    </div>
  )
}

export default Fetch
