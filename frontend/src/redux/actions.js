import {
    CLOSE_ADD_WALLET_DIALOG,
    CLOSE_DEPOSIT_DIALOG,
    CLOSE_P2P_TRANSFER_DIALOG,
    CLOSE_WITHDRAW_DIALOG,
    CREATE_WALLET,
    DEPOSIT_MONEY_ERROR,
    DEPOSIT_MONEY_SUCCESS,
    FETCH_CURRENCIES_SUCCESS,
    FETCH_TRANSACTIONS_SUCCESS,
    FETCH_WALLETS_PENDING,
    FETCH_WALLETS_SUCCESS,
    OPEN_ADD_WALLET_DIALOG,
    OPEN_DEPOSIT_DIALOG,
    OPEN_P2P_TRANSFER_DIALOG,
    OPEN_WITHDRAW_DIALOG,
    P2P_TRANSFER_ERROR,
    P2P_TRANSFER_SUCCESS,
    RESET_API_ERROR,
    SELECT_CURRENCY,
    SELECT_RECEIVER_WALLET,
    WITHDRAW_MONEY_ERROR,
    WITHDRAW_MONEY_SUCCESS
} from "./actionTypes";

export const fetchWalletsPending = () => ({
    type: FETCH_WALLETS_PENDING
})

export const fetchWalletsSuccess = (wallets) => ({
    type: FETCH_WALLETS_SUCCESS,
    wallets: wallets
})


export const createWallet = () => ({
    type: CREATE_WALLET
})

export const fetchCurrenciesSuccess = (currencies) => ({
    type: FETCH_CURRENCIES_SUCCESS,
    currencies: currencies
})

export const selectCurrency = (currency) => ({
    type: SELECT_CURRENCY,
    currency: currency
})

export const openAddWalletDialog = () => ({
    type: OPEN_ADD_WALLET_DIALOG
})

export const closeAddWalletDialog = () => ({
    type: CLOSE_ADD_WALLET_DIALOG
})

export const fetchTransactionsSuccess = (walletId, transactions) => ({
    type: FETCH_TRANSACTIONS_SUCCESS,
    walletId: walletId,
    transactions: transactions
})

export const openDepositDialog = (selectedWalletId) => ({
    type: OPEN_DEPOSIT_DIALOG,
    selectedWalletId: selectedWalletId
})

export const closeDepositDialog = () => ({
    type: CLOSE_DEPOSIT_DIALOG
})

export const openWithdrawDialog = (selectedWalletId) => ({
    type: OPEN_WITHDRAW_DIALOG,
    selectedWalletId: selectedWalletId
})

export const closeWithdrawDialog = () => ({
    type: CLOSE_WITHDRAW_DIALOG
});

export const openP2PTransferDialog = selectedWalletId => ({
    type: OPEN_P2P_TRANSFER_DIALOG,
    selectedWalletId: selectedWalletId
});

export const closeP2PTransferDialog = () => ({
    type: CLOSE_P2P_TRANSFER_DIALOG
});

export const depositMoneySuccess = () => ({
    type: DEPOSIT_MONEY_SUCCESS
});

export const depositMoneyError = error => ({
    type: DEPOSIT_MONEY_ERROR,
    error: error
});

export const withdrawMoneySuccess = () => ({
    type: WITHDRAW_MONEY_SUCCESS
});

export const withdrawMoneyError = error => ({
    type: WITHDRAW_MONEY_ERROR,
    error: error
});

export const p2pTransferSuccess = () => ({
    type: P2P_TRANSFER_SUCCESS
});

export const p2pTransferError = error => ({
    type: P2P_TRANSFER_ERROR,
    error: error
});

export const resetApiError = () => ({
    type: RESET_API_ERROR
});

export const selectReceiverWallet = wallet => ({
    type: SELECT_RECEIVER_WALLET,
    wallet: wallet
});