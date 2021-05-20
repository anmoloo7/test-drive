import React, { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col, CustomInput } from 'reactstrap';
import Config from "../../../../config";
import "./index.scoped.css";
import "./index.css";


export default function Payment({ isOpen, toggle, ...props }) {
    const [cardNumber, setCardNumber] = useState("");

    console.log("Current Number", cardNumber);
    return (
        <Modal isOpen={isOpen} toggle={toggle} className={"x-modal"}>
            <ModalHeader className="x-modal-header" ><span className="x-modal-header-text">Payment</span></ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Choose payment method:</Label>
                    <div className="d-flex">
                        <div className="x-payment-option">
                            <CustomInput type="checkbox" checked={true} />
                            <span className="ml-4">Credit Card</span>
                        </div>
                        <div className="x-payment-option active ml-4">
                            <CustomInput type="checkbox" checked={true} />
                            <span className="ml-4">PayPal</span>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup >
                    <Label>Card Number</Label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Input type="text" name="card_number" placeholder="" value={cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim().split(" ").join("-")}
                            onChange={(e) => setCardNumber(e.target.value.split("-").join(""))} />
                        <img src={require("./master-card-icon.png").default} style={{ height: 22, width: 22, position: "absolute", right: 30 }} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label className="">Card Holder</Label>
                    <Input type="text" name="email" placeholder="" value="reginacooper@mail.com" />
                </FormGroup>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Month</Label>
                            <Input type="text" name="first_name" placeholder="" value="100" />
                        </FormGroup></Col>
                    <Col>
                        <FormGroup>
                            <Label>Year</Label>
                            <Input type="number" name="last_name" placeholder="" value="1" />
                        </FormGroup></Col>
                </Row>
                <div className="x-modal-footer">
                    <Button color="secondary" onClick={toggle} className="x-white-btn">Previous</Button>
                    <Button color="primary" onClick={toggle} className="x-purple-btn">Next</Button>
                </div>
            </ModalBody>
        </Modal>
    );
}
