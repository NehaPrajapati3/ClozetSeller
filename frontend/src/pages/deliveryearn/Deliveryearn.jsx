import React from "react";
import './deliveryearn.css'
import { RiEBike2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import { TbUserDollar } from "react-icons/tb";

const DeliveryEarn = () => {

    const [deliveryman, setDeliveryman] = React.useState('');

    const handleDeliveryman = (event) => {
        setDeliveryman(event.target.value);
    }
    return (
        <>
            <div className="delivery-earning">
                <div className="delivery-section">
                    <div className="top-heading">
                        <div className="cash-heading">
                            <span><RiEBike2Line /></span>
                            <h2>Provide Delivery Earning</h2>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="d-from">
                            <div className="dl-from">
                                <div className="s-from">
                                    <h3>Deliveryman</h3>
                                </div>
                                <div className="d-man">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >Select From</InputLabel>
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
                            <div className="dl-from">
                                <div className="s-from">
                                    <h3>Deliveryman</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:100" />

                                </div>

                            </div>
                        </div>
                        <div className="d-from">
                            <div className="dl-from">
                                <div className="s-from">
                                    <h3>Deliveryman</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:100" />

                                </div>

                            </div>
                            <div className="dl-from">
                                <div className="s-from">
                                    <h3>Deliveryman</h3>
                                </div>
                                <div className="d-man">
                                    <input type="text" placeholder="Ex:100" />

                                </div>

                            </div>
                        </div>
                        <div className="d2-from">
                            <div className="c-btn">

                                <Button className="r-btn">Reset</Button>
                                <Button className="m-btn">Collect Cash</Button>
                            </div>
                        </div>
                    </div>
                    <div className="box2">

                        <div className="t-top">
                            <div className="t-heading">
                              <span><TbUserDollar/></span>  <h3>Deliveryman Earning Provide Table</h3><span><p>(0)</p></span>
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
                                        <th>Name</th>

                                        <th>Received At</th>
                                        <th>Amount</th>
                                        <th>Method</th>
                                        <th>Reference</th>
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



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



                                    </tr>
                                    <tr align="center">

                                        <td >1</td>
                                        <td >Deliveryman</td>
                                        <td ></td>
                                        <td >1-28-2025 12:9 </td>
                                        <td>2400</td>
                                        <td></td>



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

export default DeliveryEarn;