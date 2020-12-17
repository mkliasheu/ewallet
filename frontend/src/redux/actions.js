export const FETCH_WALLETS_PENDING = "FETCH_WALLETS_PENDING";
export const FETCH_WALLETS_SUCCESS = "FETCH_WALLETS_SUCCESS";
export const CREATE_WALLET = "CREATE_WALLET";
export const FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS";
export const SELECT_CURRENCY = "SELECT_CURRENCY";
export const OPEN_ADD_WALLET_DIALOG = "OPEN_ADD_WALLET_DIALOG";
export const CLOSE_ADD_WALLET_DIALOG = "CLOSE_ADD_WALLET_DIALOG";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS";
export const OPEN_DEPOSIT_DIALOG = "OPEN_DEPOSIT_DIALOG";
export const CLOSE_DEPOSIT_DIALOG = "CLOSE_DEPOSIT_DIALOG";
export const OPEN_WITHDRAW_DIALOG = "OPEN_WITHDRAW_DIALOG";
export const CLOSE_WITHDRAW_DIALOG = "CLOSE_WITHDRAW_DIALOG";
export const OPEN_P2P_TRANSFER_DIALOG = "OPEN_P2P_TRANSFER_DIALOG";
export const CLOSE_P2P_TRANSFER_DIALOG = "CLOSE_P2P_TRANSFER_DIALOG";
export const DEPOSIT_MONEY_SUCCESS = "DEPOSIT_MONEY_SUCCESS";
export const DEPOSIT_MONEY_ERROR = "DEPOSIT_MONEY_ERROR";
export const WITHDRAW_MONEY_SUCCESS = "WITHDRAW_MONEY_SUCCESS";
export const WITHDRAW_MONEY_ERROR = "WITHDRAW_MONEY_ERROR";
export const P2P_TRANSFER_SUCCESS = "P2P_TRANSFER_SUCCESS";
export const P2P_TRANSFER_ERROR = "P2P_TRANSFER_ERROR";
export const RESET_API_ERROR = "RESET_API_ERROR";
export const SELECT_RECEIVER_WALLET = "SELECT_RECEIVER_WALLET";

export function fetchWalletsPending() {
    return {
        type: FETCH_WALLETS_PENDING
    }
}

export function fetchWalletsSuccess(wallets) {
    return {
        type: FETCH_WALLETS_SUCCESS,
        wallets: wallets
    }
}

export function createWallet() {
    return {
        type: CREATE_WALLET
    }
}

export function fetchCurrenciesSuccess(currencies) {
    return {
        type: FETCH_CURRENCIES_SUCCESS,
        currencies: currencies
    }
}

export function selectCurrency(currency) {
    return {
        type: SELECT_CURRENCY,
        currency: currency
    }
}

export function openAddWalletDialog() {
    return {
        type: OPEN_ADD_WALLET_DIALOG
    }
}

export function closeAddWalletDialog() {
    return {
        type: CLOSE_ADD_WALLET_DIALOG
    }
}

export function fetchTransactionsSuccess(walletId, transactions) {
    return {
        type: FETCH_TRANSACTIONS_SUCCESS,
        walletId: walletId,
        transactions: transactions
    }
}

export function openDepositDialog(selectedWalletId) {
    return {
        type: OPEN_DEPOSIT_DIALOG,
        selectedWalletId: selectedWalletId
    }
}

export function closeDepositDialog() {
    return {
        type: CLOSE_DEPOSIT_DIALOG
    }
}

export function openWithdrawDialog(selectedWalletId) {
    return {
        type: OPEN_WITHDRAW_DIALOG,
        selectedWalletId: selectedWalletId
    }
}

export function closeWithdrawDialog() {
    return {
        type: CLOSE_WITHDRAW_DIALOG
    }
}

export function openP2PTransferDialog(selectedWalletId) {
    return {
        type: OPEN_P2P_TRANSFER_DIALOG,
        selectedWalletId: selectedWalletId
    }
}

export function closeP2PTransferDialog() {
    return {
        type: CLOSE_P2P_TRANSFER_DIALOG
    }
}

export function depositMoneySuccess() {
    return {
        type: DEPOSIT_MONEY_SUCCESS
    }
}

export function depositMoneyError(error) {
    return {
        type: DEPOSIT_MONEY_ERROR,
        error: error
    }
}

export function withdrawMoneySuccess() {
    return {
        type: WITHDRAW_MONEY_SUCCESS
    }
}

export function withdrawMoneyError(error) {
    return {
        type: WITHDRAW_MONEY_ERROR,
        error: error
    }
}

export function p2pTransferSuccess() {
    return {
        type: P2P_TRANSFER_SUCCESS
    }
}

export function p2pTransferError(error) {
    return {
        type: P2P_TRANSFER_ERROR,
        error: error
    }
}

export function resetApiError() {
    return {
        type: RESET_API_ERROR
    }
}

export function selectReceiverWallet(wallet) {
    return {
        type: SELECT_RECEIVER_WALLET,
        wallet: wallet
    }
}