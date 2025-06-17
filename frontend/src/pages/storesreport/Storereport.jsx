import React, { useState } from "react";
import './storereport.css'

import {  Routes , Route } from "react-router-dom";

import Summary from "../summary/Summary";
import SalesReport from "../salesreports/Salesreports";




const StoresReport = ()=>{
   
    return(
        <>
       <div className="store-report-section">
        <div className="store-report-header">
            <div className="store-report-top">
                <div className="store-report-heading">
                    <div className="store-report-icon">
                        <img src="./images/market-analysis.png" alt=""/>
                    </div>
                    <div className="h-p">
                        <h2>Store Report</h2>
                        <p>Monitor store's business analytics & Reports</p>
                    </div>
                </div>
            </div>
            <div className="sso-box">
                
                 <Summary/>
                
            </div>
            <div className="diffrent-report-pages">
                <div className="diffrent">
                   
                   
                    <Routes>
                        
                    <Route path="/sales" element={<SalesReport/>}/>
                    
                    </Routes>
                   
                 
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default StoresReport;
