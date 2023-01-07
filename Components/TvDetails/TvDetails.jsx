import axios from 'axios';
import React,{  useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function TvDetails() 
{
  const imgBaseURL='https://image.tmdb.org/t/p/w500';
    const Key= '6e33b262d3145bed86171faad028b3ad';
    const [TvDetails, setTvDetails] = useState({});
    let {TvId} = useParams();



  useEffect(() => 
  {
    async function getTvDetails() 
    {
      let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${TvId}?api_key=${Key}&language=en-US`);
      setTvDetails(data);
    }
    getTvDetails()
  
    
  }, [TvId]);
  

  
  return (
    <>

    <div className="row p-4 m-4">
      <div className="col-lg-6">
         <img src={TvDetails.poster_path===null?imgBaseURL+TvDetails.backdrop_path:imgBaseURL+TvDetails.poster_path} className='w-100' alt="" />
      </div>
      <div className="col-lg-6">
        <h2>{TvDetails.name}</h2>

        <ul className='d-flex pt-3'>
          {
            TvDetails.genres?<>
            {TvDetails.genres.map((genre,index)=>
            <li className='nav-link p-2 text-bg-info text-light rounded-3 m-2'key={index}>{genre.name}</li>)}</>:''
          }
        </ul>
          <div className='my-2 py-4'>
          <h4 className='py-1'> vote :{TvDetails.vote_average}</h4>
        <h4 className='py-1'> vote count :{TvDetails.vote_count}</h4>
        <h4 className='py-1'> release data : {TvDetails.first_air_date}</h4>
          </div>

          <h3 className=' text-light text-opacity-50'>{TvDetails.overview}</h3>

         <div className="pt-5 mt-5"> 
         <a className='text-center mt-5 py-5' href={TvDetails.homepage} target='blank'>
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
