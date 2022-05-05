import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsApple } from "react-icons/bs";
import { isLogin } from "../../ContextAPI/AuthContext";

import { Nav } from "../Nav-Blog/Nav";
export const Login = () => {
  window.scrollTo(0, 0);
  const {
    register,
    // handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { LoginAuth } = React.useContext(isLogin);

  const navigate = useNavigate();

  const onSubmit = (data) => {
      LoginAuth();
      console.log(data);     
      alert("Login Successfull !");
      navigate('/profile')
  };

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
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    // console.log(typeof(email),typeof(password))
     let obj = {
      'email' : email,
      'password' : password
     }
    
    // console.log("obj" + JSON.stringify(obj))
    
    fetch(`https://patreondatabase.herokuapp.com/login`,{
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-Type":"application/json" }
    }).then((res) =>res.json())
    .then((res) =>{
      if(res.token){
        LoginAuth();
        console.log(res);
        alert("Login Successfull");
        navigate("/profile");
      }
      else{
        alert("Please Try Again");
      }
    })
    .catch((err)=>console.log(err))
    

    // const { name, value } = e.target;
    // console.log(name, value);

    // setState({
    //   ...state,
    //   [name]: value,
    // });
  };
  const { userEmail, userPassword } = state;

  return (
    <>
      <Nav />
      <div className="login">
        <h2>Log in</h2>
        <React.Fragment>
          <form className="form" onSubmit={handleSubmit}>
            <div className="space-y-8">
              <p>Email</p>

              <input
              id="email"
                type="email"
                autoComplete="off"
                // onChange={handelChange}
                name="userEmail"
                // value={userEmail}
                className={`${
                  errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )
                }`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter a valid email.",
                  },
                })}
              />
              <div>
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>
            </div>
            <p className="space-y-8">Password</p>
            <div className="space-y-8">
              <input
              id="password"
                type="password"
                // onChange={handelChange}
                name="password"
                // value={userPassword}
                autoComplete="off"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter a valid password.",
                  },
                })}
              />
              <div>
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>
            </div>
            <div className="forgot">
              <a href="">Forgot Password?</a>
            </div>
            <div>
              <input
                className={`submit ${isValid && `submit2`}`}
                type="submit"
                value="Log in"
                disabled={!isValid}
              />
            </div>
            <p className="or">or</p>
            <div className="frames">
              <div className="frame-1">
                <div className="img-icon">
                  <FcGoogle size="0.5x" />
                </div>
                <p>Continue with Google</p>
              </div>

              <div className="frame-2">
                <div className="img-icon">
                  <BsApple size="0.5x" />
                </div>
                <p>Continue with Apple</p>
              </div>

              <div className="frame-3">
                <div className="img-icon">
                  <BsFacebook size="0.5x" color="blue" />
                </div>
                <p>Continue With Facebook</p>
              </div>
            </div>
          </form>
        </React.Fragment>

        <div className="regi">
          <p>New to Patreon?</p>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </>
  );
};
