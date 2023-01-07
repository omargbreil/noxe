import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MediaContext } from '../../MediaContext/MediaContext';


export default function Tvshow() {

  const imgBaseURL='https://image.tmdb.org/t/p/w500/';

  const {AllTv} = useContext(MediaContext);

  return (   <>
        
        <div className="row m-5 ">
        <div className=" col-lg-4 justify-content-center align-item-center">

          <div>
            <h2 className='w-75  border-top border-light border-opacity-25'> Trending TV  to Watch now</h2>
            <p className='border-bottom text-Opacity border-light border-opacity-25'>most watched TV  by days </p>
          </div>
        </div>

        {AllTv.map((tv , index)=>{

          return  <div key={index} className="col-lg-2">

             <Link to={`/TvDetails/${tv.id}`} >
             <div className="item m-2 position-relative">
                  <img src={tv.poster_path?imgBaseURL+tv.poster_path:imgBaseURL+tv.backdrop_path} className='w-100' alt="" />
                  <div className=' mb-5 b-3'>
                  <h4>{tv.name}</h4>
                  <span className='rating position-absolute top-0'>{Math.round( tv.vote_average ) }</span>
                  </div>
                </div></Link>
          </div>
        })}
      </div>
    
    </>

          
  )
}
