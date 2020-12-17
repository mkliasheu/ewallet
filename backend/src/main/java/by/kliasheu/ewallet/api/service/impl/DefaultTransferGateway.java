package by.kliasheu.ewallet.api.service.impl;

import by.kliasheu.ewallet.api.dto.transaction.NewP2PTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.NewTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.TransactionDto;
import by.kliasheu.ewallet.api.exception.NotEnoughFundsException;
import by.kliasheu.ewallet.api.model.TransactionType;
import by.kliasheu.ewallet.api.model.Wallet;
import by.kliasheu.ewallet.api.service.CurrencyConverter;
import by.kliasheu.ewallet.api.service.TransactionService;
import by.kliasheu.ewallet.api.service.TransferGateway;
import by.kliasheu.ewallet.api.service.WalletService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DefaultTransferGateway implements TransferGateway {

    @Autowired
    WalletService walletService;

    @Autowired
    TransactionService transactionService;

    @Autowired
    CurrencyConverter currencyConverter;

    @Autowired
    TransferGateway self;

    @Override
    @Transactional
    public TransactionDto withdraw(NewTransactionRequest newTransactionRequest) {
        final Wallet wallet = walletService.findForUpdate(newTransactionRequest.getWalletId());
        final BigDecimal amount = newTransactionRequest.getAmount();
        return self.withdraw(wallet, amount);
    }

    @Override
    @Transactional
    public TransactionDto withdraw(Wallet wallet, BigDecimal amount) {
        if (wallet.getBalance().compareTo(amount) < 0)
            throw new NotEnoughFundsException("Not enough funds on wallet " + wallet.getName() + " to perform withdrawal transaction");
        wallet.setBalance(wallet.getBalance().subtract(amount));
        walletService.update(wallet);
        return transactionService.createTransaction(wallet, amount, TransactionType.CREDIT);
    }

    @Override
    @Transactional
    public TransactionDto deposit(NewTransactionRequest newTransactionRequest) {
        final Wallet wallet = walletService.findForUpdate(newTransactionRequest.getWalletId());
        final BigDecimal amount = newTransactionRequest.getAmount();
        return self.deposit(wallet, amount);
    }

    @Override
    @Transactional
    public TransactionDto deposit(Wallet wallet, BigDecimal amount) {
        wallet.setBalance(wallet.getBalance().add(amount));
        walletService.update(wallet);
        return transactionService.createTransaction(wallet, amount, TransactionType.DEBIT);
    }

    @Override
    @Transactional
    public Pair<TransactionDto, TransactionDto> transfer(NewP2PTransactionRequest newP2PTransactionRequest) {

        final long walletIdFrom = newP2PTransactionRequest.getWalletIdFrom();
        final Wallet walletFrom = walletService.findForUpdate(walletIdFrom);

        final long walletIdTo = newP2PTransactionRequest.getWalletIdTo();
        final Wallet walletTo = walletService.findForUpdate(walletIdTo);

        final BigDecimal sentAmount = newP2PTransactionRequest.getAmount();

        if (walletFrom.getCurrency().equals(walletTo.getCurrency())) {
            return Pair.of(self.withdraw(walletFrom, sentAmount), self.deposit(walletTo, sentAmount));
        } else {
            BigDecimal receivedAmount = currencyConverter.convert(walletFrom.getCurrency(), walletTo.getCurrency(), sentAmount);
            return Pair.of(self.withdraw(walletFrom, sentAmount), self.deposit(walletTo, receivedAmount));
        }
    }

    @Override
    public List<TransactionDto> findByWalletId(long walletId) {
        return transactionService.findByWalletId(walletId);
    }
}
