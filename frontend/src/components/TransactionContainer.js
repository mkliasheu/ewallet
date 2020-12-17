import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {fetchTransactions} from "../redux/apiActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Transaction from "./Transaction";
import {getTransactions} from "../redux/selectors";

export default function TransactionContainer({walletId}) {

    const dispatch = useDispatch();
    const transactions = useSelector((state) => getTransactions(state, walletId));

    useEffect(() => {
        dispatch(fetchTransactions(walletId));
    }, [])

    if (transactions == null || transactions.length === 0) {
        return <h4>No transactions yet</h4>
    } else
        return (
            <List className="transactions">
                {transactions.map((transaction) =>
                    <ListItem key={transaction.id}>
                        <Transaction id={transaction.id} type={transaction.type} amount={transaction.amount}
                                     createdAt={transaction.createdAt}/>
                    </ListItem>
                )}
            </List>
        );
}

TransactionContainer.propTypes = {
    walletId: PropTypes.number
}
