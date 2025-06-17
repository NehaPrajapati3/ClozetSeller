import React from "react";
import './storeconfig.css'
import { FaGears } from "react-icons/fa6";
import { LiaStoreAltSolid } from "react-icons/lia";
import { MenuItem, Select, Switch } from '@mui/material';
import { MdOutlineSettings } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { Button } from "@mui/material";

const StoreConfig = ()=>{

   

    return (
      <>
        <div className="store-section">
          <div className="store-header">
            <div className="store-top">
              <div className="store-heading">
                <div className="store-icon">
                  <FaGears />
                </div>
                <h2>Store Setup</h2>
              </div>
            </div>
            <div className="store-temporary">
              <div className="store-box">
                <div className="store-heading">
                  <div className="store-t-icon">
                    <LiaStoreAltSolid />
                  </div>
                  <h3>Store Teporarly Closed Title</h3>
                </div>
                <div className="cl-btn">
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
            <div className="store-setting">
              <div className="store-setting-box">
                <div className="setting-box-top">
                  <div className="setting-heading">
                    <div className="setting-icon">
                      <MdOutlineSettings />
                    </div>
                    <h3>Store Settings</h3>
                  </div>
                </div>
                <div className="set-on-off-box">
                  <div className="on-off-btn">
                    <div className="sh-or-heading">
                      <h3>Scheduled Order</h3>
                      <div className="waring">
                        <PiWarningCircleBold />
                      </div>
                    </div>
                    <div className="switch">
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="on-off-btn">
                    <div className="sh-or-heading">
                      <h3>Delivery</h3>
                      <div className="waring">
                        <PiWarningCircleBold />
                      </div>
                    </div>
                    <div className="switch">
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="on-off-btn">
                    <div className="sh-or-heading">
                      <h3>Take Away</h3>
                      <div className="waring">
                        <PiWarningCircleBold />
                      </div>
                    </div>
                    <div className="switch">
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="basic-setting">
              <div className="basic-setting-main">
                <div className="basic-top">
                  <div className="basic-heading">
                    <div className="basic-icon">
                      <MdOutlineSettings />
                    </div>
                    <h3>Basic Settings</h3>
                  </div>
                </div>
                <div className="box-main">
                  <div className="minimum-box">
                    <div className="mini-heading">
                      <h3>Minimum Order Amount</h3>
                      <div className="mini-icon">
                        <PiWarningCircleBold />
                      </div>
                    </div>
                    <div className="mini-input">
                      <input type="number" placeholder="100" />
                    </div>
                  </div>
                  <div className="approx-box">
                    <div className="mini-heading">
                      <h3>Approx Delivery Time</h3>
                      <div className="mini-icon">
                        <PiWarningCircleBold />
                      </div>
                    </div>
                    <div className="mini-input">
                      <input type="number" placeholder="100" />
                      <input type="number" placeholder="100" />
                      <Select className="s-time">
                        <MenuItem value="">none</MenuItem>
                        <MenuItem value="minutes">Minutes</MenuItem>
                        <MenuItem value="hour">Hour</MenuItem>
                        <MenuItem value="day">Day</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="gst">
                  <div className="gst-box">
                    <div className="gst-heading">
                      <div className="heading">
                        <h3>Gst</h3>
                        <div className="gst-icon">
                          <PiWarningCircleBold />
                        </div>
                      </div>
                      <div className="gst-switch">
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="gst-input">
                      <input type="number" placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="ru-btn">
                  <div className="ru-btn-main">
                    <Button className="rst-btn">Reset</Button>
                    <Button className="upd-btn">Update</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-schedule">
              <div className="time-schedule-box">
                <div className="time-sh-top">
                  <div className="time-sh-heading">
                    <div className="time-sh-icon">
                      <FaRegCalendarAlt />
                    </div>
                    <h3>Daily Time Schedule</h3>
                  </div>
                </div>
                <div className="days-box">
                  <div className="day-lines">
                    <table>
                      <tbody>
                        <tr>
                          <th className="th-w">Monday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Tuesday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Wednesday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Thursday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Friday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Saturday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <th className="th-w">Sunday :</th>

                          <td>
                            <div className="add-days">
                              <div className="offday">
                                <p>offday</p>
                              </div>
                              <div className="plus">
                                <Button className="lu-btn">
                                  <LuPlus />
                                </Button>
                              </div>
                            </div>
                            <hr />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default StoreConfig;