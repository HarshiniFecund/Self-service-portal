import React, { useState } from "react";
import styles from "../components/newClaim.module.css";

const FileClaimSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [policyNumber, setInput] = useState("");

  const handleFileClaimClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.claim_container}>
      <h2 className={styles.claim_title}>Claims Section</h2>

      <div className={styles.claim_card}>
        <h3>Health Insurance</h3>
        <p><strong>Policy No:</strong> H123456</p>
        <p><strong>Insured:</strong> John Doe</p>
        <button className={styles.btn_claim}  onClick={handleFileClaimClick}>
          File Claim
        </button>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h2>File a Claim</h2>
            <form>
              <label>Policy Number:</label>
              <input type="text" name="policyNumber" onChange={(e) => setInput(e.target.value)}/>

              <label>Claim Type:</label>
              <select>
                <option>Hospitalization</option>
                <option>Accident</option>
                <option>Travel Delay</option>
                <option>Vehicle Damage</option>
              </select>

              <label>Date of Incident:</label>
              <input type="date" />

              <label>Description:</label>
              <textarea placeholder="Describe the incident..." rows="4"></textarea>
              
              <label>Amount requested:</label>
              <input type="amount" />

              <label>Upload Documents:</label>
              <input type="file" />

              
              <button type="submit" className={styles.btn_claim}>
                Submit Claim
              </button>
            </form>
            <button className={styles.btn_close} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileClaimSection;
