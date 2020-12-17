import {
    closeDepositDialog,
    closeP2PTransferDialog,
    closeWithdrawDialog,
    createWallet, depositMoneyError,
    depositMoneySuccess,
    fetchCurrenciesSuccess,
    fetchTransactionsSuccess,
    fetchWalletsPending,
    fetchWalletsSuccess, p2pTransferError, withdrawMoneyError,
    withdrawMoneySuccess
} from "./actions";
import axios from "axios";

export function fetchWallets() {
    return dispatch => {
        dispatch(fetchWalletsPending());
        axios.get('http://localhost:8080/wallets')
            .then(res => {
                dispatch(fetchWalletsSuccess(res.data))
            })
            //TODO
            .catch(reason => {
            })
    }
}

export function postWallet(walletName, currency) {
    return dispatch => {
        axios.post('http://localhost:8080/wallets', {
            name: walletName,
            currency: currency
        })
            .then(dispatch(createWallet()))
            .then(res => {
                dispatch(fetchWallets())
            })
            //TODO
            .catch(reason => {
            })
    }
}

export function fetchCurrencies() {
    return dispatch => {
        axios.get('http://localhost:8080/currencies')
            .then(res => {
                dispatch(fetchCurrenciesSuccess(res.data))
            })
            //TODO
            .catch(reason => {
            })
    }
}

export function fetchTransactions(walletId) {
    return dispatch => {
        axios.get('http://localhost:8080/transfers', {
            params: {
                walletId: walletId
            }
        })
            .then(res => {
                dispatch(fetchTransactionsSuccess(walletId, res.data))
            })
    }
}

export function postDepositTransfer(walletId, amount) {
    return dispatch => {
        axios.post('http://localhost:8080/transfers/deposit', {
            walletId: walletId,
            amount: amount
        })
            .then(dispatch(depositMoneySuccess()))
            .then(res => {
                //TODO update single wallet
                dispatch(fetchWallets())
                dispatch(closeDepositDialog())
            })
            //TODO
            .catch(error => {
                dispatch(depositMoneyError(error.response.data.message))
            })
    }
}

export function postWithdrawalTransfer(walletId, amount) {
    return dispatch => {
        axios.post('http://localhost:8080/transfers/withdrawal', {
            walletId: walletId,
            amount: amount
        })
            .then(dispatch(withdrawMoneySuccess()))
            .then(res => {
                //TODO update single wallet
                dispatch(fetchWallets())
                dispatch(closeWithdrawDialog())
            })
            //TODO
            .catch(error => {
                dispatch(withdrawMoneyError(error.response.data.message))
            })
    }
}

export function postP2PTransfer(walletIdFrom, walletIdTo, amount) {
    return dispatch => {
        axios.post('http://localhost:8080/transfers/p2p', {
            walletIdFrom: walletIdFrom,
            walletIdTo: walletIdTo,
            amount: amount
        })
            .then(dispatch(withdrawMoneySuccess()))
            .then(res => {
                //TODO update single wallet
                dispatch(fetchWallets())
                dispatch(closeP2PTransferDialog())
            })
            //TODO
            .catch(error => {
                dispatch(p2pTransferError(error.response.data.message))
            })
    }
}