import  axios  from 'axios';
import React from 'react'
import { useState } from 'react';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  
  let navigate = useNavigate();
  const [user, setUser] = useState({

    
    email : '',
    password : ''
   

  })
  const [LoginErrors, setLoginErrors] = useState('');
  const [loadingSpiner, setLoadingSpiner] = useState(false);
  const [validateErors, setvalidateErors] = useState([]);

 function getUser(e){

    const myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    

    
 }

 async function submitLogin(e) {
    
  setLoadingSpiner(true)

  e.preventDefault()


    let v = validation(user);

    if (v.error) 
    {
      setLoadingSpiner(false)

        setvalidateErors(v.error.details)
      
    }else
    {
      setLoadingSpiner(true)

      setvalidateErors([])
    let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin' , user);
    if (data.message==='success')
    {
      /* --------- save the useData token in local storage as a userToken --------- */
      localStorage.setItem('userToken' , data.token);
      props.getUserData();
      

      navigate('/home')
        setLoadingSpiner(false)
       setLoginErrors('');
       
    }
    else
    {
      
      setLoginErrors(data.message);
      setLoadingSpiner(false)
    }
    }
    

   
    
  }

  function validation(user) {

    const schema = Joi.object({
      
     
      email :Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
   

      })

     return schema.validate(user , {abortEarly:false});
    
  }
  return (
    <div>   
    {validateErors.map((error , index) => {
    
    if (validateErors[index].context.label === "password") 
    {
     return <div key={index}  className="alert alert-danger">"invalid password"</div>
      
    }else
    {
      return <div key={index} className="alert alert-danger">{error.message}</div>
    }
    })}
     {LoginErrors?<div className="alert alert-danger">{LoginErrors}</div> : ''}

     

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
 