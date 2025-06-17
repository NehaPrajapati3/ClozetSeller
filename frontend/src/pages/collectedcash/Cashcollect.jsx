import React from "react";
import './collect.css'
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";


const CollectCash = () => {
    const [delivery, setDelivery] = React.useState('')
    const [store, setStore] = React.useState('');
    const [deliveryman, setDeliveryman] = React.useState('');



    const handleDelivery = (event) => {
        setDelivery(event.target.value);
    }
    const handleStore = (event) => {
        setStore(event.target.value);
    }
    const handleDeliveryman = (event) => {
        setDeliveryman(event.target.value);
    }
    return (
        <>
            <div className="collect">
                <div className="collect-section">
                    <div className="top-heading">
                        <div className="cash-heading">
                            <span><FaHandHoldingUsd /></span>
                            <h2>Collect Cash Transaction</h2>
                        </div>
                    </div>
                    <div className="add-cash">
                        <div className="add1">
                            <div className="c-from">
                                <div className="from">
                                    <h3>Collect From</h3>
                                </div>
                                <div className="d-man">
                                    <div className="select-menu">
                                        <FormControl className="f-bg"  size="small" fullWidth  >
                                            <InputLabel className="s-bg" >Select From</InputLabel>
                                            <Select value={delivery} onChange={handleDelivery}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                            </div>
                            <div className="c-from">
                                <div className="from">
                                    <h3>Store</h3>
                                </div>
                                <div className="d-man">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >Select store</InputLabel>
                                            <Select value={store} onChange={handleStore}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                            </div>
                            <div className="c-from">
                                <div className="from">
                                    <h3>Deliveryman</h3>
                                </div>
                                <div className="d-man">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >Select deliveryman</InputLabel>
                                            <Select value={deliveryman} onChange={handleDeliveryman}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="add2">
                            <div className="c-from">
                                <div className="from">
                                    <h3>Payment Method</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:Card" />
                                </div>
                            </div>
                            <div className="c-from">
                                <div className="from">
                                    <h3>Reference</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:Card" />
                                </div>
                            </div>
                            <div className="c-from">
                                <div className="from">
                                    <h3>Amount $</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:1000" />
                                </div>
                            </div>
                        </div>
                        <div className="add3">
                            <div className="c-btn">

                                <Button className="r-btn">Reset</Button>
                                <Button className="m-btn">Collect Cash</Button>
                            </div>

                        </div>
                    </div>
                    <div className="trans-history">
                        <div className="t-top">
                            <div className="t-heading">
                                <h3>Transaction History</h3><span><p>(0)</p></span>
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
                        <div className="history-table">
                            <table width="100%">
                                <thead >
                                    <tr >
                                        <th>SI</th>
                                        <th>Collect From</th>
                                        <th>Type</th>
                                        <th>Received At</th>
                                        <th>Amount</th>
                                        <th>Reference</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                       <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                      <td className="ac-box">
                                                              <Button className="hipen"><LuEye /></Button>
                                      
                                                            </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                       <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                       <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                       <td className="ac-box">
                                                               <Button className="hipen"><LuEye /></Button>
                                       
                                                             </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


                                        <td className="ac-box">
                                                                <Button className="hipen"><LuEye /></Button>
                                        
                                                              </td>
                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>


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

export default CollectCash;