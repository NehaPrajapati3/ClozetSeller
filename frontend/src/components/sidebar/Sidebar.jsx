import React, { useState } from "react";
import './sidebar.css'
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";
import {  Link, useNavigate } from "react-router-dom";
import { PiSailboatFill } from "react-icons/pi";
import { MdDiamond } from "react-icons/md";
import { MdCategory } from "react-icons/md";







const Sidebar = ()=>{
// const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleDropmenu, setIsToggleDropmenu] = useState(false)

const isOpenDropmenu = (index)=>{
  setActiveTab(index);
  setIsToggleDropmenu(!isToggleDropmenu)
}
  // const gotodashboard = ()=>{
  //   navigate('/dashboard');
  // }
   
    return(
        <>
       <div className="sidebar-section">
         <div className="search-bar-box">
            <div className="side-searchbar">
             <div className="side-search-icon" >
                <IoMdSearch/>
             </div>
             <input type="text" placeholder="Search Menu..."/>
            </div>
           
         </div>
         <ul>
                <li>
                    
                <Link to={'/dashboard'}>
                <Button  >
                    <span className="side-icons"><MdDashboard/></span>
                    Dashboard
                    <span className="arrow"><IoIosArrowForward/></span>
                  </Button>
               
                 </Link>
                </li>
                <li>
                    
                    <Link to={'/newsale'}>
                    <Button  >
                        <span className="side-icons"><PiSailboatFill/></span>
                       Sales
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                    </Link>  
    
                     
                    </li>
                <li>
                    
                    
                    <Button className={`${activeTab===1  ? 'active':""}`} onClick={()=>isOpenDropmenu(1)} >
                        <span className="side-icons"><MdShoppingCart/></span>
                        Order Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===1 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/allorder">All Orders</Link></li>
                        <li><Link to="#">Orders</Link></li>
                        <li><Link to="#">Order Refunds</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===2  ? 'active':""}`} onClick={()=>isOpenDropmenu(2)} >
                        <span className="side-icons"><MdCategory className="text-red-500 text-4xl " /></span>
                        Category Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===2 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/subCategory">Sub Category</Link></li>
                        <li><Link to="/subCategoryList">Sub Category List</Link></li>
                        
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===3  ? 'active':""}`} onClick={()=>isOpenDropmenu(3)} >
                        <span className="side-icons"><MdDiamond className="text-red-500 text-4xl " /></span>
                        Item Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===3 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/addItem">Add</Link></li>
                        <li><Link to="/itemList">Product List</Link></li>
                        <li><Link to="/hiddenProductList">Hidden Product List</Link></li>
                        <li><Link to="/productGallery">Product Gallery</Link></li>
                        <li><Link to="/bulkImport">Bulk Import</Link></li>
                        <li><Link to="/bulkExport">Bulk Export</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===4  ? 'active':""}`} onClick={()=>isOpenDropmenu(4)} >
                        <span className="side-icons"><FaMountainSun/></span>
                        Marketing Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===4 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/coupons">Coupons</Link></li>
                        <li><Link to="/banners">Banners</Link></li>
                       
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===5  ? 'active':""}`} onClick={()=>isOpenDropmenu(5)} >
                        <span className="side-icons"><MdDashboard/></span>
                        Business Management
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===5 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/withdrawrequest">Withdraw Requests</Link></li>
                        <li><Link to="/collectcash">Collect Cash</Link></li>
                        <li><Link to="/deliverypayment">Delivery Man Payments</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===6  ? 'active':""}`} onClick={()=>isOpenDropmenu(6)} >
                        <span className="side-icons"><MdBusiness/></span>
                        Business Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===6 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/storeconfig">store Config</Link></li>
                        <li><Link to="/myshopinfo">My Shop</Link></li>
                        <li><Link to="/bankinfo">Bank Info</Link></li>
                        <li><Link to="/mywallet">My Wallet</Link></li>
                        <li><Link to="/review">Reviews</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                    <Button className={`${activeTab===7  ? 'active':""}`} onClick={()=>isOpenDropmenu(7)} >
                        <span className="side-icons"><BiSolidUser/></span>
                        Employee Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===7 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/employeerole">Employee Role</Link></li>
                        <li><Link to="/addemployee">Add New Employee</Link></li>
                        <li><Link to="/employeelist">Employee List</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
                    <li>
                    
                    
                  
                    <Button className={`${activeTab===8  ? 'active':""}`} onClick={()=>isOpenDropmenu(8)} >
                        <span className="side-icons"><TbReportMoney/></span>
                        Transection Section
                        <span className="arrow"><IoIosArrowForward/></span>
                      </Button>
                      <div className={`dropmenuwraper  ${activeTab===8 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/transection">Transection Report</Link></li>
                        <li><Link to="#">Item Report</Link></li>
                        {/* <li><Link to="/storereport">Store Wise Report</Link></li> */}
                        <li><Link to="/expensereport">Expense Report</Link></li>
                        <li><Link to="#">Limited Stock Item</Link></li>
                        <li><Link to="#">Order Report</Link></li>
                      </ul>
                      </div>
                     
    
                     
                    </li>
            </ul>
       </div>
      
        </>
    )
}
export default Sidebar;