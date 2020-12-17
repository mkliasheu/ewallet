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