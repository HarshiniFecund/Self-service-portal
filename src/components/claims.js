import {React, useState} from "react";
import styles from "../components/claims.module.css"; // Import CSS
import TopBar from '../components/topbar.js';
import { useNavigate } from "react-router-dom";

const claimsData = [
  {
    id: "CLM-001",
    type: "Health",
    policy: "H12345",
    date: "2025-09-01",
    approvedamount: "-",
    status: "Documents Requested",
  },
  {
    id: "CLM-002",
    type: "Car",
    policy: "C67890",
    date: "2025-08-15",
    approvedamount: "₹38,000",
    status: "Approved",
  },
  
];

const ClaimsSection = () => {
  const [claims] = useState(claimsData);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
    const handleFileClaimClick = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

  const handleClaimClick = (id,type) => {
    navigate(`/claimsDetails/${id}/${type}`);
  };

  return (
    <div> <TopBar/>
    <div className={styles.claims_page}>
      <div className={styles.claims_header}>
        <h1>My Claims</h1>
        <button className={styles.new_claim_btn} onClick={handleFileClaimClick}>+ File New Claim</button>
      </div>

    
      <div className={styles.summary_grid}>
        <div className={styles.summary_card} pending>
          <h2>{claims.filter((c) => c.status === "Pending").length}</h2>
          <p>Pending Claims</p>
        </div>
        <div className={styles.summary_card} approved>
          <h2>{claims.filter((c) => c.status === "Approved").length}</h2>
          <p>Approved Claims</p>
        </div>
        <div className={styles.summary_card} settled>
          <h2>{claims.filter((c) => c.status === "Settled").length}</h2>
          <p>Settled Claims</p>
        </div>
      </div>

     
      <div className={styles.claims_table_container}>
        <table className={styles.claims_table}>
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Policy</th>
              <th>Type</th>
              <th>Date</th>
              <th>Settled Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim.id}>
                <td onClick={() => handleClaimClick(claim.id, claim.type)}>{claim.id}</td>
                <td>{claim.policy}</td>
                <td>{claim.type}</td>
                <td>{claim.date}</td>
                <td>{claim.approvedamount}</td>
                <td>
                  <span className={`status-badge ${claim.status.toLowerCase()}`}>
                    {claim.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
            {showModal && (
              <div className={styles.modal_overlay}>
                <div className={styles.modal_content}>
                  <h2>File a Claim</h2>
                  <form>
                    <label>Policy Number:</label>
                    <input type="text" value="" />
      
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
                    <button className={styles.btn_close} onClick={closeModal}>Close</button>
                  </form>
                  
                </div>
              </div>
            )}

    </div>
    
    </div>
  );
}

export default ClaimsSection;