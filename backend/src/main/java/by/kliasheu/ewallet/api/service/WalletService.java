package by.kliasheu.ewallet.api.service;

import by.kliasheu.ewallet.api.dto.wallet.NewWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.UpdateWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.WalletDto;
import by.kliasheu.ewallet.api.model.Wallet;

import java.util.List;

public interface WalletService {
    List<WalletDto> findAll();

    WalletDto findById(long walletId);

    WalletDto create(NewWalletRequest newWalletRequest);

    WalletDto update(UpdateWalletRequest updateWalletRequest, long walletId);

    WalletDto update(Wallet wallet);

    Wallet findForUpdate(long walletId);

}
