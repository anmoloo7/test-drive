import React, { useState, Fragment } from "react";
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import classnames from 'classnames';
import "./index.scoped.css";
import { UserTable, Modals } from "../../components";

export default function Home(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [showDetails, setShowDetails] = useState(false);
    const [showPaymentWizard, setShowPaymentWizard] = useState(true);
    return (
        <Fragment>
        <Modals.DetailsPage isOpen={showDetails} toggle={() => setShowDetails((prev) => !prev)} />
            <Modals.PaymentWizard isOpen={showPaymentWizard} toggle={() => setShowPaymentWizard((prev) => !prev)} />

            <Container className="mt-5" style={{ paddingBottom: 150 }}>
                <div className="x-table-heading">TABLE HEADING</div>
                <div className="mt-3">
                    <div className="x-tab-options">
                        <span className="">
                            <Nav tabs className="x-tab-heading-container">
                                <NavItem>
                                    <NavLink
                                        className={classnames("x-tab-heading", { active: activeTab === '1' })}
                                        onClick={() => { setActiveTab('1'); }}
                                    >
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames("x-tab-heading", { active: activeTab === '2' })}
                                        onClick={() => { setActiveTab('2'); }}
                                    >
                                        Paid
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames("x-tab-heading", { active: activeTab === '3' })}
                                        onClick={() => { setActiveTab('3'); }}
                                    >
                                        Unpaid
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames("x-tab-heading", { active: activeTab === '4' })}
                                        onClick={() => { setActiveTab('4'); }}
                                    >
                                        Overdue
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </span>
                        <span className="x-payable-amount-text">Total payable amount: <span className="amount">$900.00</span><span className="currency"> USD</span></span>
                    </div>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="mt-3">
                                <UserTable />
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            2
                        </TabPane>
                        <TabPane tabId="3">
                            3
                        </TabPane>
                        <TabPane tabId="4">
                            4
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </Fragment>
    );
}