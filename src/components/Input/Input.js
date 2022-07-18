import React, { useEffect, useState,useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../App";

const Input = ({ name, type, placeholder }) => {
  const [state, setState] = useState("");
  const [isActive, setActive] = useState(false);
  const [currentType, setType] = useState(type);
  const [isFocusOut, setFocusOut] = useState(false);
  const authContext = useContext(AuthContext)

  const handleChange = (e) => {
    setState(e.target.value);
    authContext.add(e.target.name, e.target.value)

    if (e.target.value === "") {
      setActive(false);
      setFocusOut(true);
    } else {
      setActive(true);
      setFocusOut(false);
    }
  };

  useEffect(() => {
    if (state !== "") {
      setActive(true);
      setFocusOut(true);
    }
  }, [state]);

  return (
    <div className={`el-input ${isActive ? "active" : ""} ${isFocusOut && state !== "" ? "filled" : ""}`}>
      <input
        value={state}
        name={name}
        id={name}
        type={currentType}
        onChange={handleChange}
        onFocus={() => {
          setFocusOut(false);
        }}
        onBlur={() => {
          setFocusOut(true);
        }}
      />
      <label>{placeholder}</label>

      {type === "password" && (
        <span
          className="el-input-icon-eye"
          onClick={() => {
            setType(currentType === "password" ? "text" : "password");
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.4133 11.6867C20.1667 7.53335 16.2267 5.02002 11.8667 5.02002C7.50667 5.02002 3.56 7.53335 1.33333 11.6867L1.14667 12L1.32 12.32C3.56667 16.4734 7.50667 18.9867 11.8667 18.9867C16.2267 18.9867 20.1733 16.5067 22.4133 12.32L22.5867 12L22.4133 11.6867ZM11.8667 17.62C8.11333 17.62 4.66667 15.5267 2.66667 12C4.66667 8.47335 8.11333 6.38002 11.8667 6.38002C15.62 6.38002 19.0267 8.48002 21.06 12C19.0267 15.5267 15.6133 17.62 11.8667 17.62Z"
              fill="white"
            />
            <path
              d="M12.06 7.44666C11.1561 7.45325 10.2744 7.72757 9.52626 8.23498C8.77815 8.74238 8.19719 9.4601 7.85676 10.2975C7.51632 11.1349 7.43167 12.0544 7.61351 12.9398C7.79534 13.8253 8.23551 14.637 8.8784 15.2725C9.5213 15.9079 10.3381 16.3386 11.2256 16.5101C12.1131 16.6816 13.0316 16.5863 13.865 16.2361C14.6983 15.886 15.4092 15.2967 15.9079 14.5427C16.4065 13.7888 16.6706 12.9039 16.6666 12C16.664 11.3983 16.5427 10.803 16.3096 10.2483C16.0765 9.69353 15.7363 9.19025 15.3083 8.76726C14.8804 8.34427 14.3731 8.00988 13.8157 7.78327C13.2583 7.55665 12.6617 7.44226 12.06 7.44666ZM12.06 15.26C11.4215 15.2534 10.7992 15.0583 10.2712 14.6992C9.74321 14.3401 9.33311 13.833 9.09241 13.2415C8.8517 12.6501 8.79111 12.0008 8.91825 11.375C9.0454 10.7493 9.3546 10.1751 9.80703 9.72446C10.2595 9.27388 10.8349 8.96702 11.4612 8.84243C12.0875 8.71785 12.7366 8.78108 13.327 9.0242C13.9174 9.26732 14.4229 9.67949 14.7798 10.2089C15.1368 10.7384 15.3293 11.3615 15.3333 12C15.3351 12.4297 15.2515 12.8555 15.0875 13.2527C14.9235 13.6499 14.6822 14.0106 14.3777 14.3139C14.0732 14.6171 13.7116 14.8569 13.3137 15.0193C12.9158 15.1817 12.4897 15.2635 12.06 15.26Z"
              fill="white"
            />
            {currentType === "password" && <path d="M3.54723 3L20.7282 20.385" stroke="white" strokeWidth="1.5" />}
          </svg>
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
