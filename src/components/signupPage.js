
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/SignupForm.module.css";
import TopBar from "../components/topbar.js"
import { useSignup } from "../hooks/useSignup.js";
import DatePicker from "react-datepicker";
import popupBackground from "../assests/3.png";

const SignUpForm = () => {
  // State for form handling
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")

  //const [showPopup, setShowPopup] = React.useState(false);
  // using 'useSignup' for integrating with backend
  const { signup, error, isLoading, showPopup } = useSignup();
  const navigateToLogin = useNavigate();
  const navigateToPopup = useNavigate();

  // function that calls signup hok
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(
      firstName,
      lastName,
      email,
      password,
      phone
    );
  };

  const handleCancel = (e) => navigateToLogin("/");

  const togglePopup = () => {
  
    navigateToPopup("/");
  };

  const handleClick = (e) => {
    // Prevent default navigation to home page
    e.preventDefault();

    // Redirect to login page (replace with your login page URL)
    navigateToLogin('/');
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.title_container}>
        <b>Sign up Form</b>
      </div>
      <form onSubmit={handleSubmit} className={styles.signup_form}>
        <div className={styles.sub_container}>
          <label htmlFor="firstName" className={styles.label_type}>
            <b>First Name <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="text"
            value={firstName}
            // onChange={(e) => setEmployeeFirstName(e.target.value)}
           onChange={(e) => setFirstName(e.target.value)}
            className={styles.login_input}
            name="firstName"
            required
          />
        </div>
        <br />

        <div className={styles.sub_container}>
          <label htmlFor="lastName" className={styles.label_type}>
            <b>Last Name <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="text"
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
            className={styles.login_input}
            name="lastName"
            required
          />
        </div>
        <br />

      <div className={styles.sub_container}>
          <label htmlFor="phone" className={styles.label_type}>
            <b>Phone Number <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="phone"
           // value={email}
           onChange={(e) => setPhone(e.target.value)}
            className={styles.login_input}
            name="phone"
            required
          />
        </div>
        <br />

        <div className={styles.sub_container}>
          <label htmlFor="email" className={styles.label_type}>
            <b>Email Address <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="email"
           // value={email}
           onChange={(e) => setEmail(e.target.value)}
            className={styles.login_input}
            name="email"
            required
          />
        </div>
        <br />

        <div className={styles.sub_container}>
          <label htmlFor="password" className={styles.label_type}>
            <b>Password <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="password"
            //value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.login_input}
            name="password"
            required
          />
        </div>
        {<br />}
        
        <div className={styles.Signup_button_container}>
          <button
            type="button"
           onClick={() => window.history.back()}
            className={styles.Signup_button}
          >
            Cancel
          </button>

          <button
            type="submit"
            //onClick={() => setShowPopup(!showPopup)}
            className={styles.Signup_button}
           // disabled={isLoading}
          > Submit
          </button>
        </div>
         <br/> <br/>
        {error && <p className={styles.errorMessage}><b>{error}</b></p>}
      </form>
     
  
      {showPopup && (
        <div className={styles.popup} onClick={togglePopup}>
          <div
            className={styles.popup_content}
            style={{ backgroundImage: `url(${popupBackground})` }}
          >
            <p className={styles.popup_message}>
             <b> Form submitted successfully!</b>
              <br /><br />
              <a href="/" className={styles.login_here}>  
                <b>Login Here</b>
              </a>

            </p>
            {/* <button className={styles.popup_close_button} onClick={togglePopup}>
              Close
            </button> */}
          </div>
        </div>
      )}

    </div>
  );
};

export default SignUpForm;
