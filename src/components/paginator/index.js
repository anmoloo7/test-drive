import React, { useState } from "react";
import Config from "../../config";
import "./index.scoped.css";
import { Table, CustomInput } from 'reactstrap';
import { IoIosArrowForward, IoIosArrowBack, IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineInfoCircle, AiFillCaretDown } from "react-icons/ai";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default function Paginator({ setPage, setPerPage, pagination, ...props }) {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <div className="paginator-container">
            <div id="UncontrolledPopover" type="button" className="mr-5" onClick={() => setShowPopover(true)}>
                Rows per page: {pagination.per_page}  <AiFillCaretDown />
            </div>
            {showPopover &&
                <UncontrolledPopover placement="bottom" target="UncontrolledPopover" trigger="legacy">
                    <PopoverBody className="x-option-item-popover-body">
                        <div className="x-option-item mt-1" onClick={() => { setPerPage(10); setShowPopover(false) }}>10</div>
                        <div className="x-option-item" onClick={() => { setPerPage(20); setShowPopover(false) }}>20</div>
                        <div className="x-option-item" onClick={() => { setPerPage(50); setShowPopover(false) }}>50</div>
                        <div className="x-option-item" onClick={() => { setPerPage(100); setShowPopover(false) }}>100</div>
                    </PopoverBody>

                </UncontrolledPopover>
            }
            <span className="mr-5">{pagination.page * pagination.per_page - pagination.per_page + 1}-{pagination.page * pagination.per_page - (pagination.per_page - pagination.current)} of {pagination.total}</span>

            <IoIosArrowBack className="x-arrow-icons mr-4" onClick={() => pagination.prev ? setPage(pagination.prev) : null} />
            <IoIosArrowForward className="x-arrow-icons mr-3" onClick={() => pagination.next ? setPage(pagination.next) : null} />
        </div>
    );
}
