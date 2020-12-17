import {
    CLOSE_ADD_WALLET_DIALOG,
    CLOSE_DEPOSIT_DIALOG, CLOSE_P2P_TRANSFER_DIALOG,
    CLOSE_WITHDRAW_DIALOG,
    CREATE_WALLET,
    DEPOSIT_MONEY_ERROR,
    DEPOSIT_MONEY_SUCCESS,
    FETCH_CURRENCIES_SUCCESS,
    FETCH_TRANSACTIONS_SUCCESS,
    FETCH_WALLETS_PENDING,
    FETCH_WALLETS_SUCCESS,
    OPEN_ADD_WALLET_DIALOG,
    OPEN_DEPOSIT_DIALOG, OPEN_P2P_TRANSFER_DIALOG,
    OPEN_WITHDRAW_DIALOG, P2P_TRANSFER_ERROR,
    P2P_TRANSFER_SUCCESS,
    RESET_API_ERROR,
    SELECT_CURRENCY, SELECT_RECEIVER_WALLET,
    WITHDRAW_MONEY_ERROR,
    WITHDRAW_MONEY_SUCCESS
} from './actions';

const initialState = {
    pending: false,
    apiError: null,
    wallets: [],
    availableCurrencies: [],
    selectedCurrency: '',
    addWalletDialogOpened: false,
    depositDialogOpened: false,
    withdrawDialogOpened: false,
    p2pTransferDialogOpened: false,
    selectedWalletId: '',
    selectedReceiverWalletId: ''
}

export function walletsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WALLETS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_WALLETS_SUCCESS:
            return {
                ...state,
                pending: false,
                wallets: action.wallets
            }
        case CREATE_WALLET:
            return state;
        case FETCH_CURRENCIES_SUCCESS:
            return {
                ...state,
                availableCurrencies: action.currencies,
                selectedCurrency: action.currencies[0]
            }
        case SELECT_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.currency
            }
        case OPEN_ADD_WALLET_DIALOG:
            return {
                ...state,
                addWalletDialogOpened: true
            }
        case CLOSE_ADD_WALLET_DIALOG:
            return {
                ...state,
                addWalletDialogOpened: false
            }
        case OPEN_DEPOSIT_DIALOG:
            return {
                ...state,
                depositDialogOpened: true,
                selectedWalletId: action.selectedWalletId
            }
        case CLOSE_DEPOSIT_DIALOG:
            return {
                ...state,
                depositDialogOpened: false,
                selectedWalletId: null
            }
        case OPEN_WITHDRAW_DIALOG:
            return {
                ...state,
                withdrawDialogOpened: true,
                selectedWalletId: action.selectedWalletId
            }
        case CLOSE_WITHDRAW_DIALOG:
            return {
                ...state,
                withdrawDialogOpened: false,
                selectedWalletId: null
            }
        case FETCH_TRANSACTIONS_SUCCESS:
            //TODO debug one-liner
            // return {
            //     ...state,
            //     wallets: state.wallets.map(
            //         (wallet) => wallet.id === action.walletId ? {...wallet, transactions: action.transactions} : wallet
            //     )
            // }
            const newState = { ...state };
            const wallet = newState.wallets.find(wallet => wallet.id === action.walletId);
            wallet.transactions = action.transactions;
            return newState;
        case DEPOSIT_MONEY_SUCCESS:
            return state
        case DEPOSIT_MONEY_ERROR:
            return {
                ...state,
                apiError: action.error
            }
        case WITHDRAW_MONEY_SUCCESS:
            return state
        case WITHDRAW_MONEY_ERROR:
            return {
                ...state,
                apiError: action.error
            }
        case P2P_TRANSFER_SUCCESS:
            return state
        case P2P_TRANSFER_ERROR:
            return {
                ...state,
                apiError: action.error
            }
        case RESET_API_ERROR:
            return {
                ...state,
                apiError: null
            }
        case SELECT_RECEIVER_WALLET:
            return {
                ...state,
                selectedReceiverWalletId: action.wallet
            }
        case OPEN_P2P_TRANSFER_DIALOG:
            return {
                ...state,
                p2pTransferDialogOpened: true,
                selectedWalletId: action.selectedWalletId
            }
        case CLOSE_P2P_TRANSFER_DIALOG:
            return {
                ...state,
                p2pTransferDialogOpened: false,
                selectedWalletId: null
            }
        default:
            return state;
    }
}

export const getWallets = state => state.wallets;
export const getWalletsPending = state => state.pending;
export const getCurrencies = state => state.availableCurrencies;
export const getSelectedCurrency = state => state.selectedCurrency;
export const isAddWalletDialogOpened = state => state.addWalletDialogOpened;
export const getSelectedWalletId = state => state.selectedWalletId;
export const isDepositDialogOpened = (state, walletId) => state.depositDialogOpened && state.selectedWalletId === walletId;
export const isWithdrawDialogOpened = (state, walletId) => state.withdrawDialogOpened && state.selectedWalletId === walletId;
export const isP2PDialogOpened = (state, walletId) => state.p2pTransferDialogOpened && state.selectedWalletId === walletId;
export const getTransactions = (state, walletId) => state.wallets.find(wallet => wallet.id === walletId).transactions;
export const getApiError = state => state.apiError;
export const getSelectedReceiverWallet = state => state.selectedReceiverWalletId;
