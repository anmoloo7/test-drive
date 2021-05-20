import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Config from "../../../../config";
import "./index.scoped.css";
import "./index.css";

export default function Submission({ isOpen, toggle, ...props }) {

    return (
        <Modal isOpen={isOpen} toggle={toggle} className={"x-modal"}>
            <ModalHeader className="x-modal-header" ><span className="x-modal-header-text">Make Payment</span></ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Tax Excluded Price</Label>
                    <Input type="text" name="email" placeholder="" value="100" />
                </FormGroup>
                <FormGroup>
                    <Label>Tax Included Price</Label>
                    <Input type="text" name="email" placeholder="" value="100" />
                </FormGroup>
                <FormGroup>
                    <Label className="w-100">Tax Rule <span className="x-new-text">Create New Tax</span></Label>
                    <Input type="text" name="email" placeholder="" value="reginacooper@mail.com" />
                </FormGroup>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Unit Price</Label>
                            <Input type="text" name="first_name" placeholder="" value="100" />
                        </FormGroup></Col>
                    <Col>
                        <FormGroup>
                            <Label>Per</Label>
                            <Input type="number" name="last_name" placeholder="" value="1" />
                        </FormGroup></Col>
                </Row>
                <div className="x-modal-footer">
                    <Button color="primary" onClick={toggle} className="x-purple-btn">Next</Button>
                    <Button color="secondary" onClick={toggle} className="x-white-btn">Cancel</Button>
                </div>
            </ModalBody>
        </Modal>
    );
}
