
import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";

import styles from "../components/Navbar.module.css";

const Navbar = () => {
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>

          <li
            className={styles.adminLink}
            //onMouseEnter={() => handleDashboDropdownToggle(true)}
           // onMouseLeave={() => handleDashboDropdownToggle(false)}
          >
            <a className={styles.adminDropdownToggle} href="#">
              <b>Policy</b>
            </a>
            <ul>
              <ul className={styles.link}>
                <Link to=""><b>Policy Details</b></Link>
              </ul>
              <ul className={styles.link}>
                <Link to=""><b>Policy Download</b></Link>
              </ul>
              <ul className={styles.link}>
                <Link to=""><b>Policy Renewal</b></Link>
              </ul>
            </ul>
          </li>

          <li
            className={styles.adminLink}
           // onMouseEnter={() => handleDashboDropdownToggle(true)}
            //onMouseLeave={() => handleDashboDropdownToggle(false)}
          >
            <a className={styles.adminDropdownToggle} href="#">
              <b>Claims</b>
            </a>
            <ul>
              <ul className={styles.link}>
                <Link to=""><b>Periodical</b></Link>
              </ul>
              <ul className={styles.link}>
                <Link to=""><b>Interview</b></Link>
              </ul>
              <ul className={styles.link}>
                <Link to=""><b>Joining</b></Link>
              </ul>
              <ul className={styles.link}>
                <Link to=""><b>Deferred</b></Link>
              </ul>
            </ul>
          </li>

        <li className={styles.logoutLink}>
          <div
            className={styles.logout}
            title="Click here to Logout"
           // onClick={handleLogout}
          >
            <b>Logout{" "}</b>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
