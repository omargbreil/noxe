import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MediaContext } from '../../MediaContext/MediaContext';


export default function Movies() {
  const imgBaseURL='https://image.tmdb.org/t/p/w500/';

  let {AllMovies}=useContext(MediaContext);



  return (


    <>
      
      <div className="row m-5 ">
        <div className=" col-lg-4 justify-content-center align-item-center">

          <div>
            <h2 className='w-75  border-top border-light border-opacity-25'> Trending movies to Watch now</h2>
            <p className='border-bottom text-Opacity border-light border-opacity-25'>most watched movies by days </p>
          </div>
        </div>

        {AllMovies.map((movie , index)=>{

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
                  </Link>
                  </div>
                </div>
          </div>
        })}
      </div>
    
    </>
  )
}