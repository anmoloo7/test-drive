import React, { Fragment, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Config from "../../../config";
import "./index.scoped.css";
import "./index.css";
import Payment from "./payment";
import CardInfo from "./cardInfo";
import Receipt from "./cardInfo";

export default function PaymentWizard({ isOpen, toggle, ...props }) {
    const [step, setStep] = useState(2);

    useEffect(() => {
        if (isOpen) {
            setStep(2);
        }
    }, [isOpen]);

    return (
        <Fragment>
            {step === 1 &&
                <Payment isOpen={isOpen} toggle={toggle} stepState={[step, setStep]} />
            }
            {step === 2 &&
                <CardInfo isOpen={isOpen} toggle={toggle} stepState={[step, setStep]} />
            }
            {step === 3 &&
                <Receipt isOpen={isOpen} toggle={toggle} stepState={[step, setStep]} />
            }
        </Fragment>
    );
}
