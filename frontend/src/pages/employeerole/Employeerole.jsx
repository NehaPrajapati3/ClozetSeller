import React from "react";
import './employeerole.css'
import { LuUserRoundCog } from "react-icons/lu";
import { MdListAlt } from "react-icons/md";
import { Button } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci"

const EmployeeRole = () => {
    return (

        <>
            <div className="employee-section">
                <div className="employee-header">
                    <div className="employee-top">
                        <div className="employee-heading">
                            <div className="employee-icon"><LuUserRoundCog /></div>
                            <h2>Custom Role</h2>
                        </div>
                    </div>
                    <div className="employee-role-box">
                        <div className="main-role-form">
                            <div className="role-form-top">
                                <div className="role-f-heading">
                                    <div className="role-icon"><MdListAlt /></div>
                                    <h3>Role Form</h3>
                                </div>
                            </div>
                            <div className="role-de">
                                <div className="role-de-heading">
                                    <div className="r-d-1">
                                        <h3>Default</h3>
                                    </div>
                                    <div className="r-e-1">
                                        <h3>English(EN)</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="role-name-box">
                                <div className="role-name-heading">
                                    <p>Role name (Default)</p>
                                </div>
                                <div className="role-name-input">
                                    <input type="texy" placeholder=" Role name example" />
                                </div>
                            </div>
                            <div className="permission-box">
                                <div className="permission-top">
                                    <div className="permission-heading">
                                        <p>Module Permission:</p>
                                    </div>
                                </div>
                                <div className="permission-checkbox">
                                    <div className="permission-parts">
                                        <div className="permission-io">
                                            <input type="checkbox" />Items
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" />Orders
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> Employee
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> My shop
                                        </div>
                                    </div>
                                    <div className="permission-parts">
                                        <div className="permission-io">
                                            <input type="checkbox" />Store Setup
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> Addons
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> Campaigns
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> Reviews
                                        </div>
                                    </div>
                                    <div className="permission-parts">
                                        <div className="permission-io">
                                            <input type="checkbox" />My wallet
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" />Bank info
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> POS
                                        </div>
                                        <div className="permission-io">
                                            <input type="checkbox" /> Chat
                                        </div>
                                    </div>
                                </div>
                                <div className="srbtn-box">
                                    <div className="r1btn">
                                        <Button className="rst-btn">Reset</Button>
                                        <Button className="subt-btn">Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="employee-table-box">
                          <div className="employee-rule-table">
                            
                                          <div className="c-table-top">
                                            <div className="c-table-heading">
                                                <div className="rule-table-icon"><CiViewTable/></div>
                                              <h3>Rule Table</h3><span>0</span>
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
                                          <div className="main-table-rule">
                            <table width="100%">
                                              <thead >
                                                <tr >
                                                  <th>SI</th>
                                                  <th>Rule Name</th>
                                                  <th> Items</th>
                                                  <th> Orders</th>
                                                  <th> Store setup</th>
                                                  <th>Addons</th>
                                                  <th>My wallet</th>
                                                  <th>Employee</th>
                                                  <th>My setup</th>
                                                  <th> Campaigns</th>
                                                  <th>Reviews</th>
                                                  <th>POS</th>
                                                  <th>Chat</th>
                                                </tr>
                                              </thead>
                                              <tbody >
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
                                               </tr>
                                               <tr>
                                                <td>1</td>
                                                <td>Role Name example</td>
                                                <td>2</td>
                                                <td>store Setup</td>
                                                <td> Addons </td>
                                                <td>My wallet</td>
                                                <td>Bank Info</td>
                                                <td>Employee</td>
                                                <td>My shop</td>
                                                <td> Campaigns</td>
                                                <td>Reviews</td>
                                                <td>POS</td>
                                                <td>Chat</td>
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

export default EmployeeRole;