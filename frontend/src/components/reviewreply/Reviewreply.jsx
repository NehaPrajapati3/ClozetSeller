import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IoClose } from "react-icons/io5";


const ReveiwReply = ()=>{
  
   
   
   
    return(
        <>
         <div className="reply-section-review">
                               <div className="reply-cart">
                                  <div className="reply-cart-top">
                                    
                                    <div className="close-btn">
                                         <Button><IoClose/></Button>
                                    </div>
                                  </div>
                               </div>
                            </div>
        </>
    )
}
export default ReveiwReply;