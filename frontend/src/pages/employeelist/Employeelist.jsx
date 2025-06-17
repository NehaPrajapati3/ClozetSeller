import React from "react";
import './employeelist.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { Button } from "@mui/material";
import { LuUserRoundCog } from "react-icons/lu";
import { CgAdd } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import useGetEmployees from "../../hooks/useGetEmployees";
import { useSelector } from "react-redux";
import { selectEmployees } from "../../redux/selectors";

const EmployeeList = () => {

 useGetEmployees();
 const employees = useSelector(selectEmployees);
 console.log(`Employees: ${employees}`);

    return (
      <>
        <div className="employeelist-section">
          <div className="employeelist-header">
            <div className="employeelist-top">
              <div className="employeelist-heading">
                <div className="employee-icon">
                  <LuUserRoundCog />
                </div>
                <h2>Employee List</h2>
                <div className="employee-count">
                  <h3>{employees.length}</h3>
                </div>
              </div>
              <div className="add-btn-employee">
                <Link to="/addemployee">
                  {" "}
                  <Button>
                    <div className="a-btn-e-icon">
                      <CgAdd />
                    </div>
                    Add New Employee
                  </Button>
                </Link>
              </div>
            </div>
            <div className="employeelist-box">
              <div className="employeelist-table">
                <div className="employee-table-top">
                  <div className="s-btn">
                    <div className="s-input">
                      <input
                        type="text"
                        placeholder="Search By name or email"
                      />
                      <div className="icon-s">
                        <IoSearchSharp />
                      </div>
                    </div>
                    <div className="ex-select">
                      <Button className="e-btn">
                        <span>
                          <MdFileDownload />
                        </span>
                        Export
                        <span>
                          <IoIosArrowDown />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="main-elist-table">
                  <table width="100%">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.length > 0 ? (
                        employees.map((employee, index) => (
                          <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.role}</td>
                            <td className="ac-box">
                              <Link to="/addemployee" state={{ employee }}>
                                <Button className="hipen">
                                  <LuEye />
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            No Employees Available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default EmployeeList;