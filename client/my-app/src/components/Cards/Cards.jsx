import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "./Cards.css"
function Cards() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/productss")
        .then(res=>setdata(res.data))
    },[])
    console.log(data);
  return (
    <>
    <div id='back'>
    <div className="container" id='container2'>
        <p id='centerp'>Devoted to wonderful beauty</p>
        <h3 id='centerh3'>Our Portfolio</h3>
        <div className="row">
            {data.map((item,index)=>(
            <div className="col-4">
                <div className="card">
                    <img src={item.img} alt="" />
                    <div className="card-body">
                        <p id="namep" style={{textAlign: 'center'}}>{item.name}</p>
                        <p id="pricep" style={{textAlign: 'center'}}>{item.price}</p>
                    </div>
                </div>
            </div>
            ))}
        </div></div>
    </div>
    </>
  )
}

export default Cards