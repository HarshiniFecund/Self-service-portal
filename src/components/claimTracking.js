import React, { useState } from "react";
import styles from "../components/claimTracking.module.css";

const ClaimTracking = () => {
  const [claimStatus, setClaimStatus] = useState("Documents Requested");
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const statusSteps = [
    "Initiated",
    "In Review",
    "Documents Requested",
    "Approved",
    "Settled"
  ];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setDocuments(files);
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      alert("Documents uploaded successfully!");
      setUploading(false);
      setClaimStatus("In Review");
    }, 1500);
  };

  return (
    <div className={styles.claim_container}>
      <p className={styles.claim_subtitle}>
        Track your claim status and upload any additional documents requested by
        the insurer.
      </p>

      {/* Progress bar */}
      <div className={styles.status_container}>
        {statusSteps.map((step, index) => (
          <div key={index} className={styles.status_step}>
            <div
              className={`styles.status_circle 
                ${
                    statusSteps.indexOf(claimStatus) >= index
                    ? "active"
                    : "inactive"
                }`
            }
            >
              {index + 1}
            </div>
            <p
              className={`styles.status_label ${
                statusSteps.indexOf(claimStatus) >= index ? "active" : ""
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Final Message */}
      <div className={styles.final_message}>
        {claimStatus === "Settled" ? (
          <p className={styles.success}>🎉 Your claim has been settled successfully!</p>
        ) : (
          <p className={styles.pending}>
            ⏳ Claim is currently <b>{claimStatus}</b>. You will be notified once
            it moves to the next stage.
          </p>
        )}
      </div>
    </div>
  );
};

export default ClaimTracking;
