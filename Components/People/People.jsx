import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MediaContext } from '../../MediaContext/MediaContext'


export default function People() {

  const {AllPeople} = useContext(MediaContext);
  const imgBaseURL='https://image.tmdb.org/t/p/w500/';



  return ( <>

   
<div className="row m-5 ">
        <div className=" col-lg-4 justify-content-center align-item-center">

          <div>
            <h2 className='w-75  border-top border-light border-opacity-25'> Trending actor to Watch now</h2>
            <p className='border-bottom text-Opacity border-light border-opacity-25'>most watched actor by days </p>
          </div>
        </div>

        {AllPeople.map((person , index)=>{

          return  <div key={index} className="col-lg-2">

                <div className="item m-2 position-relative">
                  <div className=' mb-5 b-3'>
                  <Link to = {`/PersonDetails/${person.id}`}>
                  <img src={person.profile_path===null?`https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png`:imgBaseURL+person.profile_path} className='w-100' alt="" />

                  <h4>{person.name}</h4>
                  </Link>
                  </div>
                </div>
          </div>
        })}
      </div>
    
    </>
  )
}
