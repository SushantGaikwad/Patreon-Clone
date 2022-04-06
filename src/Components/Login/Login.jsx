import React from 'react'
import './Login.css'
import { useForm } from "react-hook-form";

import { Nav } from '../Nav-Blog/Nav'
export const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  const onSubmit = data => alert(JSON.stringify(data));
  const email = watch('email')
  const password = watch('password')
  const isValid = email&&password
  return (
    <>
    <Nav />
    <div className='login'>
    <h2>Log in</h2>
    <React.Fragment>

    <form className='form'  onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-8'>
        <p>Email</p>

        <input type="email" autoComplete='off' className={`${errors.email && <span className='error'>{errors.email.message}</span>}`}  {...register("email", { required:{
          value: true,
          message: 'Please enter a valid email.'
        } 
          })} />
        <div>{errors.email && <span className='error'>{errors.email.message}</span> }</div>
        </div>
        <p>Password</p>
        <div> 

        <input type="password"  autoComplete='off' {...register("password", { required:{
          value: true,
          message: 'Please enter a valid password.'
        } ,

          })} />  
        <div>{errors.password && <span className='error'>{errors.password.message}</span>}</div>
        </div>
        <div className='forgot'>

        <a  href="">Forgot Password?</a>
        </div>
        <div>
          <input className='submit' type="submit" value='submit' disabled = {!isValid} />
        </div>
       
    </form>
    </React.Fragment>

    </div>
    </>
  )
}
