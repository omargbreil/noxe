import  axios  from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  
  let navigate = useNavigate();
  const [user, setUser] = useState({

    
    email : '',
    password : ''
   

  })
  const [LoginErrors, setLoginErrors] = useState('');
  const [loadingSpiner, setLoadingSpiner] = useState(false);

 function getUser(e){

    const myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    

    
 }

 function registernow() 
 {
   navigate("/Register");
 }

 async function submitLogin(e) 
 {
    
  setLoadingSpiner(true)

  e.preventDefault()

  try 
  {
    let res = await axios.post('https://registeration.vercel.app/user/signin' , user)  ;
    if (res.data.message==='done')
    {
      setLoadingSpiner(false)

      /* --------- save the useData token in local storage as a userToken --------- */
      localStorage.setItem('userToken' , res.data.token);
      props.getUserData();
      navigate('/home')
      setLoginErrors('');
      

       
    }
    else
    {

      setLoginErrors(res.data.message);
      setLoadingSpiner(false)
    }
    
    
  } catch (error) 
  {
    setLoginErrors(error.response.data.message);
    setLoadingSpiner(false)

  }



    

      
    

    
    

   
    
  }


  return (
    <div>   
    
     {LoginErrors?LoginErrors===`you have to register`?<div className="alert alert-danger">{LoginErrors} 
     <button onClick={registernow} className='btn btn-outline-dark mx-3'>
      register now
      </button> </div>:<div className="alert alert-danger">{LoginErrors} 
     </div> : ''}

     

      <h2 className='m-5x'> Login Now</h2>


      <form onSubmit={submitLogin}>

        <label htmlFor="email">email :</label>
          <input onChange={getUser} className='form-control  m-2' type="email" name='email' id='email' />
        <label htmlFor="password">password :</label>
          <input onChange={getUser} className='form-control m-2' type="password" name='password' id='password' />
      
          <button type='submit' className=' m-4 p-2 btn btn-outline-info'> {loadingSpiner===true?<i className='fas fa-spinner fa-spin'></i>:'Login'} </button>

      </form>


    </div>
  )
}
 