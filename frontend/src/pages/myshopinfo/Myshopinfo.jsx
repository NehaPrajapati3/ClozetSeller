import React from "react";
import './myshopinfo.css'
import { BsShop } from "react-icons/bs";
import { Button, Switch } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import {Link} from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";

const MyShopinfo = ()=>{
    return(
        <>
       <div className="myshopinfo-section">
        <div className="myshopinfo-header">
            <div className="myshopinfo-top">
                <div className="myshopinfo-heading">
                    <div className="myshopinfo-icon">
                        <BsShop/>
                    </div>
                    <h2>My Provider Info</h2>
                </div>
                <div className="edit-provider-btn">
                   <Link to="/myshop">
                    <Button>
                     <RiPencilFill/>
                     Edit Provider Infomation
                    </Button>
                    </Link>
                </div>
            </div>
            <div className="myshop-banner-box">
                <div className="myshop-banner-info">
                    <div className="myshop-banner">
                        <img src="./images/shopbanner.jpg" alt=""/>
                       
                    </div>
                  <div className="myshop-cart">
                    <div className="myshop-logo-box">
                        <div className="myshop-logo-img">
                            <img src="./images/store1.png" alt=""/>
                        </div>
                    </div>
                    <div className="myshop-right-details">
                        <p>Name : <span>Shop Name</span></p>
                        <p>Phone : <span>99*********</span></p>
                        <p>Address :<span>Andhra Pradesh</span> </p>
                        <p>Business Plan : <span>Commission</span></p>
                        <p>Admin Commision : <span>10%</span></p>
                        <p>Vat/tax :  <span>50%</span></p>
                    </div>
                  </div>
                   
                </div>
            </div>
            <div className="announcement-box">
                <div className="main-announcement">
                    <div className="announcement-top">
                        <div className="announcement-heading">
                           <RxDashboard/>
                           <h3>Announcement</h3>
                        </div>
                        <div className="announcement-switch-box">
                            <Switch/>

                           
                        </div>
                    </div>
                    <div className="announcement-text-area">
                        <textarea type="text" placeholder="EX: Write Here.."/>
                    </div>
                    <div className="push-btn-box">
                        <Button>Publish</Button>
                    </div>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default MyShopinfo;