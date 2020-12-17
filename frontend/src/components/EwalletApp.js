import React from "react";
import Container from "@material-ui/core/Container";
import WalletContainer from "./WalletContainer";
import AddWalletDialog from "./AddWalletDialog";

export default function EwalletApp() {
    return (
        <div className="ewallet-app">
            <Container>
                <h1>Ewallet App</h1>
                <AddWalletDialog/>
                <WalletContainer/>
            </Container>
        </div>
    );
}