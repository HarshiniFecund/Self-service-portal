import styles from "../components/mainScreen.module.css";
import React from "react";
import { Card, CardContent } from "../components/card";
import { FileText, ClipboardCheck, RefreshCw, MoreHorizontal } from "lucide-react";
import TopBar from '../components/mainscreenTopbar.js';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

   const navigate = useNavigate();
   
  // 🔹 Separate onClick handlers for each section
  const handlePolicyClick = () => {
    console.log("Policies card clicked");
    navigate("/policy");
  };

  const handleClaimsClick = () => {
    console.log("Claims card clicked");
    navigate("/claims");
  };

  const handleRenewalsClick = () => {
    console.log("Renewals card clicked");
    navigate("/renewal");
  };

  const handleOthersClick = () => {
    console.log("Others card clicked");
    navigate("/others");
  };

  return (
    <div>
      <TopBar/>
      <div className = {styles.login_container}>
          Dear Harshini Harshu,
          <h1>Welcome to Dashboard 🎉</h1>
      </div>
      <div className={styles.homepage}>
        <div className={styles.card_grid}>
          <div className={styles.card} onClick={handlePolicyClick}>
            <div className={styles.card_content}>
              <FileText className={styles.icon.indigo} />
              <h2>Policies</h2>
            </div>
          </div>
          <div className={styles.card} onClick={handleClaimsClick}>
            <div className={styles.card_content}>
              <FileText className={styles.icon.green}/>
              <h2>Claims</h2>
            </div>
          </div>
          <div className={styles.card} onClick={handleRenewalsClick}>
            <div className={styles.card_content}>
              <FileText className={styles.icon.orange}/>
              <h2>Renewals</h2>
            </div>
          </div>
          <div className={styles.card} onClick={handleOthersClick}>
            <div className={styles.card_content}>
              <FileText className={styles.icon.gray} />
              <h2>Others</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;