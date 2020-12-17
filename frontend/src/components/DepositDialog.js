import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeDepositDialog} from "../redux/actions";
import {postDepositTransfer} from "../redux/api";
import {getApiError, getSelectedWalletId, isDepositDialogOpened} from "../redux/selectors";

export default function DepositDialog() {

    const dispatch = useDispatch();
    const selectedWalletId = useSelector(getSelectedWalletId);
    const apiError = useSelector(getApiError);
    const isDialogOpened = useSelector((state) => isDepositDialogOpened(state, selectedWalletId));

    const depositAmountInputRef = useRef();

    const handleClose = () => {
        // dispatch(resetApiError());
        dispatch(closeDepositDialog());
    };

    const handleConfirm = () => {
        dispatch(postDepositTransfer(selectedWalletId, depositAmountInputRef.current.value));
        if (apiError == null) {
            handleClose()
        }
    }

    return (
        <div>
            <Dialog open={isDialogOpened} onClose={handleClose} aria-labelledby="deposit-dialog-title">
                <DialogTitle id="deposit-dialog-title">Deposit money</DialogTitle>
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
                        inputRef={depositAmountInputRef}
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