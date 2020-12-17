import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeWithdrawDialog, resetApiError} from "../redux/actions";
import {postWithdrawalTransfer} from "../redux/apiActions";
import {getApiError, getSelectedWalletId, isWithdrawDialogOpened} from "../redux/selectors";

export default function WithdrawDialog() {

    const dispatch = useDispatch();
    const selectedWalletId = useSelector(getSelectedWalletId);
    const apiError = useSelector(getApiError);
    const isDialogOpened = useSelector((state) => isWithdrawDialogOpened(state, selectedWalletId));

    const withdrawAmountInputRef = useRef();

    const handleClose = () => {
        dispatch(resetApiError());
        dispatch(closeWithdrawDialog());
    };

    const handleConfirm = () => {
        dispatch(postWithdrawalTransfer(selectedWalletId, withdrawAmountInputRef.current.value));
        dispatch(resetApiError());
    }

    return (
        <div>
            <Dialog open={isDialogOpened} onClose={handleClose} aria-labelledby="withdraw-dialog-title">
                <DialogTitle id="withdraw-dialog-title">Withdraw money</DialogTitle>
                <DialogContent>
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
                        inputRef={withdrawAmountInputRef}
                    />
                    {apiError != null ? <span className="error">{apiError}</span> : ''}
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