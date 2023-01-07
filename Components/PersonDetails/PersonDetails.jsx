import axios from 'axios';
import React from 'react'
import {  useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function PersonDetails() {
    let {PersonId} = useParams();
    const [PersonDetails, setPersonDetails] = useState({});
    const imgBaseURL='https://image.tmdb.org/t/p/w500';
    
    

   
    

     useEffect(()=>
     {
        async function getPersonDetails() 
        {
      const KEY= '6e33b262d3145bed86171faad028b3ad';
            let {data} = await axios.get(`https://api.themoviedb.org/3/person/${PersonId}?api_key=${KEY}&language=en-US`);
            setPersonDetails(data);
    
        }
        
        
        getPersonDetails();
    },[PersonId]);



    
  
  return (  <>
        <div className="row">
            <div className="col-lg-6 p-5">
                <div className="item">
                <img src={PersonDetails.profile_path===null? `https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png`:imgBaseURL+PersonDetails.profile_path} className='w-100 ' alt="" />
                </div>
            </div>



            <div className="col-lg-6 p-5 ">

            <h1>{PersonDetails.name}</h1>

                <div className="item py-5 text-light text-opacity-50">

                    <h4>birthday : {PersonDetails.birthday}</h4>
                    <h4> born in : {PersonDetails.place_of_birth}</h4>
                    <h4> popularity: {PersonDetails.popularity}</h4>
                 </div>

                 <h3 className='text-light text-opacity-75'>{PersonDetails.biography}</h3>

                </div>
            </div>
               </>
  )
}
