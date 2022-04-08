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
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  // const [state,setState] = React.useState({
  //     displayName:"",
  //     email:"",
  //     emailReconfirm:"",
  //     password:""
  // });

//   const{currentUser} = useSelector((state) => state.user);
  

  const navigate = useNavigate();

//   useEffect(() => {
//       if(currentUser){
//         navigate('/register')
//       }
//       return navigate('/register')

//   },[currentUser,navigate])

  

//   const dispatch = useDispatch();

// const {email,password,displayName,emailReconfirm} = state;

  const onSubmit = data => {
    navigate('/login')
    alert("Signup Successfull !")};
  const email1 = watch('email')
  const another_email = watch('another_email')
  const isValid = email1&&another_email
 


  


// const handelFinish =(e) => {
//     e.preventDefault();
//     if(email!==emailReconfirm){
//       return;
//     }
//     dispatch(registerInitiate(email,password,displayName))
//     setState({email:'',displayName:'',password:'',emailReconfirm:''})


// }
 

  // const handelChange = (e) =>{
  //   const {name,value} =e.target;
  //   setState({ ...state,[name]:value});
  // };

  return (
    <>
    <Nav />
    <div className='login'>
    <h2>Sign up</h2>
    <React.Fragment>

    <form className='form'  onSubmit={handleSubmit(onSubmit)}>
      <br />
    <div className='frames'>
          <div className='frame-1'>

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
        <input type="text" name='displayName'   autoComplete='off'  className={`${errors.name && <span classname = 'error'>{errors.name.message}</span>}`} {...register("name",{required:{
        value:true,
        message:'Name is required.'
        },
        })} />
        <div>{errors.name && <span className='error'>{errors.name.message}</span>}</div>


        <p>Email</p>

        <input type="email" name='email'  autoComplete='off'  className={`${errors.email && <span className='error'>{errors.email.message}</span>}`}  {...register("email", { required:{
          value: true,
          message: 'Please enter a valid email.'
        } ,
          })} />
        <div>{errors.email && <span className='error'>{errors.email.message}</span> }</div>
        </div>
        <p className='text-left'>Confirm Email</p>
        <input type="email" name='emailReconfirm'   autoComplete='off' {...register("another_email",{required : {
          value:true,
          message:'Your email confirmation does not match.'
        },
        })} />
                <div>{errors.another_email && <span className='error'>{errors.another_email.message}</span>}</div>
        <p className='text-left'>Password</p>
        <div> 

        <input type="password" name='password'   autoComplete='off' {...register("password", { required:{
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
