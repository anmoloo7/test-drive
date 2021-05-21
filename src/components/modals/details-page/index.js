import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Config from "../../../config";
import "./index.scoped.css";
import "./index.css";
import _ from "lodash";
import classnames from "classnames";

export default function DetailsPage({ isOpen, toggle,data, ...props }) {

    return (
        <Modal isOpen={isOpen} toggle={toggle} className={"x-profile-modal"} size="md">
            <ModalHeader toggle={toggle} className="x-modal-header" >Detials page</ModalHeader>
            <ModalBody>
                <div>
                    <img src={require("./user.jpg").default} className="x-avatar-image" />
                </div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>FIRST NAME</Label>
                            <Input type="text" name="first_name" placeholder="" disabled value={data.first_name} />
                        </FormGroup></Col>
                    <Col>
                        <FormGroup>
                            <Label>LAST NAME</Label>
                            <Input type="text" name="last_name" placeholder="" disabled value={data.last_name} />
                        </FormGroup></Col>
                </Row>

                <FormGroup>
                    <Label>EMAIL</Label>
                    <Input type="text" name="email" placeholder="" disabled value={data.email} />
                </FormGroup>
                <Row className="mb-4">
                    <Col>
                        <FormGroup>
                            <Label>ACTIVITY</Label>
                            <div className="tag green-tag">
                                Last login: {data.last_login}
                            </div>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>PAYMENT STATUS</Label>
                            <div className="tag red-tag" >
                                {_.capitalize(data.payment_status)}
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
}
