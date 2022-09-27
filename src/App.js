import './App.css';

import { Navigate, Route , Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import People from './Components/People/People';
import Tvshow from './Components/Tvshow/Tvshow';
import Movies from './Components/Movies/Movies';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import PersonDetails from './Components/PersonDetails/PersonDetails';
import  TvDetails  from "./Components/TvDetails/TvDetails";
import SearchComponent from './Components/SearchComponent/SearchComponent';
import $ from 'jquery';







function App() {

  function ProtectedRoute({children})
  {
    

    if(!localStorage.getItem('userToken'))                                    
    {

     return <Navigate to='/login'/>                     
                                                  // <--------TO PROTECT OUR WEB

    }else
    {
    return children; 
    }
    
  }
  
  /* - SMOOTH REFRESH OR  GET OUR LOCAL stroage  USER TOKEN WHEN WE REFRESH BY COMPONENT DID MOUNT - */
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(()=>{

    if (localStorage.getItem('userToken')) 
    {
     getUserData() 
    }
  }, [])

/* --GET User from local storage in put it in UserData - we send the function as aprpos and  call the function in (login component) when data.message==uccess (row=55)- */
  function getUserData() {

   let decodedToken = jwtDecode(localStorage.getItem('userToken'));
   setUserData(decodedToken);
   
        
  }
// logout from the website and clear the local storage and userData we call the function in Navbar component 
  function logOut() {

    localStorage.removeItem("userToken");
    setUserData(null)


    navigate('/login')
  }

  /* ---------------------------- SCROLL UP Button ---------------------------- */

 $(window).scroll(function () 
 {

  let wscroll = $(window).scrollTop();
  if (wscroll> 100) 
  {
  $("#scrollStyle").fadeIn(500);
  }else
  {
    $("#scrollStyle").fadeOut(200);

  }
  
 })

 function up() 
 {
  $(window).scrollTop(0); 
 }


  return (

    <>
    {/* ---------- sending our user Data and logout function as a props ---------- */}

     <Navbar userData={userData} logOut={logOut}/> 
     <button onClick={up} id='scrollStyle' className='btn position-fixed rounded-5'>

     <i className=' fas fa-arrow-alt-circle-up'></i>
    </button>

      <div className='container'>
    <Routes>
{/* ------  putting the all component that cant be reached by the one who dont login --------------- */}
    
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path='SearchComponent' element={<ProtectedRoute><SearchComponent/></ProtectedRoute>} />

      
      <Route path='Tvshow' element={<ProtectedRoute><Tvshow/></ProtectedRoute>} />
         <Route path='TvDetails' element={<ProtectedRoute><TvDetails/></ProtectedRoute>}>
         <Route path=':TvId' element={<ProtectedRoute><TvDetails/></ProtectedRoute>}/>
         </Route>


      <Route path='People' element={<ProtectedRoute><People/></ProtectedRoute>}/>
         <Route path='PersonDetails' element={<ProtectedRoute><PersonDetails/></ProtectedRoute>}>
            <Route path=':PersonId' element={<ProtectedRoute><PersonDetails/></ProtectedRoute>}/>
         </Route>


      <Route path='Movies' element={<ProtectedRoute><Movies/></ProtectedRoute>} />
          <Route path='MovieDetails' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}>
            <Route path=':MovieId' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
          </Route>

      <Route path='Register' element={<Register/>} />
      {/* --------------- sending our getUserData function as a props -------------- */}
      <Route path='Login' element={<Login getUserData={getUserData}/>} /> 
      <Route path='*' element={<h2> 404  </h2>} />

    
    </Routes>

    </div>
    

    
    </>
    
  );
}

export default App;
