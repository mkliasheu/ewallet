import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import moment from 'moment';

export default function Transaction({id, type, amount, createdAt}) {

    const getFormattedDate = (dateString) => {
        const date = moment(dateString);
        return date.format('D MMMM, HH:mm');
    };

    return (
        <div className={cx("transaction", "transaction-" + type.toLowerCase())}>
            <span className='transaction-date'>{createdAt == null ? '' : getFormattedDate(createdAt)}</span>
            <span className='transaction-amount float-right'> {type === 'DEBIT' ? '+' : '-'}{amount}</span>
        </div>
    );
}

Transaction.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.string
}