import React from "react";
import Input from "../Input";
import setPictures from "../setPictures";

const Subscribe = () => {
  const images = setPictures(require.context("../../assets/img/c-subscribe/", false, /\.(png|jpe?g|svg|webp)$/));

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
            <Input type={'text'} name={'user-name'} placeholder={'Your name'}/>

            <div className="el-checkbox">
              <input name="user-check" id="user-check" type="checkbox" />

              <label htmlFor="user-check">
                I confirm that I read and agree to the
                <a href="/privacy">privacy policy</a>
              </label>
            </div>

            <button className="el-button outline" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
