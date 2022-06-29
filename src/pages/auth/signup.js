import React,{useContext,useCallback} from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { AuthContext } from "../../App";

export const Signup = () => {
  useBodyClass("p-auth");
  const authContext = useContext(AuthContext)

  const navigate = useNavigate();
  const email = authContext.userData.userEmail
  const name = authContext.userData.userName

  const [response, setResponse] = React.useState("");

  const { publicKey, signMessage } = useWallet();

  const trySignUp = async (event) => {
    event.preventDefault();
    console.log(email)

      const sig =  await signMessages()
 
    axios.post('http://localhost:9001/api/signup', {
      email: email,
      name:name,
      signature:sig,
      address:publicKey.toString()
    })
    .then(function (response) {
      console.log(response);
      setResponse(' sign up email sent to your email')
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
      setResponse(error.message)
    });

  };

  const signMessages = useCallback(async () => {

    try {
       
       if (!publicKey) throw new Error('Wallet not connected!  connect wallet to associate your address and account');
       
       if (!signMessage) throw new Error('Wallet does not support message signing!');

       
       const message = new TextEncoder().encode(` I accept that ${name }, ${email}, be associated with public address ${publicKey} `);
       // Sign the bytes using the wallet
       const signature = await signMessage(message);
        return signature
    } catch (error) {
      alert(`Signing failed: ${error?.message}`);
    }

  },[email, name, publicKey, signMessage]) 

  return (
    <main className="p-auth-main">
      <form method="POST" action="/"onSubmit={trySignUp} className="form">
        <h1 className="el-title--h1">Sign up</h1>

        <Input type={'text'} name={'userName'} placeholder={'Your name'} />
 
        {/* <Input type={'password'} name={'user-password'} placeholder={'Password'} /> */}
        
        <Input type={'email'} name={'userEmail'} placeholder={'Email address'} />


        <WalletMultiButton/>
       
       

        <button className="el-button outline" type="submit" >
         Continue
        </button>

        <span className="el-question">
          Have an account ? <a href="/login">Sign In</a>
        </span>
        <span className="el-question">
          {response}
        </span>
      </form>
    </main>
  );
};

// export default Signup


// this code has been written by a novice frontend dev , 