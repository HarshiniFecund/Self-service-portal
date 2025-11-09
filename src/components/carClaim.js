import React, { useState } from "react";
import styles from "../components/carClaim.module.css";
import {useNavigate } from "react-router-dom";
import TopBar from '../components/topbar.js';
const CarClaim = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("details");

    const requiredDocuments = [
        "Vehicle RC Copy",
        "Driving License",
        "FIR Copy (for major accidents)",
        "Repair Estimate Bill",
        "Photos of Damage",
        "Insurance Policy Copy",
        "Discharge Voucher (post approval)",
    ];

    const billBreakdown = [
    { item: "Front Bumper Replacement", garageEstimate: 12000, approved: 11000 },
    { item: "Headlight Assembly", garageEstimate: 8000, approved: 7500 },
    { item: "Hood Dent Repair & Paint", garageEstimate: 15000, approved: 14000 },
    { item: "Labor Charges", garageEstimate: 6000, approved: 6000 },
    { item: "Consumables", garageEstimate: 2000, approved: 1500 },
  ];

    const carClaimDetails = {
        claimId: "CLM-002",
        policyNo: "POL-CAR-2025-7788",
        insuranceType: "Car",
        insurerName: "Reliance General Insurance",
        insuredName: "Harshini Devi",
        insuredMobile: "+91 9876543210",
        vehicleDetails: {
            registrationNo: "KA-05-MH-2321",
            make: "Hyundai",
            model: "Creta SX",
            year: 2022,
            engineNo: "ENG98765432",
            chassisNo: "CHS12345678",
            fuelType: "Petrol",
        },
        claimSummary: {
            claimType: "Accidental Damage",
            dateOfAccident: "2025-09-25",
            location: "Bangalore, Karnataka",
    description:
      "Front bumper and headlight damaged after collision at traffic signal. No injuries reported.",
    claimStatus: "Settled",
    estimatedAmount: 40000,
    approvedAmount: 0,
    settlementMode: "Reimbursement",
    surveyorAssigned: "Ravi Sharma",
  },
  repairWorkshop: {
    name: "Trident Hyundai Service Center",
    address: "No. 11, Outer Ring Road, Bengaluru, Karnataka - 560037",
    contact: "080-4567-8901",
    isCashless: true,
  },
  documentsSubmitted: [
    { name: "RC Copy", status: "Received" },
    { name: "Driving License", status: "Received" },
    { name: "Repair Estimate Bill", status: "Received" },
    { name: "FIR Copy", status: "Pending" },
    { name: "Photos of Damage", status: "Received" },
  ],
  claimTimeline: [
    { stage: "Claim Initiated", date: "2025-09-26", status: "Completed" },
    { stage: "Surveyor Assigned", date: "2025-09-27", status: "Completed" },
    { stage: "Inspection Completed", date: "2025-09-29", status: "Completed" },
    { stage: "Additional Document Requested", date: "2025-09-30", status: "Pending" },
  ],
  communicationHistory: [
    {
      from: "Surveyor (Ravi Sharma)",
      message: "Please upload FIR copy for further assessment.",
      date: "2025-09-30 10:45 AM",
    },
    {
      from: "You",
      message: "Uploaded FIR copy to portal. Please confirm receipt.",
      date: "2025-09-30 11:10 AM",
    },
  ],
};


  const totalAmount = billBreakdown.reduce((sum, item) => sum + item.approved, 0);

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
    <div> <TopBar/>
   <button className={styles.back_btn} onClick={() => navigate(-1)}>← Back</button>
       <h2 className={styles.page_title}>Car Insurance Claim Details</h2>
    
    <div className={styles.car_claim_container}>
       <div className={styles.tabs}>
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                Claim Details
              </button>
              <button
                className={activeTab === "repair" ? "active" : ""}
                onClick={() => setActiveTab("repair")}
              >
               Repair Workshop 
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
        </div>

        <div className={styles.tab_content}>
        {activeTab === "details" && (
          <div>
                <div className="section">
                <p><strong>Status:</strong> {carClaimDetails.claimSummary.claimStatus}</p>
                <p><strong>Type:</strong> {carClaimDetails.claimSummary.claimType}</p>
                <p><strong>Date of Accident:</strong> {carClaimDetails.claimSummary.dateOfAccident}</p>
                <p><strong>Location:</strong> {carClaimDetails.claimSummary.location}</p>
                <p><strong>Estimated Amount:</strong> ₹{carClaimDetails.claimSummary.estimatedAmount.toLocaleString()}</p>
            </div>

            <div className={styles.claim_container}>
          <p className={styles.claim_subtitle}>
            Track your claim status 
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
           
              <p className={styles.success}>🎉 Your claim has been settled successfully!</p>
            
          </div>
        </div>
            </div>

        )}

        {activeTab === "docs" && (
          <div>
           {/* Required Documents Section */}
            <div className={styles.section_card}>
                <ul className={styles.doc_list}>
                {requiredDocuments.map((doc, index) => (
                    <li key={index}>📄 {doc}</li>
                ))}
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
                            {billBreakdown.map((bill) => (
                              <tr>
                                <td>{bill.item}</td>
                                <td>{bill.garageEstimate}</td>
                                <td>{bill.approved}</td>
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

        {activeTab === "repair" && (
          <div>
        <p><strong>Name:</strong> {carClaimDetails.repairWorkshop.name}</p>
        <p><strong>Address:</strong> {carClaimDetails.repairWorkshop.address}</p>
        <p><strong>Cashless Facility:</strong> {carClaimDetails.repairWorkshop.isCashless ? "Yes" : "No"}</p>
          </div>
        )}

        {activeTab === "payment" && (
          <div>
            <p><strong>Account holder:</strong> Ha*****i</p>
            <p><strong>IFSC:</strong> CNR*****425</p>
            <p><strong>Account number: </strong>042*******831:</p>
            <p><strong>Paid amount:</strong> 38,000</p>
          </div>
        )}

      </div>
    </div>
    </div>
  );
};

export default CarClaim;
