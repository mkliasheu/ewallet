package by.kliasheu.ewallet.api.service;

import by.kliasheu.ewallet.api.dto.transaction.TransactionDto;
import by.kliasheu.ewallet.api.model.TransactionType;
import by.kliasheu.ewallet.api.model.Wallet;

import java.math.BigDecimal;
import java.util.List;

public interface TransactionService {
    TransactionDto createTransaction(Wallet wallet, BigDecimal amount, TransactionType type);

    List<TransactionDto> findByWalletId(long walletId);
}
