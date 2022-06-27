import React, {useContext} from "react";
import Input from "../../components/Input";
import useBodyClass from "../../hooks/useBodyClass";
import { AuthContext } from "../../App";

const Auth = () => {
  useBodyClass("p-auth");
  const authContext = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    //access userData {username:"", userpassword:"", userpassword:""}
    console.log(authContext.userData)
  }

  return (
    <main className="p-auth-main">
      <form method="POST" action="/" className="form" onSubmit={handleSubmit}>
        <h1 className="el-title--h1">Sign in</h1>

        <Input type={'text'} name={'username'} placeholder={'Your name'} />
 
        <Input type={'password'} name={'userpassword'} placeholder={'Password'} />
        
        <Input type={'email'} name={'useremail'} placeholder={'Email address'} />


        <button className="el-button outline" type="submit">
          Send login link
        </button>

        <span className="el-question">
          Don’t have an account yet? <a href="/signup.html">Sign up</a>
        </span>
      </form>
    </main>
  );
};

export default Auth;
