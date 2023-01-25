import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "./Pricing.css"
function Pricing() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/productss")
        .then(res=>setdata(res.data))
    },[])
    console.log(data);
  return (
    <>
    <div id="back">
    <div className="container" id='container3'>
        <p id='centerp'>Devoted to wonderful beauty</p>
        <h3 id='centerh3'>Events Pricing</h3>
        <div className="row">
            <div className="col-4">
                <div className="card2">
                    <div className="card-body">
                        <p id="p" style={{textAlign: 'center'}}><span>saa</span></p>
                        <p id="p" style={{textAlign: 'center'}}>sdgsd</p>
                        <p id="p" style={{textAlign: 'center'}}>sdgsdg</p>
                    </div>
                </div>
            </div>
        </div></div>
    </div>
    </>
  )
}

export default Pricing