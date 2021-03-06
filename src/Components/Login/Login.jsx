import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsApple } from "react-icons/bs";
import { isLogin } from "../../ContextAPI/AuthContext";
import GoogleLogin from "react-google-login";
import { Nav } from "../Nav-Blog/Nav";

export const Login = () => {
  window.scrollTo(0, 0);

  const {GoogleAuth} = React.useContext(isLogin);

  const {
    register,
    // handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { LoginAuth} = React.useContext(isLogin);

  const navigate = useNavigate();

  const onSubmit = (data) => {
      // LoginAuth();
      
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

  const [User, setUser] = React.useState(null);


  // const userStorage = localStorage.getItem("items");
  // if(userStorage === undefined){
  //   localStorage.setItem("items",JSON.stringify([]));
  // }

  const google = () => {     
    localStorage.setItem("Google",JSON.stringify(true));
    window.open("http://localhost:9999/google","_self")
    GoogleAuth();
  }

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
        console.log(res);
        let UserData = res.user
        setUser(UserData);
        console.log(User);
        localStorage.setItem('items', JSON.stringify(UserData));
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



              {/* <div className="frame-1" onClick={google}>
                <div className="img-icon">
                  <FcGoogle size="0.5x" />
                </div>
                <p>Continue with Google</p>
              </div> */}

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
