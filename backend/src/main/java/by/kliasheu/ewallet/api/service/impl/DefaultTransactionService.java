package by.kliasheu.ewallet.api.service.impl;

import by.kliasheu.ewallet.api.dao.TransactionRepository;
import by.kliasheu.ewallet.api.dto.transaction.TransactionDto;
import by.kliasheu.ewallet.api.mapper.TransactionMapper;
import by.kliasheu.ewallet.api.model.Transaction;
import by.kliasheu.ewallet.api.model.TransactionType;
import by.kliasheu.ewallet.api.model.Wallet;
import by.kliasheu.ewallet.api.service.TransactionService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DefaultTransactionService implements TransactionService {

    TransactionMapper transactionMapper;
    TransactionRepository transactionRepository;

    @Override
    public TransactionDto createTransaction(Wallet wallet, BigDecimal amount, TransactionType type) {
        if (amount.compareTo(BigDecimal.ZERO) <= 0) throw new IllegalArgumentException("Transaction amount must be >0");
        final Transaction transaction = Transaction.builder()
                .type(type)
                .amount(amount)
                .wallet(wallet)
                .build();
        transactionRepository.save(transaction);
        return transactionMapper.toDto(transaction);
    }

    @Override
    public List<TransactionDto> findByWalletId(long walletId) {
        return transactionRepository.findByWalletIdOrderByCreatedAtDesc(walletId).stream()
                .map(transactionMapper::toDto)
                .collect(Collectors.toList());
    }
}
