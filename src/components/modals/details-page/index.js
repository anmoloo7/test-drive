import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Config from "../../../config";
import "./index.scoped.css";
import "./index.css";

export default function DetailsPage({ isOpen, toggle, ...props }) {

    return (
        <Modal isOpen={isOpen} toggle={toggle} className={"x-modal"}>
            <ModalHeader toggle={toggle} className="x-modal-header" >Detials page</ModalHeader>
            <ModalBody>
                <div>
                    <img src={require("./user.jpg").default} className="x-avatar-image" />
                </div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>FIRST NAME</Label>
                            <Input type="text" name="first_name" placeholder="" disabled value="Regina" />
                        </FormGroup></Col>
                    <Col>
                        <FormGroup>
                            <Label>LAST NAME</Label>
                            <Input type="text" name="last_name" placeholder="" disabled value="Cooper" />
                        </FormGroup></Col>
                </Row>

                <FormGroup>
                    <Label>EMAIL</Label>
                    <Input type="text" name="email" placeholder="" disabled value="reginacooper@mail.com" />
                </FormGroup>
                <Row className="mb-4">
                    <Col>
                        <FormGroup>
                            <Label>ACTIVITY</Label>
                            <div className="tag green-tag">
                                Last login: 14/APR/2020
                            </div>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>PAYMENT STATUS</Label>
                            <div className="tag red-tag">
                                Payed
                            </div>
                        </FormGroup>
                    </Col>
                </Row>=
            </ModalBody>
        </Modal>
    );
}
