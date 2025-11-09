import React, { useState } from "react";
import styles from "../components/hospitalClaim.module.css";
import {useNavigate } from "react-router-dom";
import TopBar from '../components/topbar.js';

const HospitalClaim = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("details");
     const [claimStatus, setClaimStatus] = useState("Documents Requested");
      const [documents, setDocuments] = useState([]);
      const [uploading, setUploading] = useState(false);

   const healthClaimDetails = {
  claimId: "CLM-009",
  policyNo: "POL-HEALTH-2025-3321",
  insuranceType: "Health",
  insurerName: "Star Health Insurance",
  insuredName: "Harshini Devi",
  insuredMobile: "+91 9876543210",
  hospitalDetails: {
    hospitalName: "Apollo Hospitals, Chennai",
    address: "21, Greams Lane, Chennai, Tamil Nadu - 600006",
    hospitalType: "Network (Cashless)",
    admissionDate: "2025-09-10",
    dischargeDate: "2025-09-15",
    treatingDoctor: "Dr. Meera Narayanan",
    specialization: "Cardiology",
    roomType: "Private Room",
  },
  treatmentDetails: {
    diagnosis: "Acute Coronary Syndrome",
    procedure: "Coronary Angioplasty with Stent Placement",
    durationOfStay: "5 days",
    remarks: "Patient stable after procedure; advised rest and follow-up after 2 weeks.",
  },
  claimSummary: {
    claimType: "Hospitalization (Cashless)",
    claimStatus: "Additional Documents Requested",
    estimatedAmount: 185000,
    approvedAmount: 160000,
    settlementType: "Direct to Hospital",
  },
  billDetails: [
    { item: "Room Rent (5 days)", billedAmount: 25000, approvedAmount: 25000 },
    { item: "Doctor Consultation", billedAmount: 10000, approvedAmount: 10000 },
    { item: "Angioplasty Procedure", billedAmount: 100000, approvedAmount: 85000 },
    { item: "Medicine & Consumables", billedAmount: 30000, approvedAmount: 25000 },
    { item: "Diagnostics & Lab Tests", billedAmount: 20000, approvedAmount: 15000 },
  ],
  documents: [
    { name: "Hospital Discharge Summary", status: "Received" },
    { name: "Doctor Prescription", status: "Received" },
    { name: "Final Bill Copy", status: "Received" },
    { name: "Diagnostic Reports", status: "Pending" },
  ],
  communicationHistory: [
    {
      from: "Claim Manager (Priya Sharma)",
      message: "Please upload missing diagnostic reports for final settlement.",
      date: "2025-09-17 09:30 AM",
    },
    {
      from: "You",
      message: "Uploaded diagnostic reports via portal.",
      date: "2025-09-17 10:00 AM",
    },
  ],
};

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


 const totalAmount = healthClaimDetails.billDetails.reduce((sum, item) => sum + item.approvedAmount, 0);
  return (
    <div><TopBar/>  <button className={styles.back_btn} onClick={() => navigate(-1)}>← Back</button>
    <div className={styles.claim_container}>
      
    
      <h2 className={styles.page_title}>Health Insurance Claim</h2>

       <div className={styles.tabs}>
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                Claim Details
              </button>
              <button
                className={activeTab === "hospital" ? "active" : ""}
                onClick={() => setActiveTab("hospital")}
              >
               Hospital Details
              </button>
              <button
                className={activeTab === "bill" ? "active" : ""}
                onClick={() => setActiveTab("bill")}
              >
                Bill Details
              </button>
      
              <button
                className={activeTab === "docs" ? "active" : ""}
                onClick={() => setActiveTab("docs")}
              >
                Documents Uploaded
              </button>
      
               <button
                className={activeTab === "payment" ? "active" : ""}
                onClick={() => setActiveTab("payment")}
              >
                Payment Details
              </button>
              <button
                className={activeTab === "timeline" ? "active" : ""}
                onClick={() => setActiveTab("timeline")}
              >
                Timeline
              </button>
      
        </div>

        <div className={styles.tab_content}>
        {activeTab === "details" && (
          <div>
           
        <p><strong>Type:</strong> {healthClaimDetails.claimSummary.claimType}</p>
        <p><strong>Status:</strong> {healthClaimDetails.claimSummary.claimStatus}</p>
        <p><strong>Estimated:</strong> ₹{healthClaimDetails.claimSummary.estimatedAmount.toLocaleString()}</p>
        <p><strong>Approved:</strong> ₹{healthClaimDetails.claimSummary.approvedAmount.toLocaleString()}</p>
        <p><strong>Settlement:</strong> {healthClaimDetails.claimSummary.settlementType}</p>

          <div className={styles.upload_section}>
          <h4>Additional Documents Required</h4>
          <p>
            Please upload your hospital discharge summary and payment receipts.
          </p>
          <input type="file" multiple onChange={handleFileChange} />
          <button
            onClick={handleUpload}
            disabled={uploading || documents.length === 0}
            className="upload-btn"
          >
            {uploading ? "Uploading..." : "Upload Documents"}
          </button>
        </div>
          </div>
    
        )}

        {activeTab === "docs" && (
          <div>
           {/* Required Documents Section */}
            <div >
                <ul className={styles.doc_list}>
               <li>DoctorPrescription.png</li>
                </ul>
            </div>
          </div>
        )}

         {activeTab === "bill" && (
          <div>
            <table className={styles.bill_table}>
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Description</th>
                  <th>Amount (₹)</th>
                </tr>
              </thead>
                  <tbody>
                    {healthClaimDetails.billDetails.map((bill) => (
                      <tr>
                        <td>{bill.item}</td>
                        <td>{bill.billedAmount}</td>
                        <td>{bill.approvedAmount}</td>
                      </tr>
                    ))}
                    <tr className={styles.total_row}>
                      <td colSpan="2"><strong>Total</strong></td>
                      <td><strong>{totalAmount.toLocaleString()}</strong></td>
                    </tr>
                  </tbody>
                </table>
          </div>
        )}

        {activeTab === "hospital" && (
          <div>        
              <table className={styles.bill_table}>
                <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>Address</th>
                  <th>Hospital Type</th>
                  <th>Admission Date</th>
                  <th>Discharge Date</th>
                  <th>Treating Doctor</th>
                  <th>Specialization</th>
                  <th>Room Type</th>
                </tr>
              </thead>
                <tbody>
                    <tr>
                      <td>{healthClaimDetails.hospitalDetails.hospitalName}</td>
                      <td>{healthClaimDetails.hospitalDetails.address}</td>
                      <td>{healthClaimDetails.hospitalDetails.hospitalType}</td>
                      <td>{healthClaimDetails.hospitalDetails.admissionDate}</td>
                      <td>{healthClaimDetails.hospitalDetails.dischargeDate}</td>
                      <td>{healthClaimDetails.hospitalDetails.treatingDoctor}</td>
                      <td>{healthClaimDetails.hospitalDetails.specialization}</td>
                      <td>{healthClaimDetails.hospitalDetails.roomType}</td>
                    </tr>
                </tbody>
              </table>
             <p> <b>Treatment Details :</b></p>
             <span>Acute Coronary Syndrome, stay for 5 days</span>
          </div>
        )}

        {activeTab === "timeline" && (
          <div>
          
          </div>
        )}

        {activeTab === "payment" && (
          <div>
            <p><strong>Account holder:</strong> Ha*****i</p>
            <p><strong>IFSC:</strong> CNR*****425</p>
            <p><strong>Account number: </strong>042*******831:</p>
            <p><strong>Paid amount:</strong>Additional documents requested</p>
          </div>
        )}

      </div>
    </div>
    </div>
  );
};

export default HospitalClaim;
