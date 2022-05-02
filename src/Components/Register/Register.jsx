import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Register.css'
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BsFacebook,  BsApple} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { Nav } from '../Nav-Blog/Nav'
import { registerInitiate } from '../../Redux/action';
export const Register = () => {
  const { register, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
    
  const email = watch("email");
  const password = watch("password");

  const isValid = email && password;
  // console.log(email,password)

  const [state, setState] = React.useState({
    userEmail: "",
    userPassword: "",
  });

  const handleSubmit = (e) => {
    // console.log("login");

    e.preventDefault();
    let name = document.getElementById('displayName').value
    let email = document.getElementById('email').value
    // let confirm = document.getElementById('emailReconfirm').value
  

    let password = document.getElementById('password').value

    console.log(typeof(email),typeof(password))
     let obj = {
       'name': name,
      'email' : email,
      'password' : password
     }
    
    console.log("obj" + JSON.stringify(obj))
    
    fetch(`https://patreondatabase.herokuapp.com/signUp`,{
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-Type":"application/json" }
    }).then((res) =>res.json())
    .then((res) => console.log(res))
    .catch((err)=>console.log(err))
    

  }

   const goToGoogle = () => {
    fetch(`https://patreondatabase.herokuapp.com/google`
      // method: "GET"
      // body: JSON.stringify(obj),
      // headers: {"Content-Type":"application/json" }
  ).then((res) =>res.json())
  .then((res) => console.log(res))
  .catch((err)=>console.log(err))
     
   }

  return (
    <>
    <Nav />
    <div className='login'>
    <h2>Sign up</h2>
    <React.Fragment>

    <form className='form'  onSubmit={handleSubmit}>
      <br />
    <div className='frames'>
          <div className='frame-1' onClick={goToGoogle}>

          <div className='img-icon' ><FcGoogle size="0.5x" /></div>
            <p>Continue with Google</p>
          </div>

         

          <div className='frame-3'>
          <div className='img-icon' ><BsFacebook  size="0.5x" color='blue' /></div>
            <p>Continue With Facebook</p>
          </div>
        </div>
        <div className='space-y-8'>
        <p className='or'>or</p>
        <p>Name</p>
        <input type="text" name='displayName' id='displayName'  autoComplete='off'  className={`${errors.name && <span classname = 'error'>{errors.name.message}</span>}`} {...register("name",{required:{
        value:true,
        message:'Name is required.'
        },
        })} />
        <div>{errors.name && <span className='error'>{errors.name.message}</span>}</div>


        <p>Email</p>

        <input type="email" name='email' id='email' autoComplete='off'  className={`${errors.email && <span className='error'>{errors.email.message}</span>}`}  {...register("email", { required:{
          value: true,
          message: 'Please enter a valid email.'
        } ,
          })} />
        <div>{errors.email && <span className='error'>{errors.email.message}</span> }</div>
        </div>
        <p className='text-left'>Confirm Email</p>
        <input type="email" name='emailReconfirm' id='emailReconfirm'   autoComplete='off' {...register("another_email",{required : {
          value:true,
          message:'Your email confirmation does not match.'
        },
        })} />
                <div>{errors.another_email && <span className='error'>{errors.another_email.message}</span>}</div>
        <p className='text-left'>Password</p>
        <div> 

        <input type="password" name='password' id='password'  autoComplete='off' {...register("password", { required:{
          value: true,
          message: 'Please enter a valid password.'
        } ,

          })} />  
        <div>{errors.password && <span className='error'>{errors.password.message}</span>}</div>
        </div>
       

       
        <div>
          <input className={`submit ${isValid && `submit2`}`}   type="submit" value='Sign up' disabled = {!isValid} />
        </div>
        <p className='terms'>By signing up, you agree to Patreon's <a href="">Terms of Use</a>,<a href="">Privacy Policy</a>and<a href="">Cookie Policy</a> .</p>
        
        

       
    </form>
    </React.Fragment>

    <div className='regi'>
          <p>Already have an account?</p>
          <Link to={'/Login'}>Log in</Link>
        </div>

    </div>
   
    </>
  )
}
