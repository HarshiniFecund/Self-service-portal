/*
Project: Self Service Portal Project
Author: Harshini C
Date: 01/09/2025

Modification Log:
-------------------------------------------------------------------------------------------------------
Date        |   Author                  |   Sprint   |    Description 
-------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------
*/

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
import styles from "./loginScreen.module.css";
import { useLogin } from "../hooks/loginHook.js";

const LoginPage = () => {

    const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const navigate = useNavigate();
 const { login,error } = useLogin();
  
 
  const validateInput = (value) => {
      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Phone regex (Indian mobile numbers, 10 digits starting 6–9)
      const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
   // Username regex (alphanumeric, 3–15 chars)
      const usernameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/;

      if (emailRegex.test(value)) return "Email address";
      if (phoneRegex.test(value)) return "Phone number";
      if (usernameRegex.test(value)) return "Username";

      return "Data";
    };


  // handleLogin is a function that triggers after clicking login button uses login hook
  const handleLogin = async (event) => {
    event.preventDefault();

     const type = validateInput(input);

      try {
      await login(type, input, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login_container}> 
    <p className={styles.aboutUs}>  </p>
       <div className={styles.title_container} > 
        <p>Self Service Portal</p>  
      </div>
     
      <form onSubmit={handleLogin} className={styles.login_form}>
        <div className={styles.sub_container}>
          <label htmlFor="email" className={styles.label_type}>
            <b>Phone Number/Email Address/User Name</b>
          </label>
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.login_input}
            name="email"
            required
          />
        </div>

        <br />
        <div className={styles.sub_container}>
          <label htmlFor="password" className={styles.label_type_pswd}>
            <b>Password</b>
          </label>
          </div>
          <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.login_input}
            name="password"
            required
          />
        </div>
         <p> <a href="/resetPassword" className={styles.password}>Forgot Password?</a></p>
        <button
          type="submit"
          className={styles.login_button}
        > Login
        </button>
         
        <p className={styles.signup}><a href="/SignUpForm" className={styles.linkColor}>Click here</a>&nbsp; if you don't have an account</p>

        
        {error && <p className={styles.errorMessage}>{error}</p>}

      </form>
    </div>
  );
};

export default LoginPage;
