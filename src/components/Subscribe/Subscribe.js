import React, {useContext, useState} from "react";
import Input from "../Input";
import setPictures from "../setPictures";
import { AuthContext } from "../../App";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Subscribe = () => {
  const images = setPictures(require.context("../../assets/img/c-subscribe/", false, /\.(png|jpe?g|svg|webp)$/));
  const authContext = useContext(AuthContext)
  const[confirm, setConfirm] = useState(false)
  const [success, setresponse] =  useState()

  const email = authContext.userData.userEmail

  // console.log("confirm", confirm)
  const subscribeUser = async (event) => {
     event.preventDefault();

    try {
  
      let gg = await axios.post('https://auth.nilecapital.cc/api/subscribe', {
        email: email,
      })
      notify()
      setresponse("Thank you! we've sent you an email")
     
    } catch (error) {
      console.log(error)
      setresponse("an error occurred , kindly retry")
    }

  }

  const notify = () => toast.success("Wow so easy!",{
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  return (
    <>
      <div className="c-subscribe">
        <span className="c-subscribe-figure figure-1" data-speed="1.1">
          <img src={images["figure-1.png"]} alt="" />
        </span>

        <span className="c-subscribe-figure figure-2" data-speed="1.3">
          <img src={images["figure-2.png"]} alt="" />
        </span>

        <span className="c-subscribe-figure figure-3" data-speed="1.2">
          <img src={images["figure-3.png"]} alt="" />
        </span>

        <div className="c-subscribe-box">
          <div className="c-subscribe-box-inner">
            <h2>Curious? subscribe and be in the know!</h2>
          </div>

          <div className="c-subscribe-box-form">
            <Input type={'text'} name={'userEmail'} placeholder={'Your email'}/>

            <div className="el-checkbox">
              <input onChange={e=>setConfirm(!confirm)} name="user-check" id="user-check" type="checkbox" />

              <label htmlFor="user-check">
                I confirm that I read and agree to the
                <a href="/privacy">privacy policy</a>
              </label>
            </div>

            <button disabled={!confirm}  className="el-button outline" onClick={subscribeUser}>
              Subscribe 
            </button>
            <ToastContainer position="bottom-center"
              autoClose={10000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLosis
              draggable
              pauseOnHover/>
            <p>{success}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
