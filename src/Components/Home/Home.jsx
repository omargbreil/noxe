import React from 'react'
import Movies from '../Movies/Movies';
import People from '../People/People';
import Tvshow from '../Tvshow/Tvshow';
import img from "./cover2.png"

export default function Home() {
  

  



  return (


    <>

        <div className="row justify-content-center align-items-center" id='header'>
          <div className="col-lg-6">
          <div className='p-5 text-center  justify-content-center align-items-center'>
          <img src={img}  className="w-75" alt="" />
          
          </div>
          </div>

          <div className="col-lg-6">
          <h3 className='p-5 m-5 text-light text-opacity-75 border-bottom border-light border-opacity-50 '> We brought you the best movies,
           TV and trending actors <span className='text-info'> We hope you enjoy with us</span>  </h3>
          </div>
        </div>
     <Movies/>
     <Tvshow/>
     <People/>
    
    </>
  )
}
