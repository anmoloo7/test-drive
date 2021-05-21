import React, { Fragment, useState, useEffect } from "react";
import Config from "../../config";
import "./index.scoped.css";
import { Table, CustomInput, UncontrolledPopover, PopoverBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import Paginator from "../paginator";
import _ from "lodash";
import classnames from "classnames";
import commands from "../../commands";
import CacheState from "../../redux/states/cache"

export default function UserTable({ toggleDetailsPopup, filters, ...props }) {

    const [expandedRows, setExpandedRows] = useState({});
    const [selectedRows, setSelectedRows] = useState({});
    const [data, setData] = useState([]);
    const [pagination, setpagination] = useState(undefined);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [activeFilter, setActiveFilter] = useState(undefined);
    const [sortFilter, setSortFilter] = useState(undefined);
    const [searchQuery, setSearchQuery] = useState("");
    const [openedRowData, setOpenedRowData] = useState({});

    const cacheState = CacheState.get();
    console.log("Current Value is", page);
    console.log("Current Value is", perPage);
    useEffect(() => {
        getTableData();
    }, [cacheState.demoData, page, perPage, activeFilter, sortFilter, searchQuery]);

    function getTableData() {
        setExpandedRows({});
        setSelectedRows({});
        const data = commands.getTableData({
            ...filters,
            page: page,
            per_page: perPage,
            active: activeFilter,
            sortBy: sortFilter,
            search: searchQuery || undefined
        });
        setData(data.data);
        setpagination(data.pagination);
    }

    function getPaymentText(paymentStatus) {
        if (paymentStatus === "paid") {
            return "Paid";
        } else if (paymentStatus === "unpaid") {
            return "Dues";
        } else if (paymentStatus === "overdue") {
            return "Dued";
        } else {
            return "";
        }
    }

    function toggleRow(rowIndex) {
        setExpandedRows((prev) => ({ ...prev, [rowIndex]: !prev[rowIndex] }));
    }


    function toggleSelectedRow(rowIndex) {
        setSelectedRows((prev) => ({ ...prev, [rowIndex]: !prev[rowIndex] }));
    }

    function toggleSelectAllRows() {
        var newSelectedRows = {};

        if (data.length !== Object.keys(selectedRows).length) {
            data.forEach((item, index) => {
                newSelectedRows[index] = true;
            });
        }

        setSelectedRows(newSelectedRows);
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
                            <DropdownItem onClick={() => setSortFilter(undefined)}>Default <CustomInput type="radio" checked={sortFilter === undefined} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setSortFilter("first_name")}>First Name <CustomInput type="radio" checked={sortFilter === "first_name"} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setSortFilter("last_name")}>Last Name <CustomInput type="radio" checked={sortFilter === "last_name"} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setSortFilter("payment_date")}>Due Date <CustomInput type="radio" checked={sortFilter === "payment_date"} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setSortFilter("last_login")}>Last Login <CustomInput type="radio" checked={sortFilter === "last_login"} className="mr-3" /></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem disabled>USERS:</DropdownItem>
                            <DropdownItem onClick={() => setActiveFilter(undefined)}>All <CustomInput type="radio" checked={activeFilter === undefined} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setActiveFilter(true)}>Active <CustomInput type="radio" checked={activeFilter === true} className="mr-3" /></DropdownItem>
                            <DropdownItem onClick={() => setActiveFilter(false)}>Inactive <CustomInput type="radio" checked={activeFilter === false} className="mr-3" /></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: 20, width: "100%" }}>
                        <BsSearch className="x-search-input-icon" />
                        <Input type="text" placeholder="Search Users by Name, Email or Date" className="x-search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </span>
                <Button className="x-payment-btn">MAKE PAYMENT</Button>
            </div>
            <Table responsive>
                <thead className="x-table-heading">
                    <tr>
                        <th ><CustomInput type="checkbox" checked={data.length === Object.keys(selectedRows).length && !Object.values(selectedRows).find((item) => item === false)} onChange={() => toggleSelectAllRows()} id="select-all" className="pl-2" style={{ minWidth: 32 }} /></th>
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
                    {data.length > 0 ?
                        <Fragment>
                            {data.map((item, index) => (
                                <Fragment>
                                    <tr style={{ backgroundColor: expandedRows[index] ? "#F4F2FF" : "#ffffff" }}>
                                        <td><CustomInput type="checkbox" checked={!!selectedRows[index]} className="pl-2" id={"item-" + index} onChange={() => toggleSelectedRow(index)} /></td>
                                        <td style={{ textAlign: "center", cursor: "pointer" }} onClick={() => toggleRow(index)}>{!expandedRows[index] ? <IoIosArrowDropdown className="x-arrow-icon" /> : <IoIosArrowDropup className="x-arrow-icon" />}</td>
                                        <td><span className="x-user-name">{item.first_name} {item.last_name}</span><br /><span className="x-user-email">{item.email}</span></td>
                                        <td><span className={classnames({ "x-user-active-tag": item.active, "x-user-inactive-tag": !item.active })}><GoPrimitiveDot className="x-dot-icon" />{item.active ? "Active" : "Inactive"}</span><br /><span className="x-user-last-login">Last login: {item.last_login}</span></td>
                                        <td></td>
                                        <td><span className={classnames({ "x-user-paid-tag": item.payment_status === "paid", "x-user-unpaid-tag": item.payment_status === "unpaid", "x-user-overdue-tag": item.payment_status === "overdue" })}><GoPrimitiveDot className="x-dot-icon" />{_.capitalize(item.payment_status)}</span><br /><span className="x-user-payment-date">{getPaymentText(item.payment_status)} on {item.payment_date}</span></td>
                                        <td><span className="x-user-amount">{item.amount}</span><br /><span className="x-user-currency">USD</span></td>
                                        <td><span className="x-view-more-text" onClick={() => toggleRow(index)}>View More</span></td>
                                        <td>
                                            <UncontrolledDropdown >
                                                <DropdownToggle className="x-dropdown-menu-toggle" onClick={() => setOpenedRowData(item)} >
                                                    <BsThreeDotsVertical className="x-menu-icon" />
                                                </DropdownToggle>
                                                {openedRowData.id === item.id &&
                                                    <DropdownMenu className="x-dropdown-menu">
                                                        <DropdownItem onClick={() => alert("Edit Pressed")} >Edit</DropdownItem>
                                                        <DropdownItem onClick={() => toggleDetailsPopup(item)}>View Profile</DropdownItem>
                                                        {item.active ?
                                                            <DropdownItem onClick={() => commands.deactivateUser(item.id)} style={{ color: "#D30000" }}>Deactivate User</DropdownItem>
                                                            :
                                                            <DropdownItem onClick={() => commands.activateUser(item.id)} style={{ color: "#007F00" }}>Activate User</DropdownItem>
                                                        }
                                                        <DropdownItem divider />
                                                        <DropdownItem onClick={() => commands.deleteUser(item.id)} style={{ color: "#D30000" }}>Delete</DropdownItem>
                                                    </DropdownMenu>
                                                }
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    {expandedRows[index] &&
                                        <tr>
                                            <td colSpan={9} className="p-0">
                                                <Table>
                                                    <thead className="x-table-list-head">
                                                        <tr>
                                                            <th className="x-more-info-spacing"></th>
                                                            <th>DATE</th>
                                                            <th>USER ACTIVITY</th>
                                                            <th>DETAIL <AiOutlineInfoCircle style={{ verticalAlign: "bottom", fontSize: 16 }} id="details-icon" />
                                                                <UncontrolledPopover placement="right" target="details-icon" trigger="legacy">
                                                                    <PopoverBody className="x-details-popover">
                                                                        <div className="x-popover-text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget.</div>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="x-table-list-body" style={{ textTransform: "unset" }}>
                                                        {Array.isArray(item.activities) && item.activities.length > 0 ?
                                                            <Fragment>
                                                                {item.activities.map((itm, idx) => (
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>{itm.date}</td>
                                                                        <td>{itm.activity}</td>
                                                                        <td>{itm.details}</td>
                                                                    </tr>
                                                                ))}
                                                            </Fragment>
                                                            :
                                                            <tr>
                                                                <td colSpan={4}><div className="x-no-records-text">NO RECORDS FOUND</div></td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                    }
                                </Fragment>
                            ))}
                        </Fragment>
                        :
                        <tr>
                            <td colSpan={9}><div className="x-no-records-text">NO RECORDS FOUND</div></td>
                        </tr>
                    }
                </tbody>
            </Table>
            <div className="x-table-footer">
                {pagination &&
                    <Paginator setPage={setPage} setPerPage={setPerPage} pagination={pagination} />
                }
            </div>
        </div>
    );
}
