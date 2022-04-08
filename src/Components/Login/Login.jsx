import React from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

import { Nav } from '../Nav-Blog/Nav'
export const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  
  const navigate = useNavigate()

  const onSubmit = data => {
    alert("Login Successfull !");
    navigate('../Register/Register.jsx')
  }
  
  const email = watch('email')
  const password = watch('password')
  const isValid = email&&password

  // const [state,setState] = React.useState({
  //   email:"",
  //   password:"",
  // });

//   const handelGoogleSignIn =() => {
    
//   }
//   const handelFbSignIn =() => {

//   }

// const handelChange =() => {

// }


// const handelFinishLogin =(e) => {

// }

  return (
    <>
    <Nav />
    <div className='login'>
    <h2>Log in</h2>
    <React.Fragment>

    <form className='form'  onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-8'>
        <p>Email</p>

        <input type="email" autoComplete='off'  className={`${errors.email && <span className='error'>{errors.email.message}</span>}`}  {...register("email", { required:{
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
          <input className={`submit ${isValid && `submit2`}`}  type="submit" value='Log in' disabled = {!isValid} />
        </div>
        <p className='or'>or</p>
        <div className='frames'>
          <div className='frame-1'>

            <div className='img' ><FcGoogle /></div>
            <p>Continue with Google</p>
          </div>

          <div className='frame-2' >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEX///8AAAD4+Pjm5ubi4uLd3d0/Pz9CQkLv7++urq7X19eZmZn5+fmFhYXS0tLKyso4ODhJSUmPj4+8vLyhoaF8fHweHh7ExMSysrJjY2OWlpYyMjJXV1dPT0+np6fx8fEmJiYRERF1dXUVFRVpaWlWVlZoaGgY+IBTAAAEO0lEQVR4nO3da3eiMBAGYCLWCvUO1ktbe13//09cwa0iiUghs+Nr3+cz52xmFpI4uTQIiIiIiIiIiIiIiIiIiIiIiECFi01Huw3XpLNcmZ1Qux3XY7Q1e3faLbkW44kxzElRODVH/HYya1PEPnbXtfZOUmK023MFuqcZMVPtBum7K6XEzLRbpC4sp8SMtZukrWOlhN1Jz0rJh3aTtM3s1yTWbpMyq3815l67Tdqe7JyMtNukbGmn5Fm7Tdre7Zz0tdukLLFTstFuk7Z7fjll9gz2U7tJ6lJ2JpaXckq62i3SV04JS45W2YQVxyBYnGSkx4LjTlRMCetIuU3hJWHvunfIyf2vL6wd7L+d3vpXviOdMB7F9qjST5JxafjtLjbr4ewhGt9ynjrJ8LDA9zRPXiseHc1Ofv7snr7JkSgqLnjmJql7FpJ8WfP8nWn0nxssrT93hblLS1T+/x99uJ/MzG/oJ9DgTEZyq+T4YDyseDDPykAvCq+iC4Ga1TL7iMaXEpJbakfjQ8f6xev0WOupLIHaAbUX1421tkf0XsVRZW0P+0fz5nKAvy0pjiUbP3BncGOplJiJdmhN9cVSYkyqHVxDb3IpWWjH1lCtKVgjL6izWcfOCU9wS5OTy8E1gzu7F5msZZLL//a1ehdKCe5bIvaa4PYlzn1YPiDvqpYadHDn9GJzE+iNSzIpedQOqw3/haQc8DAcBA8yOdEOq5V6JdifQh6HpboT6K1L5U1HnmiH1YrMJBb72Iq9r9MH6MlJULUU2hz2Zp1nkZxgb0Oxj7D5ULVf5fp9iuREO6p2RFLCnDAntSDXTqRygrxwLpUT7KPGtfcc/QhwxT5wHe3zYagdVisrkZz0tMNqReb3jkFdOc8JlR6hy7FCi4DQ542FyvbQp2sd1914AT3yCOUEulwgMxgb86UdWAtCAw/0HTFyG2O1I2tuIJYT4A0oYhv8gFd5HLeK+QI7II/kcmLm2sE1JZgT2JNeFac/23vDnOQvLkfWBuZZY9mcmAlidVb048k8481pJUeePcD7Md+lcwJYdpPZmFOgHWADUoWlb5CTfOFeFnHgETz8lnnSDq8ZmZ3D/wD2sBnR4Vg7uKZk1o1zmJP7QG6dx+C+JlKbQg30vgv78mA/oA83CZ2Bw95SLZKSP9pRtSNSW8Issx0JLJOi3n1y4H/5C/aOnCPv66ToX07G89gDPDUp8LpQirq4U/LqMyfawfjisUvBPuxVtL4cbD230ZnseZqlwC6fO3k5Igg+p7d4uMDuBiZrpwatD7CAVqUrVU1TJtvhbDbcVt3CBLyTrcKZjnYbFQbYu82Zaj/kElcNjuXSlX2b5WDp6JBBly5qCE9fgrf0zGbxbuk30s1c4e4UH/7GwTStnJPG6++/m9BLsU/R1hEv001S686bcLQo/2ERIiIiIiIiIiIiIiIiIiIiIj1/AcReNPopFYb6AAAAAElFTkSuQmCC" alt="" />
            <p>Continue with Apple</p>
          </div>

          <div className='frame-3'>
            <img src="data:image/png;base64,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" alt="" />
            <p>Continue With Facebook</p>
          </div>
        </div>

       
    </form>
    </React.Fragment>

    <div className='regi'>
          <p>New to Patreon?</p>
          <Link to ="/sign">Sign up</Link>
        </div>

    </div>
   
    </>
  )
}
