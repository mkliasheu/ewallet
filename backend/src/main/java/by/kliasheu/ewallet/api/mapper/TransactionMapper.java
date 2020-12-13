package by.kliasheu.ewallet.api.mapper;

import by.kliasheu.ewallet.api.dto.NewTransactionRequest;
import by.kliasheu.ewallet.api.dto.TransactionDto;
import by.kliasheu.ewallet.api.model.Transaction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TransactionMapper {

    @Mapping(target = "walletId", source = "transaction.wallet.id")
    TransactionDto toDto(Transaction transaction);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "wallet", ignore = true)
    @Mapping(target = "type", ignore = true)
    Transaction toEntity(NewTransactionRequest newTransactionRequest);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "wallet", ignore = true)
    Transaction toEntity(TransactionDto transactionDto);
}
