import React from "react";
import { useLocation } from "react-router-dom";
import CarClaimPage from "../components/carClaim.js";
import HealthClaimPage from "../components/hospitalClaim.js";
//import TravelClaimPage from "./TravelClaimPage";

const ClaimRouter = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.pathname);
   const pathParts = location.pathname.split("/"); // ['', 'claimsDetails', 'CLM-002', 'Car']
    const page = pathParts[1];  // 'claimsDetails'
    const claimId = pathParts[2]; // 'CLM-002'
    const type = pathParts[3]; // 'Car'
console.log(type);
  switch (type) {
    case "Car":
      return <CarClaimPage />;
    case "Health":
      return <HealthClaimPage />;
    //case "travel":
     // return <TravelClaimPage />;
    default:
      return <h3>Please provide a valid insurance type in URL (car / health / travel)</h3>;
  }
};

export default ClaimRouter;
