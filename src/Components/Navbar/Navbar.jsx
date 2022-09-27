import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContextItems } from '../../SearchContext/SearchContext'

export default function Navbar(props) 
{
  let {SearchItems}=useContext(SearchContextItems);

  return (
    <div>

<nav className="navbar navbar-expand-lg my-2 navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to="home">NOXE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {props.userData?<>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="Movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="Tvshow">Tv Show</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="people">People</Link>
        </li>

        <li>
            

        </li>
    
    
     
        </>:''}

      
      </ul>


     

     
      <ul className="navbar-nav mb-2 mb-lg-0">

        <li className="nav-item d-flex align-items-center me-5">
            <a href="https://www.instagram.com"  target='blank'><i className='fab mx-2 m-3 fa-instagram'></i></a>
          <a href="https://www.facebook.com" target='blank'> <i className='fab mx-2 m-3 fa-facebook'></i></a> 
           <a href="https://www.youtube.com"  target='blank'> <i className='fab mx-2 m-3 fa-youtube'></i></a>

           
        </li>
      
        
        {props.userData?<>
          <form className="d-flex me-5 p-1" role="search">
      <input onChange={(e)=>{SearchItems(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
      <Link to="/SearchComponent">
        <button className="mx-4 btn btn-outline-secondary addStyle" type="submit">Search</button>
      </Link>
      </form>
          <li className="nav-item">
          <Link onClick={props.logOut} className="nav-link" aria-current="page">Log Out</Link>
        </li></>: <> 
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="Register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="Login">Log In</Link>
      </li></>}

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
