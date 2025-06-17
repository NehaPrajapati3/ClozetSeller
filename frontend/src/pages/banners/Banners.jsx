import React from "react";
import './banners.css'
import { PiFlagBanner } from "react-icons/pi";
import { PiWarningCircleBold } from "react-icons/pi";
import { Button } from "@mui/material";
import { LuEye } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";

const Banners = () => {
    return (
        <>
            <div className="banner-section">
                <div className="banner-header">
                    <div className="banner-top">
                        <div className="banner-heading">
                            <div className="banner-icon"><PiFlagBanner /></div>
                            <h2>Banner Setup</h2>
                        </div>

                    </div>
                    <div className="banner-setup">
                        <div className="banner-setup-info">
                            <div className="setup-top">
                                <div className="instruct">
                                    <h3>Instructions</h3>
                                    <div className="waring">
                                        <PiWarningCircleBold />
                                    </div>
                                </div>
                            </div>
                            <div className="banner-title">
                                <div className="banner-left1">
                                    <div className="left-b-info1">
                                        <div className="main-info-heading">
                                            <h3>Banner Title</h3>
                                        </div>
                                        <div className="info-input">
                                            <input type="text" placeholder="Title here..." />
                                        </div>
                                    </div>
                                    <div className="left-b-info2">
                                        <div className="main-info-heading">
                                            <h3>Redirection URL/Link</h3>
                                        </div>
                                        <div className="info-input">
                                            <input type="text" placeholder="Enter URL" />
                                        </div>
                                    </div>
                                </div>
                                <div className="right-img-box">

                                    <div className="img-upload">
                                        <label>Upload Banner</label>
                                        <input type="file" alt="Upload Image" />
                                    </div>
                                    <div className="upload-img-format">
                                        <h3>Banner Image Ratio 3:1</h3>
                                        <p>Image format:jpg, png, jpeg | Maximum: 2 MB</p>
                                    </div>
                                </div>
                                <div className="img-up-btn">
                                    <Button className="rst-btn">Reset</Button>
                                    <Button className="subt-btn">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coupon-table">
                        <div className="c-table-header">
                            <div className="c-table-top">
                                <div className="c-table-heading">
                                    <h2>Banner List</h2><span>0</span>
                                </div>
                                <div className="search-title-code">
                                    <div className="s-input">
                                        <input type="text" placeholder="Search By Refrance or Name" />
                                        <div className="icon-s">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-coupon-box">
                                <table width="100%">
                                    <thead >
                                        <tr >
                                            <th>SI</th>
                                            <th>Title</th>
                                            <th>Banner Image</th>
                                            <th>Redirection Link</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>

                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>

                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
                                            <td></td>

                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr align="center">

                                            <td >1</td>
                                            <td >Deliveryman</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td >Link url </td>
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
            </div>
        </>
    )
}

export default Banners;