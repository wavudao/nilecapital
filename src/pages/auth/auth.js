import React from "react";
import Input from "../../components/Input";
import useBodyClass from "../../hooks/useBodyClass";

const Auth = () => {
  useBodyClass("p-auth");

  return (
    <main className="p-auth-main">
      <form method="POST" action="/" className="form">
        <h1 className="el-title--h1">Sign in</h1>

        <Input type={'text'} name={'user-name'} placeholder={'Your name'} />
 
        <Input type={'password'} name={'user-password'} placeholder={'Password'} />
        
        <Input type={'email'} name={'user-email'} placeholder={'Email address'} />


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
