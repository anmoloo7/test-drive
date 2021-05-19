import React, { Fragment } from "react";
import Config from "../../config";
import "./index.scoped.css";
import testData from "./data.json";
import { Table, CustomInput, UncontrolledPopover, PopoverBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import Paginator from "../paginator";

export default function UserTable({ data, ...props }) {



    if (Config.environment === "test") {
        data = testData;
    }


    return (
        <div className="x-table-card">
            <div className="x-table-header">
                <span className="x-left-header">
                    <UncontrolledDropdown className="x-filter-dropdown" direction="down">
                        <DropdownToggle className="x-filter-btn">
                            <HiFilter className="x-filter-icon" /> Filter
                        </DropdownToggle>
                        <DropdownMenu className="x-filter-dropdown-menu">
                            <DropdownItem disabled>SORT BY:</DropdownItem>
                            <DropdownItem>Default <CustomInput type="radio" checked={true} className="mr-3" /></DropdownItem>
                            <DropdownItem>First Name <CustomInput type="radio" checked={true} className="mr-3" /></DropdownItem>
                            <DropdownItem>Last Name <CustomInput type="radio" checked={true} className="mr-3" /></DropdownItem>
                            <DropdownItem>Due Date <CustomInput type="radio" checked={true} className="mr-3" /></DropdownItem>
                            <DropdownItem>Last Login <CustomInput type="radio" checked={true} className="mr-3" /></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem disabled>USERS:</DropdownItem>
                            <DropdownItem>All <CustomInput type="radio" checked={false} className="mr-3" /></DropdownItem>
                            <DropdownItem>Active <CustomInput type="radio" checked={false} className="mr-3" /></DropdownItem>
                            <DropdownItem>Inactive <CustomInput type="radio" checked={false} className="mr-3" /></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: 20, width: "100%" }}>
                        <BsSearch className="x-search-input-icon" />
                        <Input type="text" placeholder="Search Users by Name, Email or Date" className="x-search-input" />
                    </div>
                </span>
                <Button className="x-payment-btn">MAKE PAYMENT</Button>
            </div>
            <Table responsive>
                <thead className="x-table-heading">
                    <tr>
                        <th ><CustomInput type="checkbox" checked={true} className="pl-2" style={{ minWidth: 32 }} /></th>
                        <th style={{ minWidth: 50 }}></th>
                        <th>NAME</th>
                        <th>USER STATUS</th>
                        <th style={{ width: "12%" }}></th>
                        <th>PAYMENT STATUS</th>
                        <th style={{ width: "8%" }}>AMOUNT</th>
                        <th></th>
                        <th style={{ width: "2%" }}><BsThreeDotsVertical className="x-menu-icon" /></th>
                    </tr>
                </thead>
                <tbody>
                    <Fragment>
                        <tr style={{ backgroundColor: true ? "#F4F2FF" : "#ffffff" }}>
                            <td><CustomInput type="checkbox" checked={true} className="pl-2" /></td>
                            <td style={{ textAlign: "center" }}>{true ? <IoIosArrowDropdown className="x-arrow-icon" /> : <IoIosArrowDropup className="x-arrow-icon" />}</td>
                            <td><span className="x-user-name">Justin Septimus</span><br /><span className="x-user-email">example@email.com</span></td>
                            <td><span className="x-user-active-tag"><GoPrimitiveDot className="x-dot-icon" />Active</span><br /><span className="x-user-last-login">Last login: 14/APR/2020</span></td>
                            <td></td>
                            <td><span className="x-user-paid-tag"><GoPrimitiveDot className="x-dot-icon" />Paid</span><br /><span className="x-user-payment-date">Paid on 15/APR/2020</span></td>
                            <td><span className="x-user-amount">$200</span><br /><span className="x-user-currency">USD</span></td>
                            <td><span className="x-view-more-text">View More</span></td>
                            <td>
                                <Dropdown isOpen={false} toggle={() => null}>
                                    <DropdownToggle className="x-dropdown-menu-toggle">
                                        <BsThreeDotsVertical className="x-menu-icon" />
                                    </DropdownToggle>
                                    <DropdownMenu className="x-dropdown-menu">
                                        <DropdownItem onClick={() => alert("hehe1")} >Edit</DropdownItem>
                                        <DropdownItem onClick={() => alert("hehe2")}>View Profile</DropdownItem>
                                        <DropdownItem onClick={() => alert("hehe3")} style={{ color: "#007F00" }}>Activate User</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => alert("hehe4")} style={{ color: "#D30000" }}>Delete</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9} className="p-0">
                                <Table>
                                    <thead className="x-table-list-head">
                                        <tr>
                                            <th className="x-more-info-spacing"></th>
                                            <th>DATE</th>
                                            <th>USER ACTIVITY</th>
                                            <th>DETAIL <AiOutlineInfoCircle style={{ verticalAlign: "bottom", fontSize: 16 }} id="details-icon" />
                                                <UncontrolledPopover placement="right" target="details-icon" trigger="click">
                                                    <PopoverBody className="x-details-popover">
                                                        <div className="x-popover-text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget.</div>
                                                    </PopoverBody>
                                                </UncontrolledPopover>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="x-table-list-body">
                                        <tr>
                                            <td></td>
                                            <td>12/APR/2020</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>12/APR/2020</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>12/APR/2020</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</td>
                                        </tr>

                                        <tr>
                                            <td colSpan={4}><div className="x-no-records-text">NO RECORDS FOUND</div></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    </Fragment>
                </tbody>
            </Table>
            <div className="x-table-footer">
                <Paginator />
            </div>
        </div>
    );
}
