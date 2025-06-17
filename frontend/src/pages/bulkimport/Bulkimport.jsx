import React from "react";
import './bulkimport.css'
import { Button } from "@mui/material";

const BulkImport = ()=>{
    return(
        <>
        <div className="bulkimport-section">
            <div className="bulkimport-header">
                <div className="bulkimport-top">
                    <div className="bulkimport-heading">
                        <div className="import-icon"></div>
                        <h2>Addons Bulk Import</h2>
                    </div>
                </div>
                <div className="instruction-box">
                   <div className="main-instruction-box" >
                     <div className="step-box">
                       <div className="step-1" >
                         <h2>STEP 1</h2>
                         <h3>Download Excel File</h3>
                       </div>
                       <div className="step-1" >
                         <h2>STEP 2</h2>
                         <h3>Match Spread sheet data according to instruction</h3>
                       </div>
                       <div className="step-1" >
                         <h2>STEP 3</h2>
                         <h3>Validate data and complete Import</h3>
                       </div>
                     </div>
                     <div className="instructions">
                        <div className="ins-headings">
                        <h2>Instructions:</h2>
                        <p>1. Download the formate file and fill it with proper data.</p>
                        <p>2. You can download the example file to understand how the data must be filled.</p>
                        <p>3. Once you have downloaded and filled the format file upload it in the form below and submit.</p>
                        </div>
                     </div>
                     <div className="download-templete-heading">
                        <h2>Download Spreadsheet Template</h2>
                     </div>
                     <div className="download-temp-btn">
                        <Button>Template with Existing Data</Button>
                        <Button>Template without Data</Button>
                     </div>
                   </div>
                </div>
                <div className="import-cate-box">
                    <div className="main-cate-file">
                        <div className="cate-top">
                            <div className="cate-heading">
                                <h2>Import categories file</h2>
                            </div>
                           
                        </div>
                        <div className="choose-file-cate">
                                <input type="file" />
                            </div>
                            <div className="r-u-i-btn">
                              <div className="r-u-i" >
                                <Button className="r">Reset</Button>
                                <Button className="u">Update</Button>
                                <Button className="i">Import</Button>
                                </div> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BulkImport;