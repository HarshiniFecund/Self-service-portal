import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/components/loginScreen.js";
import MainScreen from "../src/components/mainScreen.js";
import Policy from "../src/components/policy.js";
import ClaimsSection from "../src/components/claims.js";
import RenewalSection from "../src/components/renewal.js";
import ClaimRouter from "../src/components/claimsDetails.js";
import ForgotPassword from "../src/components/forgotPassword.js";
import ClaimTracking from "../src/components/claimTracking.js";
import CarClaim from "../src/components/carClaim.js";
import HospitalClaim from "../src/components/hospitalClaim.js";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/mainScreen" element={<MainScreen />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/claims" element={<ClaimsSection />} />
              <Route path="/renewal" element={<RenewalSection />} />
              <Route path="/claimsDetails/:id/:type" element={<ClaimRouter />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/ClaimTracking" element={<ClaimTracking />} />
              <Route path="/carClaim" element={<CarClaim />} />
               <Route path="/HospitalClaim" element={<HospitalClaim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
