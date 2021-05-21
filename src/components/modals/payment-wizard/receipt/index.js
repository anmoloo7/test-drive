import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Config from "../../../../config";
import "./index.scoped.css";
import "./index.css";

export default function Submission({ isOpen, toggle, ...props }) {
    const [step, setStep] = props.stepState;
    return (
        <Modal isOpen={isOpen} toggle={toggle} className={"x-modal"}>
            <ModalHeader className="x-modal-header" ><span className="x-modal-header-text">Submission</span></ModalHeader>
            <ModalBody>
                <div>
                    <div className="x-subtitle">
                        Profile Details
                    </div>
                    <div>
                        <span className="x-label">Name: </span>
                        <span className="x-value">Regina Cooper</span>
                    </div>
                    <div>
                        <span className="x-label">Email: </span>
                        <span className="x-value">reginacooper@mail.com</span>
                    </div>
                    <div>
                        <span className="x-label">Phone: </span>
                        <span className="x-value">+1 (070) 4567–8800</span>
                    </div>
                </div>

                <div style={{ backgroundColor: "#E8E9EB", height: 1.5,marginTop:20,marginBottom:20 }}>
                </div>
                <div className="mb-5">
                    <div className="x-subtitle">
                        Payment Details
                    </div>
                    <div>
                        <span className="x-label">Card Number: </span>
                        <span className="x-value">5890 - 6858 - 6332 - 9843</span>
                    </div>
                    <div>
                        <span className="x-label">Card Name: </span>
                        <span className="x-value">Regina Cooper</span>
                    </div>
                    <div>
                        <span className="x-label">Card Expiry: </span>
                        <span className="x-value">12/2013</span>
                    </div>
                </div>


                <div className="x-modal-footer">
                    <Button color="secondary" onClick={toggle} className="x-white-btn"  onClick={()=>setStep(2)}>Previous</Button>
                    <Button color="primary" onClick={toggle} className="x-purple-btn">Submit</Button>
                </div>
            </ModalBody>
        </Modal>
    );
}
