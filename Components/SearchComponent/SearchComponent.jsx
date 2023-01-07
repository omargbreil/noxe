import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContextItems } from '../../SearchContext/SearchContext';
const imgBaseURL='https://image.tmdb.org/t/p/w500/';


export default function SearchComponent() 
{

   let {MovieSearch , TvSearch , PersonSearch}= useContext(SearchContextItems);


   
  return (<>
                {/* ------------------------------ {MOVIE ITEMS} ----------------------------- */}
     
     <h1 className='text-center text-info text-opacity-25 my-5 py-5'> SEARCH TO GET WHAT YOU WANT</h1>
     {
      
      MovieSearch===[]?'':<div className="row m-5 ">
    

      {MovieSearch.map((movie , index)=>{

        return  <div key={index} className="col-lg-2">

              <div className="item m-2 position-relative">
                <div className=' mb-5 b-3'>
                <Link to = {`/MovieDetails/${movie.id}`}>
                  {/* ---------------------- {putting this url because of the api img  not success} --------------------- */}
                <img src={movie.poster_path==='/4dqEk1X8rHSOWWfnVEuzgXj24Mr.jpg'?
                `https://m.media-amazon.com/images/M/MV5BNGUzZmU1YzktNTkxOS00ZTI0LTljNmQtMTIxNTliY2I5NDFjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg`:
                imgBaseURL+movie.poster_path} className='w-100' alt="" />

                <h4>{movie.title}</h4>
                <span className='rating position-absolute top-0'>{Math.round( movie.vote_average ) }</span>
                <span className='text-bg-danger p-1 text-light position-absolute top-0'>Movie</span>
                </Link>
                </div>
              </div>
        </div>
      })}
    </div>
     }

                     {/* ------------------------------ {TV ITEMS} ----------------------------- */}
        
        {
          TvSearch? <div className="row m-5 ">
         
          {TvSearch.map((tv , index)=>{
  
            return  <div key={index} className="col-lg-2">
  
               <Link to={`/TvDetails/${tv.id}`} >
               <div className="item m-2 position-relative">
                    <img src={tv.poster_path?imgBaseURL+tv.poster_path:imgBaseURL+tv.backdrop_path} className='w-100' alt="" />
                    <div className=' mb-5 b-3'>
                    <h4>{tv.name}</h4>
                    <span className='rating position-absolute top-0'>{Math.round( tv.vote_average ) }</span>
                    </div>
                    <span className='text-bg-danger p-1 text-light position-absolute top-0'>TV</span>

                  </div>

                  </Link>
            </div>
          })}
        </div>:''
        }

        {/* ----------------------------- {PEOPLE ITEMS} ----------------------------- */}
   {
    PersonSearch?<div className="row m-5 ">
   

    {PersonSearch.map((person , index)=>{

      return  <div key={index} className="col-lg-2">

            <div className="item m-2 position-relative">
              <div className=' mb-5 b-3'>
              <Link to = {`/PersonDetails/${person.id}`}>
              <img src={person.profile_path===null?`https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png`:imgBaseURL+person.profile_path} className='w-100' alt="" />

              <h4>{person.name}</h4>
              <span className='text-bg-danger p-1 text-light position-absolute top-0'>acor</span>

              </Link>
              </div>
            </div>
      </div>
    })}
  </div>:''
   }
      </>
  )
}
