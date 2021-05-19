import React from "react";
import Config from "../../config";
import "./index.scoped.css";
import { Table, CustomInput } from 'reactstrap';
import { IoIosArrowForward, IoIosArrowBack, IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineInfoCircle, AiFillCaretDown } from "react-icons/ai";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default function Paginator({ ...props }) {



    return (
        <div className="paginator-container">
            <div id="UncontrolledPopover" type="button" className="mr-5">
                Rows per page: 10  <AiFillCaretDown />
            </div>
            <UncontrolledPopover placement="bottom" target="UncontrolledPopover" trigger="legacy">
                <PopoverBody className="x-option-item-popover-body">
                    <div className="x-option-item mt-1">10</div>
                    <div className="x-option-item">20</div>
                    <div className="x-option-item">50</div>
                    <div className="x-option-item">100</div>
                </PopoverBody>

            </UncontrolledPopover>
            <span className="mr-5">1-10 of 278</span>

            <IoIosArrowBack className="x-arrow-icons mr-4" />
            <IoIosArrowForward className="x-arrow-icons mr-3" />
        </div>
    );
}
