import React, { useState } from "react";
import './bankinfo.css';
import { Button } from "@mui/material";
import { IoClose } from "react-icons/io5";

// import BankCartInfo from "../bankcartinfo/bankcartinfo";

  
const BankInfo= ()=>{
  const [showEditBank,setShowEditBank] = useState(false)
  const editpage = () =>{
    setShowEditBank(true)
  }
  const closeedit = ()=>{
    setShowEditBank(false)
  }

    return(
        <>
        {
          showEditBank ? 
          <>
          <div className="editbank-info">
           
           <div className="editcart">
            <div className="edit-top">
              <div className="edit-heading">
               <h3>Edit Bank Info</h3> 
                </div>
                <div className="closebtn">
                  <Button onClick={closeedit}><IoClose/></Button>
                </div>
              
            </div>
            <div className="edit-bank-form">
              <form>
                <div className="part1">
                <div className="n-lable">
                  <div className="m-lable">
                <label>Bank name *</label>
                </div>
                <div className="b-input">
                <input type="text" />
                </div>
                </div>
                <div className="n-lable">
                  <div className="m-lable">
                <label>Branch name *</label>
                </div>
                <div className="b-input">
                <input type="text" />
                </div>
                </div>
                </div>
                <div className="part1">
                <div className="n-lable">
                  <div className="m-lable">
                <label>Holer name *</label>
                </div>
                <div className="b-input">
                <input type="text" />
                </div>
                </div>
                <div className="n-lable">
                  <div className="m-lable">
                <label>Account no *</label>
                </div>
                <div className="b-input">
                <input type="text" />
                </div>
                </div>
                </div>
                <div className="partbtn">
                 <div className="ru-btn-main">
                                     <Button className="rst-btn">Reset</Button>
                                     <Button className="upd-btn">Update</Button>
                                     </div>
                </div>
              </form>
            </div>
           </div>
           
          </div>
          </>
          : null
        }
        
        <div className="bank-info-section">
              <div className="bank-info-header">
                <div className="bank-top">
                  <div className="bank-heading">
                    <div className="bank-icon">
                      <img src="./images/bank.png" alt=""/>
                    </div>
                    <h2>My Bank Info</h2>
                  </div>
                </div>
                <div className="bank-info-cart">
                  <div className="bank-cart-box">
                    <div className="bank-cart-top">
                      <div className="bank-add-btn">
                        <Button onClick={editpage}>+ Add Bank Info </Button>
                      </div>
                    </div>
                    <div className="holder-cart-box">
                      <div className="holder-cart">
                        <div className="holder-top">
                          <div className="holder-heading">
                            <h2>Holder Name : No </h2>
                          </div>
                          <div className="holder-data-info">
                            <div className="bank-name">
                              <div className="bank-name-heading">
                                <h3>Bank Name:</h3>
                                <p>No Data found</p>
                              </div>
                              <div className="print-name">
                                <h3>SBI</h3>
                              </div>
                            </div>
                            <div className="bank-name">
                              <div className="bank-name-heading">
                                <h3>Branch Name:</h3>
                                <p>No Data found</p>
                              </div>
                              <div className="print-name">
                                <h3>SBI</h3>
                              </div>
                            </div>
                            <div className="bank-name">
                              <div className="bank-name-heading">
                                <h3>Account No:</h3>
                                <p>No Data found</p>
                              </div>
                              <div className="print-name">
                                <h3>d123456789</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
        </>
    )
}

export default BankInfo;