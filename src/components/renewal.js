import React, { useState } from "react";
import styles from "../components/renewal.module.css";
import TopBar from '../components/topbar.js';

const CarPolicyDashboard = () => {
  const [coverage, setCoverage] = useState(500000);
  const [engineProtection, setEngineProtection] = useState(true);
  const [tyreProtection, setTyreProtection] = useState(true);
  const [consumablesCover, setConsumablesCover] = useState(false);
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);

  const basePremium = 4000;
  const addOns = (engineProtection ? 500 : 0) + (tyreProtection ? 500 : 0) + (consumablesCover ? 300 : 0);
  const total = basePremium + addOns;

  return (  
    <div>
        <TopBar/>
        <h2 className={styles.title}>🚗 Renew Car Policy</h2>
          <div className={styles.dashboard_container}>
   
      <div className={styles.dashboard_card}>
        <div className={styles.section.policy_info}>   
        
          <h3>Policy Information</h3>
          <div className={styles.info_grid}>
            <div>
              <p className={styles.label}>Current coverage</p>
              <p className={styles.value}>₹{coverage.toLocaleString()}</p>
            </div>
            <div>
              <p className={styles.label}>Expiry</p>
              <p className={styles.value.small}>5 days left before expiry</p>
            </div>
            <div>
              <p className={styles.label}>Insurer</p>
              <p className={styles.value.small}>ABC Insurance</p>
            </div>
            <div>
              <p className={styles.label}>Policy</p>
              <p className={styles.value.small}>XYZ123456789</p>
            </div>
          </div>
        </div>

        <div className={styles.section.coverage}>
          <h3>Coverage & Add-ons</h3>

          <div className={styles.slider_group}>
            <label>Coverage Amount</label>
            <input
              type="range"
              min="200000"
              max="1000000"
              step="50000"
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
            />
            <div className={styles.slider_values}>
              <span>₹2,00,000</span>
              <span>₹{coverage.toLocaleString()}</span>
              <span>₹10,00,000</span>
            </div>
          </div>

          <div className={styles.addons}>
            <label>
              <input
                type="checkbox"
                checked={engineProtection}
                onChange={() => setEngineProtection(!engineProtection)}
              />
              Engine Protection
            </label>

            <label>
              <input
                type="checkbox"
                checked={tyreProtection}
                onChange={() => setTyreProtection(!tyreProtection)}
              />
              Tyre Protection
            </label>

            <label>
              <input
                type="checkbox"
                checked={consumablesCover}
                onChange={() => setConsumablesCover(!consumablesCover)}
              />
              Consumables Cover
            </label>
          </div>
        </div>

        <div className={styles.section.premium}>
          <h3>Premium Breakdown</h3>
          <div className={styles.premium_row}>
            <span>Base Premium</span>
            <span>₹{basePremium.toLocaleString()}</span>
          </div>
          <div className={styles.premium_row}>
            <span>Add-ons</span>
            <span>₹{addOns.toLocaleString()}</span>
          </div>
          <div className={styles.premium-total}>
            <strong>Total</strong>
            <strong>₹{total.toLocaleString()}</strong>
          </div>
        </div>
      </div>
      <div>
      <div className={styles.dashboard_card_payment}>
          <h3>Payment</h3>
          <div className={styles.promo}>
            <input
              type="text"
              placeholder="Promo code"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button onClick={() => setApplied(true)}>Apply</button>
          </div>

          {applied && <p className={styles.success}>🎉 Promo applied successfully!</p>}

          <div className={styles.payment_methods}>
            <label><input type="radio" name="pay" defaultChecked /> Credit/Debit Card</label>
            <label><input type="radio" name="pay" /> UPI</label>
            <label><input type="radio" name="pay" /> Wallet</label>
            <label><input type="radio" name="pay" /> EMI</label>
          </div>

          <button className={styles.renew_btn}>Renew Now</button>
        </div>
    </div>
    </div>
    </div>    
  );
};

export default CarPolicyDashboard;
