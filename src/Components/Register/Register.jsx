import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Register.css'
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BsFacebook,  BsApple} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { isLogin } from '../../ContextAPI/AuthContext';
import GoogleLogin from "react-google-login"

import { Nav } from '../Nav-Blog/Nav'
import { registerInitiate } from '../../Redux/action';

export const Register = () => {
  const { register, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });

  const {LoginAuth, GoogleAuth} = React.useContext(isLogin);
  const email = watch("email");
  const password = watch("password");

  const isValid = email && password;
  // console.log(email,password)
const [user,setUser] = React.useState("");
  const [state, setState] = React.useState({
    userEmail: "",
    userPassword: "",
  });
  const navigate = useNavigate()


  


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
        
        console.log("obj" + JSON.stringify(obj));
        
        fetch(`https://patreondatabase.herokuapp.com/signUp`,{
            method: "POST",
            body: JSON.stringify(obj),
            headers: {"Content-Type":"application/json" }
        }).then((res) =>res.json())
        .then((res) => {
          if(res.status === 200){
            alert("Registration Successfull");            
            navigate("/login");
          }
          else if(res.status === 201){
            alert("This Email Id already used");
          }
          else{
            alert("Something Went Wrong. Please try again");
          }
        })
        .catch((err)=>()=>{
          alert("Something Went Wrong");
          console.log(err);
        })
  

  }

   const goToGoogle = () => {     
     localStorage.setItem("Google",JSON.stringify(true));
     window.open("https://patreondatabase.herokuapp.com/google","_self")
     GoogleAuth();
   }

   const responseGoogle = (response)=>{
    const payload = {
			email: response.profileObj.email,
			name: response.profileObj.name,
			profilePic: response.profileObj.imageUrl,
			password: "ThisisOurPassword1234",
		};
		console.log(payload.email);
		fetch("https://patreondatabase.herokuapp.com/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
          console.log("SignUp : ",data);			
					const payload = {
						email: response.profileObj.email,
						password: "ThisisOurPassword1234",
					};
					fetch(`https://patreondatabase.herokuapp.com/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {			
              if(data.status === 200){
							alert("Successfull");
              localStorage.setItem("isLogIn", "true");
							localStorage.setItem("token", JSON.stringify(data.token));
							localStorage.setItem("items", JSON.stringify(data.user));
							navigate("/profile");
							// window.location.reload();		
              }else{
                alert(data.Message);
              }					
						})
			}) 
      .catch((err)=>()=>{
        alert("Something Went Wrong");
        console.log(err);
      })     
		
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
    <GoogleLogin
    clientId= "655945767641-k9akt8q6lrebn0624j50d6igpumvvvmj.apps.googleusercontent.com"
    render={(renderProps) => (
           
      
                <button
										className="frame-1"
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>                  
										<div className='img-icon' ><FcGoogle size="0.5x" /></div>
                    <p style={{color:"rgb(36, 30, 18)", fontWeight:"550"}}>Continue with Google</p>
                    
									</button> 
 
    )}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

          

         

          <div className='frame-3'>
          <div className='img-icon' ><BsFacebook  size="0.5x" color='blue' /></div>
            <p style={{color:"rgb(36, 30, 18)", fontWeight:"700"}}>Continue With Facebook</p>
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
