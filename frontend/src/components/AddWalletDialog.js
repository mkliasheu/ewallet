import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useEffect, useRef} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencies, getSelectedCurrency, isAddWalletDialogOpened} from "../redux/reducer";
import {closeAddWalletDialog, openAddWalletDialog, selectCurrency} from "../redux/actions";
import {fetchCurrencies, postWallet} from "../redux/api";

export default function AddWalletDialog() {

    const dispatch = useDispatch();
    const availableCurrencies = useSelector(getCurrencies);
    const selectedCurrency = useSelector(getSelectedCurrency)
    const isDialogOpened = useSelector(isAddWalletDialogOpened)

    const walletNameInputRef = useRef();

    const handleOpen = () => {
        dispatch(openAddWalletDialog());
    };

    const handleClose = () => {
        dispatch(closeAddWalletDialog());
    };

    const handleChange = (event) => {
        dispatch(selectCurrency(event.target.value));
    };

    const handleConfirm = () => {
        saveWallet();
        handleClose();
    };

    const saveWallet = () => {
        dispatch(postWallet(walletNameInputRef.current.value, selectedCurrency))
    }

    useEffect(() => {
        dispatch(fetchCurrencies())
    }, [])


    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add wallet
            </Button>
            <Dialog open={isDialogOpened} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add wallet</DialogTitle>
                <DialogContent>
                    <FormControl className="currency-selector">
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCurrency}
                            onChange={handleChange}
                        >
                            {/*TODO extract to another component*/}
                            {availableCurrencies.map((currency) =>
                                <MenuItem key={currency} value={currency}>
                                    {currency}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        inputRef={walletNameInputRef}
                    />
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