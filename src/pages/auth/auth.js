import React,{useContext} from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import { auth ,signInWithEmailLink,isSignInWithEmailLink } from "../../firebase";
import axios from "axios";
import { AuthContext } from "../../App";

const Auth = () => {
  useBodyClass("p-auth");
  
  const navigate = useNavigate();

  const authContext = useContext(AuthContext)

  const email = authContext.userData.userEmail

  // const [email, setEmail] = React.useState(
  //   window.localStorage.getItem("emailForSignIn") || ""
  // );

  const [errorResponse, setErrorResponse] = React.useState("");

  React.useEffect(() => {
    // Get the saved email
    const saved_email = window.localStorage.getItem("emailForSignIn");

    // Verify the user went through an email link and the saved email is not null
    if (isSignInWithEmailLink(auth, window.location.href) && !!saved_email) {
      // Sign the user in
      signInWithEmailLink(auth, saved_email, window.location.href)
      .then((res) => {
        console.log(res.user)
        navigate('/account')
      })
    
    }
  }, [navigate]);




  const trySignIn = async (event) => {
    event.preventDefault();
    console.log(authContext.userData)

    // If the user is re-entering their email address but already has a code
    if (isSignInWithEmailLink(auth, window.location.href) && !!email) {
    //   // Sign the user in
      signInWithEmailLink(email, window.location.href)
      .then( (res) => {

        navigate('/account')
      })
      .catch((err) => {
        switch (err.code) {
          default:
            setErrorResponse("An unknown error has occured");
        }
      });
    } else {
      axios.post('https://auth.nilecapital.cc/api/signin', {
        email: email,
      })
      .then(function (response) {
        console.log(response);
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(function (error) {
        console.log(error);
        switch (error.code) {
                default:
                  setErrorResponse("An unknown error has occured");
              }
      });
         
    }
  };
  return (
    <main className="p-auth-main">
      <form method="POST" action="/" onSubmit={trySignIn} className="form">
        <h1 className="el-title--h1">Sign in</h1>

        {/* <Input type={'text'} name={'user-name'} placeholder={'Your name'} /> */}
 
        {/* <Input type={'password'} name={'user-password'} placeholder={'Password'} /> */}
        
        <Input type={'email'} name={'userEmail'} placeholder={'Email address'}   />


        <button className="el-button outline" type="submit" >
          Send login link
        </button>

        <span className="el-question">
          Don’t have an account yet? <a href="/signup">Sign up</a>
        </span>
        <span className="el-question">
          {errorResponse}
        </span>
      </form>
    </main>
  );
};

export default Auth;


// this code has been written by a novice frontend dev , 