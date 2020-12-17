import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeP2PTransferDialog, selectReceiverWallet} from "../redux/actions";
import {postP2PTransfer} from "../redux/api";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {
    getApiError,
    getSelectedReceiverWallet,
    getSelectedWalletId,
    getWallets,
    isP2PDialogOpened
} from "../redux/selectors";

export default function P2PTransferDialog() {

    const dispatch = useDispatch();
    const selectedWalletId = useSelector(getSelectedWalletId);
    const apiError = useSelector(getApiError);
    const isDialogOpened = useSelector((state) => isP2PDialogOpened(state, selectedWalletId));
    const availableWallets = useSelector(getWallets);
    const receiverWallet = useSelector(getSelectedReceiverWallet)

    const transferAmountInputRef = useRef();

    const handleClose = () => {
        // dispatch(resetApiError());
        dispatch(closeP2PTransferDialog());
    };

    const handleConfirm = () => {
        dispatch(postP2PTransfer(selectedWalletId, receiverWallet, transferAmountInputRef.current.value));
        if (apiError == null) {
            handleClose();
        }
    }

    const handleReceiverWalletChange = (event) => {
        dispatch(selectReceiverWallet(event.target.value));
    };

    useEffect(() => {
        if (availableWallets != null && availableWallets.length > 0) {
            dispatch(selectReceiverWallet(availableWallets[0].id))
        }
    }, [])

    return (
        <div>
            <Dialog open={isDialogOpened} onClose={handleClose} aria-labelledby="p2ptransfer-dialog-title">
                <DialogTitle id="deposit-dialog-title">Transfer money</DialogTitle>
                <DialogContent>
                    <FormControl className="wallet-selector">
                        <InputLabel id="demo-simple-select-label">Receiver Wallet</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={receiverWallet}
                            onChange={handleReceiverWalletChange}
                        >
                            {/*TODO extract to another component*/}
                            {availableWallets.map((wallet) =>
                                <MenuItem key={wallet.id} value={wallet.id}>
                                    {wallet.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        autoFocus
                        type="number"
                        InputProps={{
                            inputProps: {
                                min: 0.001
                            }
                        }}
                        margin="dense"
                        id="name"
                        label="Amount"
                        fullWidth
                        inputRef={transferAmountInputRef}
                    />
                    {/*{apiError != null ? <span className="error">{apiError}</span> : ''}*/}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}