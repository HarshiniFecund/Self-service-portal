import React from "react";
import styles from "../components/topbar.module.css";
import { Link } from "react-router-dom";
import { FaUserCircle  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";  // import home icon

const TopBar = () => {
     const navigateToLogin = useNavigate();
     const profileScreen = (e) => navigateToLogin("/profileDetails");
     const homeScreen = (e) => navigateToLogin("/mainScreen");

  return (
    <nav className={styles.topbar}>
        
      <p className={styles.logo}>  
        <Home size={20} color="#ffffffff" onClick={homeScreen}/> &nbsp;
       Self Service Portal
     </p>  

      <ul className={styles.menu}>
         <li><Link to="/" className={styles.nav_link}>Logout</Link></li>
        <button style={{ fontSize: "20px", color: "#2563eb" }} onClick={profileScreen}>
            <FaUserCircle />
        </button>
      </ul>
    </nav>
  );
}

export default TopBar;
