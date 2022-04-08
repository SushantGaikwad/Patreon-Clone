import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Register.css'
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

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
  

//   const navigate = useNavigate();

//   useEffect(() => {
//       if(currentUser){
//         navigate('/register')
//       }
//       return navigate('/register')

//   },[currentUser,navigate])

  

//   const dispatch = useDispatch();

// const {email,password,displayName,emailReconfirm} = state;

  const onSubmit = data => alert(JSON.stringify(data));
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
    <div className='frames'>
          <div className='frame-1'>

            <img src="data:image/png;base64,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" alt="" />
            <p>Continue with Google</p>
          </div>

         

          <div className='frame-3'>
            <img src="data:image/png;base64,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" alt="" />
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
        <p>Confirm Email</p>
        <input type="email" name='emailReconfirm'   autoComplete='off' {...register("another_email",{required : {
          value:true,
          message:'Your email confirmation does not match.'
        },
        })} />
                <div>{errors.another_email && <span className='error'>{errors.another_email.message}</span>}</div>
        <p>Password</p>
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
