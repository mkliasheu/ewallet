package by.kliasheu.ewallet.api.dto;

import by.kliasheu.ewallet.api.model.TransactionType;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class TransactionDto {
    long id;
    long walletId;
    BigDecimal amount;
    TransactionType type;
}
