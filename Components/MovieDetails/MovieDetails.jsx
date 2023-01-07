import axios from 'axios';
import React from 'react'
import {  useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    let {MovieId} = useParams();
    const [MovieDetails, setMovieDetails] = useState({});
    const imgBaseURL='https://image.tmdb.org/t/p/w500';
    
    

    

     useEffect(()=>
     {
      
    async function getMovieDetails() 
    {
  const Key= '6e33b262d3145bed86171faad028b3ad';
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${Key}&language=en-US`);
        setMovieDetails(data);
   }
        getMovieDetails();
    },[MovieId]);



    
  
  return (  <>
        <div className="row p-5 justify-content-center align-align-items-center">
            <div className="col-lg-6">
                        
                        <img src={MovieDetails.backdrop_path? imgBaseURL+MovieDetails.poster_path:''} className='w-100' alt="" />
            </div>

            <div className="col-lg-6">
                <div className="item align-items-center">
                        <h2>
                          {MovieDetails.original_title}
                        </h2>
                        <h3 className='py-2 text-light text-opacity-50'>
                          {MovieDetails.tagline}
                        </h3>
                        <ul className="py-3 d-flex justify-content-start">
                          {
                          MovieDetails.genres?<>{MovieDetails.genres.map((genre ,index)=>
                          <li className='p-1 m-2 rounded-3 text-light nav-link text-bg-info' key={index}>
                          {genre.name}
                          </li>
                            )}</>:''}
                        </ul>

                        <div className='pb-5'>
                        <h5 className='py-1'> vote : {MovieDetails.vote_average}</h5>
                        <h5 className='py-1'> vote count : {MovieDetails.vote_count}</h5>
                        <h5 className='py-1'> Release date :{MovieDetails.release_date}</h5>
                        <h4 className='text-light text-opacity-50 py-3 my-3'>{MovieDetails.overview}</h4> 
                        </div>
                        
                        <a className='text-center m-5 py-5' href={MovieDetails.homepage} target='blank'>
                     <h1 className='rounded-5 p-5 text-bg-info'>
                    <i className="text-light p-5 fa-solid fa-2xl fa-circle-play"></i>
                    </h1>
                      </a>

                  </div>
              </div>
        </div>
    </>
  )
}
