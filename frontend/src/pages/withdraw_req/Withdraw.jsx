import React, { useState } from "react";
import './request.css'
import { IoSearchSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiBankLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

const Withdraw = () => {

    const [isApproved, setApproved] = useState(false)
    const [wcustomer, setWcustomer] = React.useState('');

    const handleWcustomer = (event) => {
        setWcustomer(event.target.value)
    }
    return (
        <>
            <div className="withdraw">
                <div className="withdraw-table">
                    <div className="top">
                        <div className="withdraw-heading">
                            <div className="heading-top">
                                <span><RiBankLine /></span><h2>Store Withdraw Transaction</h2>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="withdraw-top">
                            <div className="search-tab">
                                <div className="search-input">
                                    <input type="text " placeholder=" search Name " />
                                </div>
                                <div className="search-icon"><IoSearchSharp /></div>
                            </div>
                            <div className="select-all">
                                <FormControl fullWidth>
                                    <InputLabel >All </InputLabel>
                                    <Select value={wcustomer} onChange={handleWcustomer}>

                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="exportbtn">
                                <Button className="exbtn">
                                    <span><MdFileDownload /></span>Export<span><IoIosArrowDown /></span>
                                </Button>
                            </div>
                        </div>

                        <div className="main-table">
                            <table width="100%">
                                <thead >
                                    <tr >
                                        <th>SI</th>
                                        <th>Amount</th>
                                        <th>Store</th>
                                        <th>Request Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                            <Button className="hipen"><LuEye /></Button>

                                        </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                       <td className="ac-box">
                                                              <Button className="hipen"><LuEye /></Button>
                                      
                                                            </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                        <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                       <td className="ac-box">
                                                              <Button className="hipen"><LuEye /></Button>
                                      
                                                            </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
                                         <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >400</td>
                                        <td >Gujrat Pan Palor</td>
                                        <td >1-28-2025 12:9 </td>
                                        <td className="panding" align="center"><Button onClick={() => setApproved(!isApproved)} >
                                            {isApproved ? "Approved" : "Pending"}
                                        </Button></td>
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
        </>
    )
}

export default Withdraw;
