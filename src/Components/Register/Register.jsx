import  axios  from 'axios';
import React from 'react'
import { useState } from 'react';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Register() {


  let navigate = useNavigate();
  const [user, setUser] = useState({

    first_name :'',
    last_name : '',
    email : '',
    password : '',
    age : ''

  })
  const [registerErrors, setregisterErrors] = useState('');
  const [loadingSpiner, setLoadingSpiner] = useState(false);
  const [validateErors, setvalidateErors] = useState([]);

 function getUser(e){

    const myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    

    
 }

 async function submitRegister(e) {
    e.preventDefault()
    setLoadingSpiner(true)


    let v = validation(user);

    if (v.error) 
    {
      setLoadingSpiner(false)

        setvalidateErors(v.error.details)
        console.log(v);
    }else
    {
      setLoadingSpiner(true)

      setvalidateErors([])


      let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup' , user);
  

      if (data.message==='success')
    {
        //navigate to next 
        setLoadingSpiner(false)
       setregisterErrors('');

       navigate('/login')
    }
    else
    {
      
      setregisterErrors(data.message);
      setLoadingSpiner(false)
    }
    }
  
    
    
  }

  function validation(user) {

    const schema = Joi.object({
      
      first_name :Joi.string().alphanum().min(3).max(30).required(),
      last_name : Joi.string().alphanum().min(3).max(30).required(),
      email :Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      age : Joi.number().min(16).max(60).required()

      })

     return schema.validate(user , {abortEarly:false});
    
  }
  return (
    <div>   
       {validateErors.map((error , index) => {
    
    if (validateErors[index].context.label === "password") 
    {
     return <div key={index}  className="alert alert-danger">"invalide password"</div>
      
    }else
    {
      return <div key={index} className="alert alert-danger">{error.message}</div>
    }
    })}
     {registerErrors?<div className="alert alert-danger">{registerErrors}</div> : ''}

     

      <h2 className='m-5x'> Register Now</h2>


      <form onSubmit={submitRegister}>
        <label htmlFor="first_name">first-name :</label>
          <input onChange={getUser} className='form-control m-2' type="text" name='first_name' id='first_name' />
        <label htmlFor="last_name">last-name :</label>
          <input onChange={getUser} className='form-control m-2' type="text" name='last_name' id='last_name' />
        <label htmlFor="email">email :</label>
          <input onChange={getUser} className='form-control m-2' type="email" name='email' id='email' />
        <label htmlFor="password">password :</label>
          <input onChange={getUser} className='form-control m-2' type="password" name='password' id='password' />
        <label htmlFor="age">age :</label>
          <input onChange={getUser} className='form-control m-2' type="number" name='age' id='age' />
          <button type='submit' className=' m-4 b-2 btn btn-outline-info'> {loadingSpiner===true?<i className='fas fa-spinner fa-spin'></i>:'Register'} </button>

      </form>


    </div>
  )
}
