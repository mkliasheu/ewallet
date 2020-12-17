package by.kliasheu.ewallet.api.service;

import by.kliasheu.ewallet.api.dto.transaction.NewP2PTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.NewTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.TransactionDto;
import by.kliasheu.ewallet.api.model.Wallet;
import org.springframework.data.util.Pair;

import java.math.BigDecimal;
import java.util.List;

public interface TransferGateway {
    TransactionDto withdraw(NewTransactionRequest newTransactionRequest);

    TransactionDto withdraw(Wallet wallet, BigDecimal amount);

    TransactionDto deposit(NewTransactionRequest newTransactionRequest);

    TransactionDto deposit(Wallet wallet, BigDecimal amount);

    Pair<TransactionDto, TransactionDto> transfer(NewP2PTransactionRequest newP2PTransactionRequest);

    List<TransactionDto> findByWalletId(long walletId);
}
