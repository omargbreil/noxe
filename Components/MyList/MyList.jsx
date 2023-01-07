import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ListContext } from '../../ListContext/ListContexProvider'


export default function MyList() {
  
  
 let {MoviesList , TvList , PeopleList} = useContext(ListContext);

 MoviesList = localStorage.getItem('MoviesList')
 const imgBaseURL='https://image.tmdb.org/t/p/w500/';



  
  
  
    return (
    <>
    
    <div className="row">

      <div className="col-lg-4 row">
       {
        MoviesList.map((movie , index)=>
        {
          return <div key={index} className="col-lg-6">

<div className="item m-2 position-relative">
                  <div className=' mb-5 b-3'>
                  <Link to = {`/MovieDetails/${movie.id}`}>
                    {/* ---------------------- {putting this url because of the api img  not success} --------------------- */}
                  <img src={movie.poster_path==='/4dqEk1X8rHSOWWfnVEuzgXj24Mr.jpg'?
                  `https://m.media-amazon.com/images/M/MV5BNGUzZmU1YzktNTkxOS00ZTI0LTljNmQtMTIxNTliY2I5NDFjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg`:
                  imgBaseURL+movie.poster_path} className='w-100' alt="" />

                  <h4>{movie.title}</h4>

                  <span className='rating position-absolute top-0'>{Math.round( movie.vote_average ) }</span>


                  </Link>

                  </div>
                </div>
          </div>
        })
       }
      </div>
    </div>
    
    </>
  )
}
