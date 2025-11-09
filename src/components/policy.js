import React, { useState } from "react";
import styles from "../components/policy.module.css"; // Import CSS
import TopBar from '../components/topbar.js';
import PolicyTopBar from '../components/policyTopbar.js';

const Policy = () => {
  const [selected, setSelected] = useState("health");

  const policyDetails = {
    health: {
      title: "Health Insurance",
      desc: "Protects you and your family against unexpected medical expenses.",
      coverage: "Hospitalization, surgeries, medicines, diagnostic tests, ₹5 Lakh to ₹50 Lakh, Starts from ₹500/month. Over 5,000+ across India provide Cashless treatment, Free annual health checkup, Pre & post-hospitalization cover, Tax benefits under Section 80D."
    },
    travel: {
      title: "Travel Insurance",
      desc: "Covers trip cancellations, lost baggage, and medical emergencies abroad.",
      coverage :"Provides medical and emergency coverage while traveling abroad. It usually covers Emergency hospitalization & treatment, Medical evacuation (air ambulance), Trip cancellation/interruption, Lost baggage/passport, Accidental death & repatriation."
    },
     car: {
      title: "Car Insurance",
      desc: "Provides financial protection against losses from accidents, theft, or damages to your car.",
      coverage :"Third-party liability (damage/injury caused to others), Own damage cover (damage to your car), Personal accident cover (injury/death of driver), Add-ons like zero depreciation, roadside assistance, engine protection, etc."
    }
  };

  const policyDatahealth =  {
        policyNumber: "H123456789",
        policyName: "Health Secure Plan",
        insurer: "ABC Insurance Ltd.",
        startDate: "2025-05-01",
        endDate: "2026-05-01",
        coverageAmount: "₹10,00,000",
        premium: "₹12,000 / year",
        status: "Active",
        
    } ;

const policyDataCar = {
        policyNumber: "C987654321",
        policyName: "Comprehensive Car Insurance",
        insurer: "XYZ General Insurance Ltd.",
        vehicle: "Hyundai i20 Sportz",
        registrationNumber: "KA-05-AB-1234",
        startDate: "2023-06-15",
        endDate: "2024-06-14",
        coverageAmount: "₹5,00,000",
        premium: "₹18,000 / year",
        status: "Active"
    };

    const policyDataTravel = {
        status: "No Active Travel Policy found!",
    }

  return (
    <div>
          <TopBar/>
    <div className={styles.policy_container}>
      {/* Side Navigation */}
      <div className={styles.policy_sidebar}>

        <h2 className={styles.policy_details}>Policy Details</h2>
        <ul>
          <li
            className={selected === "health" ? "active" : ""}
            onClick={() => setSelected("health")}
          >
            Health
          </li>
          <li
            className={selected === "travel" ? "active" : ""}
            onClick={() => setSelected("travel")}
          >
            Travel
          </li>
          <li
            className={selected === "car" ? "active" : ""}
            onClick={() => setSelected("car")}
          >
            Car
          </li>
        </ul>
      </div>

      {/* Policy Details Box */}
      <div className={styles.policy_content}>
        <div className={styles.policy_card}>
            <h3>{policyDetails[selected].title}</h3>
            <p>{policyDetails[selected].desc}</p>
            <p>{policyDetails[selected].coverage}</p>
        </div>
           
        <br/>

        <div className={styles.policy_card}>
            {policyDetails[selected].title === "Health Insurance" &&  (
            <>
               <div className={styles.policy_details}>
                    <h4>Dear User, </h4> 
                    <h4>Please find your Policy Details below</h4> 
                </div>
                <br/>
            
                <p><b>Policy Number:</b> {policyDatahealth.policyNumber}</p>
                <p><b>Policy Name:</b> {policyDatahealth.policyName}</p>
                <p><b>Insurer:</b> {policyDatahealth.insurer}</p>
                <p><b>Start Date:</b> {policyDatahealth.startDate}</p>
                <p><b>End Date:</b> {policyDatahealth.endDate}</p>
                <p><b>Coverage Amount:</b> {policyDatahealth.coverageAmount}</p>
                <p><b>Premium:</b> {policyDatahealth.premium}</p>
                <p><b>Status:</b> {policyDatahealth.status}</p>
                </>
            )}
        
   

            { policyDetails[selected].title === "Car Insurance" && (
            <>
               <div className={styles.policy_details}>
                    <h4>Dear User, </h4> 
                    <h4>Please find your Policy Details below</h4> 
                </div>
                <br/>
            
              <p><b>Policy Number:</b> {policyDataCar.policyNumber}</p>
              <p><b>Policy Name:</b> {policyDataCar.policyName}</p>
              <p><b>Insurer:</b> {policyDataCar.insurer}</p>
              <p><b>Vehicle:</b> {policyDataCar.vehicle}</p>
              <p><b>Registration Number:</b> {policyDataCar.registrationNumber}</p>
              <p><b>Start Date:</b> {policyDataCar.startDate}</p>
              <p><b>End Date:</b> {policyDataCar.endDate}</p>
              <p><b>Coverage Amount:</b> {policyDataCar.coverageAmount}</p>
              <p><b>Premium:</b> {policyDataCar.premium}</p>
              <p><b>Status:</b> {policyDataCar.status}</p>
                </>
            )}

            { policyDetails[selected].title === "Travel Insurance" && (
                <>
                    <p>{policyDataTravel.status}</p>
                </>
            )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Policy;
