
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import popupBackground from "../assests/3.png";
import styles from "./forgotPassword.module.css"; // Import the CSS file
import { useForgotPassword } from "../hooks/useForgotPassword.js";

const ForgotPassword  = () => {
  const [input, setInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigateToPopup = useNavigate();
  const navigateToLogin = useNavigate();
  const { forgotPassword, error, showPopup} = useForgotPassword();
  const [message, setMessage] = useState("");

  const validateInput = (value) => {
      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Phone regex (Indian mobile numbers, 10 digits starting 6–9)
      const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
  
      if (emailRegex.test(value)) return "email";
      if (phoneRegex.test(value)) return "phone";

      return null;
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const type = validateInput(input);

    // Implement logic to reset password with new password
    await forgotPassword({ type, input, newPassword});
  };

  const togglePopup = () => {
    //setShowPopup(!showPopup);
    navigateToPopup("/");
  };

   const handleClick = (e) => {
    // Prevent default navigation to home page
    e.preventDefault();

    // Redirect to login page (replace with your login page URL)
    navigateToLogin('/');
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${popupBackground})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
      <p className={styles.ResetPassword}><b>Reset Password</b></p>
      </div>
      <form onSubmit={handleSubmit}  className={styles.form}>
        
        <div className={styles.formField}>
          <label htmlFor="resetFieldNames" className={styles.fieldLabel}>
            <b>Phone Number/Email Address<span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="text"
            id="resetFieldNames"
           // value={employeeId}
            value={input}
             onChange={(e) => setInput(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="newPassword" className={styles.fieldLabel}>
            <b>New Password <span className={styles.asterisk}>*</span>:</b>
          </label>
          <input
            type="password"
            id="newPassword"
            required
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.formInput}
          />
        </div>
        <br />
        
     {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.button}
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button type="submit" className={styles.button}>
           Submit
          </button>
        </div>
      </form>
      
      {showPopup && (
        <div className={styles.popup} onClick={togglePopup}>
          <div
            className={styles.popup_content}
            style={{ backgroundImage: `url(${popupBackground})` }}
          >
            <p className={styles.popup_message}>
              <b>Password reset successfull!</b>
              <br />  <br />
              <a href="/" className={styles.login_here}>  
                <b>Login Here</b>
              </a>
            </p>
          </div>
        </div>
      )}

    </div>
    
  );
}

export default ForgotPassword;
