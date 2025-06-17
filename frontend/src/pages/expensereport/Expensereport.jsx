import React from "react";
import './expensereport.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";

const ExpenseReport = ()=>{
     const [module, setModule] = React.useState('');
     const [zones, setZones] = React.useState('');
     const [stores, setStores] = React.useState('');
     const [customers, setCustomers]= React.useState('');
     const [time,setTime] = React.useState('');
       
           const handleModule = (event) => {
               setModule(event.target.value);
           }
           const handleZones = (event)=>{
            setZones(event.target.value)
           }
           const handleStores = (event)=>{
            setStores(event.target.value);
           }
           const handleCustomers = (event)=>{
            setCustomers(event.target.value)
           }
           const handleTime = (event) =>{
            setTime(event.target.value);
           }
           
    return(
        <>
      <div className="expensereport-section">
        <div className="expensereport-header">
            <div className="expensereport-top">
            <div className="expensereport-top-heading">
                <div className="expensereport-heading">
                    <div className="expensereport-icon">
                        <img src="./images/expenses.png" alt=""/>
                    </div>
                    <h2>Expense Report</h2>
                </div>
                <div className="expense-para">
                    <div className="main-para">
                    <p>This report will show all the orders in which the admin  discount has been used the admin discount are: 
                        Free delivery over store discount Coupon discount $ item discouts(parial according to order commission).
                    </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="search-data-box">
              <div className="alldata-search">
                <div className="all-data-top">
                 <div className="all-data-top-heading">
                    <h3>Search Data</h3>
                 </div>
                </div>
                <div className="all-data-boxs1">
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
                            <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={zones} onChange={handleZones}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                            <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={stores} onChange={handleStores}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                            <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={customers} onChange={handleCustomers}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                </div>
                <div className="all-data-boxs2">
                <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Module</InputLabel>
                                            <Select value={time} onChange={handleTime}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                            <div className="filter-box">
                                <Button className="fill-btn">Fillter</Button>
                            </div>
                </div>
              </div>
            </div>
            <div className="expense-table-box">
               <div className="expense-table" >
                <div className="expense-table-top">
                      <div className="expenselist-heading">
                                                <h3>Expense Lists</h3><span><p>12</p></span>
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
                <div className="mexpense-table">
                    <table width='100%'>
                      <thead>
                        <tr>
                            <th>SI </th>
                            <th>Order Id</th>
                            <th>Date & Time</th>
                            <th>Expense Type</th>
                            <th>Customer Name</th>
                            <th>EXpense Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1235</td>
                            <td>2024-2-02</td>
                            <td>Discount on Product</td>
                            <td>Deep Patel</td>
                            <td>$ 0</td>

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
export default ExpenseReport;