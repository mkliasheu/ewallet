import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {ExpandMore} from "@material-ui/icons";
import TransactionContainer from "./TransactionContainer";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {useDispatch} from "react-redux";
import {openDepositDialog, openP2PTransferDialog, openWithdrawDialog} from "../redux/actions";

export default function Wallet({id, name, balance, currency}) {

    const dispatch = useDispatch();
    const handleOpenDepositDialog = () => {
        dispatch(openDepositDialog(id));
    };

    const handleOpenWithdrawDialog = () => {
        dispatch(openWithdrawDialog(id));
    };

    const handleOpenP2PTransferDialog = () => {
        dispatch(openP2PTransferDialog(id));
    }

    return (
        <div className="wallet">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h2 className='wallet-title'>
                        <span>{name}</span> <span className='float-right'>{balance} {currency}</span>
                    </h2>
                </AccordionSummary>
                <AccordionDetails className="wallet-details-container">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={handleOpenDepositDialog}>Deposit</Button>
                        <Button onClick={handleOpenWithdrawDialog}>Withdraw</Button>
                        <Button onClick={handleOpenP2PTransferDialog}>P2P transfer</Button>
                    </ButtonGroup>
                    <TransactionContainer walletId={id}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

Wallet.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    balance: PropTypes.number,
    currency: PropTypes.string
}