import React, {useEffect} from "react";
import List from "@material-ui/core/List";
import Wallet from "./Wallet";
import ListItem from "@material-ui/core/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchWallets} from "../redux/apiActions";
import DepositDialog from "./DepositDialog";
import WithdrawDialog from "./WithdrawDialog";
import P2PTransferDialog from "./P2PTransferDialog";
import {getWallets, getWalletsPending} from "../redux/selectors";

export default function WalletContainer() {
    const dispatch = useDispatch();
    const wallets = useSelector(getWallets);
    const pending = useSelector(getWalletsPending)

    useEffect(() => {
        dispatch(fetchWallets())
    }, [])

    if (!pending) {
        if (wallets == null || wallets.length === 0) {
            return <h2>There is no wallets yet. Click 'add wallet' button to add one</h2>
        }

        return (
            <div>
                <P2PTransferDialog/>
                <DepositDialog/>
                <WithdrawDialog/>
                <List className="wallets">
                    {wallets.map((wallet) =>
                        <ListItem key={wallet.id}>
                            <Wallet id={wallet.id} name={wallet.name} balance={wallet.balance}
                                    currency={wallet.currency}/>
                        </ListItem>
                    )}
                </List>
            </div>
        );
    }
    return <h1>Loading</h1>;
}