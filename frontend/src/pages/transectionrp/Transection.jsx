import React from "react";
import './transection.css'
import { TbReport } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

const TransectionReport = () =>{
    const [module, setModule] = React.useState('');
   
       const handleModule = (event) => {
           setModule(event.target.value);
       }
    return(
        <>
        <div className="transection">
            <div className="transection-section">
                <div className="trans-top">
                    <div className="trans-heading">
                        <span><TbReport/></span><h2>Store Withdraw Transaction</h2>
                    </div>
                </div>
                <div className="search-data">
                    <div className="data-heading">
                        <h3>Search Data</h3>
                    </div>
                    <div className="module">
                        <div className="f-module">
                        <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={module} onChange={handleModule}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                        </div>
                        <div className="f-module">
                        <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={module} onChange={handleModule}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                        </div>
                        <div className="f-module">
                        <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={module} onChange={handleModule}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                        </div>
                        <div className="f-module">
                        <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={module} onChange={handleModule}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filter-btn">
                            <Button className="f-btn">Filter</Button>
                        </div>
                    </div>
                    </div>
                    <div className="complete-transection">
                        <div className="cart1">
                          <div className="complete-img">
                            <div className="total-img">
                                <img src="./images/total.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="complete-img">
                            <div className="total-info">
                                <div className="t-amount">
                                <span><h2>$</h2></span> <h2>12K</h2>
                                </div>
                                <div className="t-name">
                                    <p>Completed Transection</p>
                                </div>
                            </div>
                          </div>
                          
                        </div>
                        <div className="cart2">
                        <div className="complete-img">
                            <div className="total-img">
                                <img src="./images/refund.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="complete-img">
                            <div className="total-info">
                                <div className="t-amount">
                                <span><h2>$</h2></span> <h2>12K</h2>
                                </div>
                                <div className="t-name">
                                    <p>Completed Transection</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart3">
                            <div className="admin">
                                <div className="admin-img">
                                       <img src="./images/adminearn.png" alt=""/>
                                </div>
                                <div className="ad-heading">
                                    <div className="a-earn">
                                    <h3>Admin Earning</h3>
                                    </div>
                                    <div className="a-amount">
                                        <span><h3>$</h3></span><h3>-112</h3>

                                    </div>
                                </div>
                            </div>
                            <div className="store">
                                <div className="admin-img">
                                       <img src="./images/store1.png" alt=""/>
                                </div>
                                <div className="ad-heading">
                                    <div className="a-earn">
                                    <h3>Store Earning</h3>
                                    </div>
                                    <div className="a-amount">
                                        <span><h3>$</h3></span><h3>-112</h3>

                                    </div>
                                </div>
                            </div>
                            <div className="deliveryman">
                                <div className="admin-img">
                                       <img src="./images/dman.png" alt=""/>
                                </div>
                                <div className="ad-heading">
                                    <div className="a-earn">
                                    <h3>Deliveryman  Earning</h3>
                                    </div>
                                    <div className="a-amount">
                                        <span><h3>$</h3></span><h3>-112</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                <div className="order-table">
                      <div className="order-top">
                        <div className="order-heading">
                            <h3>Order Transaction</h3><span><p>12</p></span>
                        </div>
                         <div className="s-btn">
                                                        <div className="s-input">
                                                            <input type="text" placeholder="Search By Refrance or Name" />
                                                            <div className="icon-s">
                                                                <IoSearchSharp />
                                                            </div>
                                                        </div>
                                                        <div className="ex-select">
                                                            <Button className="e-btn">
                                                                <span><MdFileDownload /></span>Export<span><IoIosArrowDown /></span>
                                                            </Button>
                                                        </div>
                                                    </div>
                        </div>  

                        <div className="order-mtable">
                            <div className="over-table">
                            
                                                        <table >
                                                            <thead >
                                                                <tr >
                                                                    <td>SI                </td>
                                                                    <td>Order Id</td>
                                                                    <td>Store</td>
                                                                    <td>Customer Name</td>
                                                                    <td>Total Item Amount</td>
                                                                    <td>Item Discount</td>
                                                                    <td>Coupon Discount</td>
                                                                    <td>Discounted Amount</td>
                                                                    <td>Vat/Tax</td>
                                                                 <td>Delivery Change</td>
                                                                    <td>Order Amount</td>
                                                                    <td>Admin Discount</td>
                                                                    <td>Commision On Delivery Charge</td>
                                                                    <td>Store Discount</td>
                                                                    <td>Admin Commission</td>
                                                                    <td>Additional Charge</td>
                                                                    <td>Admin Net Income</td>
                                                                    <td>Store Net Income</td>
                                                                    <td>Amount Received By</td>
                                                                    <td>Payment Method</td>
                                                                    <td>Payment Status</td>
                                                                    <td>Action </td> 
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                <tr align="center">
                            
                                                                  <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                 <td className="ac-box">
                                                                                         <Button className="hipen"><LuEye /></Button>
                                                                 
                                                                                       </td>
                                                                 
                            
                            
                                                                    
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                            
                                                                   
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                            
                            
                                                                    
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                <td className="ac-box">
                                                                                        <Button className="hipen"><LuEye /></Button>
                                                                
                                                                                      </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                 <td className="ac-box">
                                                                                         <Button className="hipen"><LuEye /></Button>
                                                                 
                                                                                       </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                 <td className="ac-box">
                                                                                         <Button className="hipen"><LuEye /></Button>
                                                                 
                                                                                       </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                 <td className="ac-box">
                                                                                         <Button className="hipen"><LuEye /></Button>
                                                                 
                                                                                       </td>
                                                                </tr>
                                                                <tr align="center">
                            
                                                                <td>1</td>
                                                                  <td>12346</td>
                                                                  <td>gujrat Pan Parlor</td>
                                                                  <td>Krishi Jain</td>
                                                                  <td>$ 534</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 54</td>
                                                                  <td>$ 24 </td>
                                                                  <td> $ 405</td>
                                                                  <td> $ 0 </td>
                                                                  <td> $ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td>$ 0</td>
                                                                  <td> $ 374</td>
                                                                  <td> Admin</td>
                                                                  <td>Google Pay</td>
                                                                  <td> Completed</td>
                                                                  <td className="ac-box">
                                                                                          <Button className="hipen"><LuEye /></Button>
                                                                  
                                                                                        </td>
                                                                </tr>
                            
                                                            </tbody>
                                                        </table>
                            
                               </div>                     
                        </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default TransectionReport;