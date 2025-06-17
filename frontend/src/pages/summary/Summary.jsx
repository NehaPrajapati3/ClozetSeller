import React from "react";
import './summary.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Summary = ()=>{
    return(
        <>
        <div className="summary-sales-order-section">
        <div className="sso-report">
                 
                  <Button  className="summary">Summary Report</Button>

                   <Link to="/sales"  > <Button className="Sales ">Sales Report</Button></Link>
                     <Button className="Order">Order Report</Button>
                 </div>
        </div>
        </>
    )
}
export default Summary;